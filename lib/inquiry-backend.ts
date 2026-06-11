import type { InquiryPayload } from "@/lib/inquiry";
import { INQUIRY_TYPE_LABELS } from "@/lib/inquiry";

function hasSupabaseConfig(): boolean {
  return Boolean(
    process.env.SUPABASE_URL &&
      (process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY)
  );
}

async function submitToSupabase(data: InquiryPayload): Promise<void> {
  const url = process.env.SUPABASE_URL!;
  const key =
    process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY!;

  const response = await fetch(`${url}/rest/v1/inquiries`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: key,
      Authorization: `Bearer ${key}`,
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      phone: data.phone ?? null,
      inquiry_type: data.inquiryType,
      event_date: data.eventDate ?? null,
      guest_count: data.guestCount ?? null,
      location: data.location ?? null,
      message: data.message,
      source_page: data.sourcePage ?? null,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Supabase insert failed: ${response.status} ${text}`);
  }
}

async function submitToFormspree(data: InquiryPayload): Promise<void> {
  const formId = process.env.FORMSPREE_FORM_ID;
  if (!formId) {
    throw new Error(
      "No form backend configured. Set FORMSPREE_FORM_ID or Supabase credentials in .env.local"
    );
  }

  const response = await fetch(`https://formspree.io/f/${formId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      phone: data.phone,
      inquiryType: INQUIRY_TYPE_LABELS[data.inquiryType],
      eventDate: data.eventDate,
      guestCount: data.guestCount,
      location: data.location,
      message: data.message,
      sourcePage: data.sourcePage,
      _subject: `Kamohelo Culinary — ${INQUIRY_TYPE_LABELS[data.inquiryType]} inquiry`,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Formspree submission failed: ${response.status} ${text}`);
  }
}

export async function submitInquiry(data: InquiryPayload): Promise<"supabase" | "formspree"> {
  if (hasSupabaseConfig()) {
    await submitToSupabase(data);
    return "supabase";
  }
  await submitToFormspree(data);
  return "formspree";
}
