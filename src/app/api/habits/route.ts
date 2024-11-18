import { createClient } from '@/supabase/server';
import { HabitInfo } from '@/types/Habit';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const day = searchParams.get('day');

    const res = await fetch(`${process.env.NEXT_PUBLIC_JSONSERVER_URL}`);

    const habits: HabitInfo[] = await res.json();
    const filteredHabits = day ? habits.filter((habit) => habit.scheduledDays.includes(day)) : habits;

    return NextResponse.json(filteredHabits);
}

// export async function POST(req: NextRequest) {
//     const formData = await req.json();
//     const newHabit = {
//         id: crypto.randomUUID(),
//         ...formData,
//         isCompleted: false,
//     };

//     const res = await fetch(`${process.env.NEXT_PUBLIC_JSONSERVER_URL}`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newHabit),
//     });

//     const data = await res.json();
//     return NextResponse.json({ data });
// }

export async function POST(req: NextRequest) {
    const res = await req.json();
    const { chosenCategories, chosenTime } = res;

    const supabase = createClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
    }

    const habitsData = chosenCategories.map((category) => ({
        habit_name: category,
        remind: chosenTime,
    }));

    const { data, error } = await supabase.from('habits').insert(habitsData).eq('user_id', user.id);

    console.log(data, error);

    return NextResponse.json({ status: 204 });
}

export async function PATCH(req: NextRequest) {
    const updatedHabit = await req.json();

    const res = await fetch(`${process.env.NEXT_PUBLIC_JSONSERVER_URL}/${updatedHabit.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedHabit),
    });

    return NextResponse.json(await res.json());
}
