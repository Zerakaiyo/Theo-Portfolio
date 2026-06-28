export const dynamic = 'force-dynamic';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const fallback = searchParams.get('fallback') || 'Untitled';

  if (!id) {
    return Response.json({ title: fallback }, { status: 200 });
  }

  try {
    const oembedUrl = `https://www.youtube.com/oembed?url=${encodeURIComponent(`https://www.youtube.com/watch?v=${id}`)}&format=json`;
    const response = await fetch(oembedUrl, {
      next: { revalidate: 60 * 60 * 24 },
      headers: { 'Accept': 'application/json' },
    });

    if (!response.ok) {
      return Response.json({ title: fallback }, { status: 200 });
    }

    const data = await response.json();
    return Response.json({ title: data?.title || fallback }, { status: 200 });
  } catch (error) {
    return Response.json({ title: fallback }, { status: 200 });
  }
}
