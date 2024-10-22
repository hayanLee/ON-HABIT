import { HABITS } from '@/constant/apiEndpoint';
import { HabitInfo } from '@/types/Habit';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
    const res = await fetch(HABITS);
    const habits: HabitInfo[] = await res.json();
    return NextResponse.json(habits);
}

export async function POST(req: NextRequest) {
    const formData = await req.json();
    const newHabit = {
        id: crypto.randomUUID(),
        ...formData,
        isCompleted: false,
    };

    const res = await fetch(HABITS, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newHabit),
    });

    const data = await res.json();
    return NextResponse.json({ data });
}

export async function PATCH(req: NextRequest) {
    const updatedHabit = await req.json();

    const res = await fetch(`${HABITS}/${updatedHabit.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedHabit),
    });

    return NextResponse.json(await res.json());
}
