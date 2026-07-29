import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  if (!code) {
    return NextResponse.json({ error: 'No code provided' }, { status: 400 });
  }

  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;

  try {
    const response = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'json',
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
      }),
    });

    const data = await response.json();
    const token = data.access_token;

    if (!token) {
      return NextResponse.json({ error: 'Failed to get access token' }, { status: 400 });
    }

    // Decap CMS'e token'ı güvenli bir şekilde mesaj olarak gönderen script
    const content = `
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Auth Success</title>
        </head>
        <body>
          <script>
            function receiveMessage(e) {
              window.opener.postMessage(
                'authorization:github:success:${JSON.stringify({ token, provider: 'github' })}',
                e.origin
              );
              window.close();
            }
            window.addEventListener("message", receiveMessage, false);
            window.opener.postMessage("authorizing:github", "*");
          </script>
        </body>
      </html>
    `;

    return new Response(content, {
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
  } catch (error) {
    return NextResponse.json({ error: 'Authentication failed' }, { status: 500 });
  }
}