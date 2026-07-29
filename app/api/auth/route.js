import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const provider = searchParams.get('provider');
  
  if (provider === 'github') {
    const clientId = process.env.GITHUB_CLIENT_ID;
    const redirectUri = `https://www.cstweak.com.tr/api/auth/callback`;
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=repo,user`;
    
    return NextResponse.redirect(githubAuthUrl);
  }

  return NextResponse.json({ error: 'Provider not supported' }, { status: 400 });
}