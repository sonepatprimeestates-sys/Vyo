import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    // TEMP response (no AI yet)
    return res.status(200).json({
      insight: "You showed up today. That itself matters. Be gentle with yourself."
    });

  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
}
