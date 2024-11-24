import { createClient } from '@/supabase/server';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    const supabase = createClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
    }

    const detailHabit = await supabase.from('habits').select('*').eq('user_id', user.id).eq('id', id).single();
    console.log(detailHabit);
    return NextResponse.json(detailHabit.data || []);
}
