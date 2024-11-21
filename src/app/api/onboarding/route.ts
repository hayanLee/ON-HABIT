import { createClient } from '@/supabase/server';
import { NextRequest, NextResponse } from 'next/server';

// onboarding
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
        scheduled_days: ['Mon', 'Wed', 'Fri'], // 임시
    }));

    const { data, error } = await supabase.from('habits').insert(habitsData);

    console.log(data, error);

    return NextResponse.json({ status: 204 });
}
