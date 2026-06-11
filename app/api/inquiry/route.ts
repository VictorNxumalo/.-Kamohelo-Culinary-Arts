import { NextResponse } from "next/server";
import { submitInquiry } from "@/lib/inquiry-backend";
import { validateInquiryPayload } from "@/lib/inquiry";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = validateInquiryPayload(body);

    if (!validated.ok) {
      return NextResponse.json({ error: validated.error }, { status: 400 });
    }

    const backend = await submitInquiry(validated.data);

    return NextResponse.json({
      success: true,
      backend,
      message: "Your inquiry has been received. We will respond within 24–48 hours.",
    });
  } catch (error) {
    console.error("Inquiry submission error:", error);
    const message =
      error instanceof Error ? error.message : "Unable to submit inquiry.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
