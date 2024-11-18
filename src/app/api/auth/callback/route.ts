import { NextResponse } from 'next/server';
// The client you created from the Server-Side Auth instructions
import { createClient } from '@/supabase/server';

export async function GET(request: Request) {
    const { searchParams, origin } = new URL(request.url);
    const code = searchParams.get('code');
    // if "next" is in param, use it as the redirect URL
    const next = searchParams.get('next') ?? '/';

    // return the user to an error page with instructions
    if (!code) return NextResponse.redirect(`${origin}/auth/auth-code-error`);

    const supabase = await createClient();
    const { error: authError } = await supabase.auth.exchangeCodeForSession(code);
    if (authError) return NextResponse.redirect(`${origin}/auth/auth-code-error`);

    const {
        data: { user },
        error: userError,
    } = await supabase.auth.getUser();
    if (!user || userError) return NextResponse.redirect(`${origin}/auth/auth-code-error`);

    const { data: userData, error: userDataError } = await supabase
        .from('users')
        .select('is_first_login, nickname')
        .eq('id', user.id)
        .single();
    if (userDataError) throw userDataError;

    const redirectUrl = userData.is_first_login
        ? userData.nickname
            ? `${origin}/onboarding/category`
            : `${origin}/onboarding/info`
        : `${origin}${next}`;

    return NextResponse.redirect(redirectUrl);
}
