// Serverless function to send EmailJS requests from the server-side so secrets
// are never embedded in the client bundle. Configure EMAILJS_* env vars in
// Netlify site settings (Build & deploy → Environment).

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  let body = {};
  try {
    body = JSON.parse(event.body || '{}');
  } catch (err) {
    return { statusCode: 400, body: 'Invalid JSON' };
  }

  const templateParams = body.templateParams || {};

  const payload = {
    service_id: process.env.EMAILJS_SERVICE_ID,
    template_id: process.env.EMAILJS_TEMPLATE_ID,
    // user_id may not be required if you're using a server-side access token.
    user_id: process.env.EMAILJS_USER_ID || process.env.EMAILJS_PUBLIC_KEY,
    template_params: templateParams,
    // optional access token / private key if needed by your EmailJS setup
    // accessToken: process.env.EMAILJS_PRIVATE_KEY
  };

  try {
    const resp = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const text = await resp.text();
    return { statusCode: resp.ok ? 200 : 500, body: text };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return { statusCode: 500, body: `Server error sending email: ${message}` };
  }
}
