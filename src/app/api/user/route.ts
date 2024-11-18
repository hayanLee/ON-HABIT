import { InfoFormValues } from '@/app/(providers)/(root)/onboarding/info/page';
import { createClient } from '@/supabase/server';
import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(req: NextRequest) {
    const res: InfoFormValues = await req.json();

    const supabase = createClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
    }

    const { nickname, birth, location } = res;

    const { data, error } = await supabase
        .from('users')
        .update({ nickname, birth, location })
        .eq('id', user.id)
        .select();

    if (error) {
        console.error('Update error:', error);
        return NextResponse.json({ error: error.message }, { status: 400 });
    }

    console.log('Update result:', data);
    return NextResponse.json({ status: 204 });
}
