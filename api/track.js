export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false });
  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  body = body && typeof body === 'object' ? body : {};
  const clean = {
    event: String(body.event || 'page_view').slice(0, 80),
    visitorId: String(body.visitorId || 'unknown').slice(0, 120),
    recipientToken: String(body.recipientToken || '').slice(0, 80),
    source: String(body.source || 'direct').slice(0, 80),
    campaign: String(body.campaign || '').slice(0, 80),
    path: String(body.path || '/').slice(0, 200),
    referrer: String(body.referrer || 'direct').slice(0, 160),
    ts: String(body.ts || new Date().toISOString()).slice(0, 40),
    detail: body.detail && typeof body.detail === 'object' ? body.detail : undefined
  };
  console.log('TNIGS_VIEW', JSON.stringify(clean));
  res.setHeader('Cache-Control', 'no-store');
  return res.status(200).json({ ok: true });
}
