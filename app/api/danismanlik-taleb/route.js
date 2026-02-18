import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(text) {
  if (typeof text !== "string") return "";
  const map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" };
  return text.replace(/[&<>"']/g, (c) => map[c]);
}

/** @param {Request} req */
export async function POST(req) {
  if (!process.env.RESEND_API_KEY) {
    return Response.json(
      { error: "RESEND_API_KEY tanımlı değil." },
      { status: 500 }
    );
  }

  try {
    const body = await req.json();
    const { ad, email, telefon, mesaj } = body;

    if (!ad || !email || !telefon) {
      return Response.json(
        { error: "Ad, e-posta ve telefon zorunludur." },
        { status: 400 }
      );
    }

    const mesajMetin = typeof mesaj === "string" && mesaj.trim() ? mesaj.trim() : "Belirtilmedi";
    const from = process.env.RESEND_FROM || "Lederkon İletişim <noreply@lederkon.com>";

    const { data, error } = await resend.emails.send({
      from,
      to: ["info@lederkon.com"],
      subject: `Ücretsiz Danışmanlık Talebi: ${ad}`,
      html: `
        <h2>Yeni danışmanlık talebi</h2>
        <p><strong>Ad Soyad:</strong> ${escapeHtml(ad)}</p>
        <p><strong>E-posta:</strong> ${escapeHtml(email)}</p>
        <p><strong>Telefon:</strong> ${escapeHtml(telefon)}</p>
        <p><strong>Proje / Danışmanlık Konusu:</strong></p>
        <p>${escapeHtml(mesajMetin).replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      return Response.json({ error: error.message || error }, { status: 500 });
    }

    return Response.json(data);
  } catch (err) {
    return Response.json(
      { error: err.message || "E-posta gönderilemedi." },
      { status: 500 }
    );
  }
}
