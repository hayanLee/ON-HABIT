import { createClient } from '@/supabase/server';
import { NextRequest, NextResponse } from 'next/server';

// 요일별 습관 가져오기
export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const day = searchParams.get('day') as string;

    const supabase = createClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
    }

    const habitsForDay = await supabase
        .from('habits')
        .select('*')
        .eq('user_id', user.id)
        .contains('scheduled_days', JSON.stringify([{ day }]));

    return NextResponse.json(habitsForDay.data ?? []);
}

// create habit
export async function POST(req: NextRequest) {
    const res = await req.json();

    const supabase = createClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
    }

    const { error } = await supabase.from('habits').insert(res);
    if (error) throw error.message;

    return NextResponse.json({ status: 204 });
}

// export async function PATCH(req: NextRequest) {
//     const res = await req.json();

//     const supabase = createClient();
//     const {
//         data: { user },
//     } = await supabase.auth.getUser();

//     if (!user) {
//         return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
//     }

//     const { data, error } = await supabase.from('habits').update().eq('user_id', user.id);

//     const res = await fetch(`${process.env.NEXT_PUBLIC_JSONSERVER_URL}/${updatedHabit.id}`, {
//         method: 'PATCH',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(updatedHabit),
//     });

//     return NextResponse.json(await res.json());
// }
