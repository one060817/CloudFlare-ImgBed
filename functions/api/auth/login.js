export async function onRequestPost(context) {
  return new Response('Login success', {
    status: 200,
    headers: {
      'Set-Cookie': 'session=bypassed_token; Path=/; HttpOnly; SameSite=Strict;',
    },
  });
}
