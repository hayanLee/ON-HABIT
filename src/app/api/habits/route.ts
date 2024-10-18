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
        completed: false,
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
