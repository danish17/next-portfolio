import { NextResponse } from "next/server";

const FORM_ID = 1483;
const FIELD_NAME = 1;
const FIELD_EMAIL = 2;
const FIELD_MESSAGE = 3;

export async function POST(req: Request) {
  try {
    const { name, email, message, token } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields required" }, { status: 400 });
    }

    // Verify Turnstile token
    if (!token) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const verify = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: process.env.TURNSTILE_SECRET_KEY!,
          response: token,
        }).toString(),
      }
    );

    const verifyResult = await verify.json();
    if (!verifyResult.success) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const body = new URLSearchParams();
    body.set("action", "wpforms_submit");
    body.set(`wpforms[id]`, String(FORM_ID));
    body.set(`wpforms[fields][${FIELD_NAME}]`, name);
    body.set(`wpforms[fields][${FIELD_EMAIL}]`, email);
    body.set(`wpforms[fields][${FIELD_MESSAGE}]`, message);

    const res = await fetch(
      "https://danishshakeel.me/wp-admin/admin-ajax.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Origin: "https://iamdani.sh",
        },
        body: body.toString(),
      }
    );

    if (!res.ok) {
      const text = await res.text();
      console.error("WPForms error:", res.status, text);
      return NextResponse.json(
        { error: "Submission failed" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
