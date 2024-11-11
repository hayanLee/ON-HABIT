import { createClient } from '@/supabase/server';
import { Provider } from '@supabase/supabase-js';

import { NextRequest, NextResponse } from 'next/server';
export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const provider = searchParams.get('provider') as Provider; // kakao

    const supabase = createClient();

    try {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider,
            options: {
                redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/callback`,
            },
        });
        if (error) throw error;
        if (data.url) return NextResponse.redirect(data.url);
    } catch (e) {
        console.log('OAuth Error :', e);
    }
}
