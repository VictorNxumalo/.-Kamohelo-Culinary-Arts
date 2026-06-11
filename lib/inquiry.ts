export const INQUIRY_TYPE_VALUES = [
  "private-chef",
  "catering",
  "consulting",
  "general",
] as const;

export type InquiryType = (typeof INQUIRY_TYPE_VALUES)[number];

export const INQUIRY_TYPE_LABELS: Record<InquiryType, string> = {
  "private-chef": "Private Chef",
  catering: "Catering",
  consulting: "Consulting",
  general: "General Inquiry",
};

export type InquiryPayload = {
  name: string;
  email: string;
  phone?: string;
  inquiryType: InquiryType;
  eventDate?: string;
  guestCount?: string;
  location?: string;
  message: string;
  sourcePage?: string;
};

export function isValidInquiryType(value: string): value is InquiryType {
  return INQUIRY_TYPE_VALUES.includes(value as InquiryType);
}

export function normalizeInquiryType(value?: string | null): InquiryType {
  if (value && isValidInquiryType(value)) return value;
  return "general";
}

export function validateInquiryPayload(body: unknown): {
  ok: true;
  data: InquiryPayload;
} | {
  ok: false;
  error: string;
} {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid request body." };
  }

  const b = body as Record<string, unknown>;
  const name = typeof b.name === "string" ? b.name.trim() : "";
  const email = typeof b.email === "string" ? b.email.trim() : "";
  const message = typeof b.message === "string" ? b.message.trim() : "";
  const inquiryTypeRaw = typeof b.inquiryType === "string" ? b.inquiryType : "general";

  if (!name) return { ok: false, error: "Name is required." };
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "A valid email is required." };
  }
  if (!message) return { ok: false, error: "Message is required." };
  if (!isValidInquiryType(inquiryTypeRaw)) {
    return { ok: false, error: "Invalid inquiry type." };
  }

  return {
    ok: true,
    data: {
      name,
      email,
      phone: typeof b.phone === "string" ? b.phone.trim() : undefined,
      inquiryType: inquiryTypeRaw,
      eventDate: typeof b.eventDate === "string" ? b.eventDate.trim() : undefined,
      guestCount: typeof b.guestCount === "string" ? b.guestCount.trim() : undefined,
      location: typeof b.location === "string" ? b.location.trim() : undefined,
      message,
      sourcePage: typeof b.sourcePage === "string" ? b.sourcePage.trim() : undefined,
    },
  };
}
