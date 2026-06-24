export async function onRequest(context) {
  return new Response(JSON.stringify({ success: true, user: { role: 'admin' } }), {
    headers: { 'Content-Type': 'application/json' }
  });
}
