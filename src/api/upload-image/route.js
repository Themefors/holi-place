export async function POST(req) {
  try {
    const form = await req.formData()
    const file = form.get("file")
    if (!file) {
      return new Response(JSON.stringify({ success: false, message: "No file provided" }), {
        status: 400,
        headers: { "content-type": "application/json" },
      })
    }

    const apiKey = "b9d801dc23f129666ab26bcec55288e1" // replace with env in production

    const upstream = new FormData()
    upstream.append("image", file)

    const res = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
      method: "POST",
      body: upstream,
    })

    const json = await res.json()
    if (!res.ok || !json?.success) {
      return new Response(JSON.stringify({ success: false, message: json?.error?.message || "Upload failed" }), {
        status: 500,
        headers: { "content-type": "application/json" },
      })
    }

    const url = json?.data?.url || json?.data?.display_url
    return new Response(JSON.stringify({ success: true, url }), {
      status: 200,
      headers: { "content-type": "application/json" },
    })
  } catch (err) {
    return new Response(JSON.stringify({ success: false, message: err.message || "Server error" }), {
      status: 500,
      headers: { "content-type": "application/json" },
    })
  }
}
