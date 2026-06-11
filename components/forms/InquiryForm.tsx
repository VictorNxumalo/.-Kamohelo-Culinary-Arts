"use client";

import { useState } from "react";
import { Icon, IconLabel } from "@/components/icons/Icon";
import {
  INQUIRY_TYPE_ICONS,
  INQUIRY_TYPE_LABELS,
  INQUIRY_TYPE_VALUES,
  type InquiryType,
  normalizeInquiryType,
} from "@/lib/inquiry";

type InquiryFormProps = {
  defaultType?: InquiryType | string;
  sourcePage?: string;
  submitLabel?: string;
  showEventFields?: boolean;
};

export function InquiryForm({
  defaultType = "general",
  sourcePage,
  submitLabel = "Send Inquiry",
  showEventFields = true,
}: InquiryFormProps) {
  const [inquiryType, setInquiryType] = useState<InquiryType>(
    normalizeInquiryType(defaultType)
  );
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      inquiryType,
      eventDate: formData.get("eventDate"),
      guestCount: formData.get("guestCount"),
      location: formData.get("location"),
      message: formData.get("message"),
      sourcePage,
    };

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Submission failed.");
      }

      setStatus("success");
      form.reset();
      setInquiryType(normalizeInquiryType(defaultType));
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-brand-gold/30 bg-brand-gold/5 p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center border border-brand-gold/30 bg-brand-gold/10 text-brand-gold">
          <Icon name="check" size={22} />
        </div>
        <p className="brand-caps text-sm text-brand-gold">Thank You</p>
        <p className="mt-4 font-body text-sm font-light text-stone-600">
          Your inquiry has been received. We typically respond within 24–48 hours.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-primary mt-6 border-brand-gold text-brand-gold"
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div>
        <label htmlFor="inquiryType" className="sub-label text-stone-500">
          <IconLabel name={INQUIRY_TYPE_ICONS[inquiryType]}>Inquiry Type</IconLabel>
        </label>
        <select
          id="inquiryType"
          name="inquiryType"
          value={inquiryType}
          onChange={(e) => setInquiryType(normalizeInquiryType(e.target.value))}
          className="input-light mt-2"
        >
          {INQUIRY_TYPE_VALUES.map((value) => (
            <option key={value} value={value}>
              {INQUIRY_TYPE_LABELS[value]}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="sub-label text-stone-500">
            <IconLabel name="user">
              Name <span className="text-brand-gold">*</span>
            </IconLabel>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="input-light mt-2"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="sub-label text-stone-500">
            <IconLabel name="mail">
              Email <span className="text-brand-gold">*</span>
            </IconLabel>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="input-light mt-2"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="sub-label text-stone-500">
          <IconLabel name="phone">Phone</IconLabel>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className="input-light mt-2"
          placeholder="+27 …"
        />
      </div>

      {showEventFields && (
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <label htmlFor="eventDate" className="sub-label text-stone-500">
              <IconLabel name="calendar">Event Date</IconLabel>
            </label>
            <input id="eventDate" name="eventDate" type="date" className="input-light mt-2" />
          </div>
          <div>
            <label htmlFor="guestCount" className="sub-label text-stone-500">
              <IconLabel name="users">Guest Count</IconLabel>
            </label>
            <input
              id="guestCount"
              name="guestCount"
              type="text"
              className="input-light mt-2"
              placeholder="e.g. 12"
            />
          </div>
          <div>
            <label htmlFor="location" className="sub-label text-stone-500">
              <IconLabel name="map-pin">Location</IconLabel>
            </label>
            <input
              id="location"
              name="location"
              type="text"
              className="input-light mt-2"
              placeholder="City or venue"
            />
          </div>
        </div>
      )}

      <div>
        <label htmlFor="message" className="sub-label text-stone-500">
          <IconLabel name="message">
            Message <span className="text-brand-gold">*</span>
          </IconLabel>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="input-light mt-2"
          placeholder="Tell us about your event, dietary preferences, and any special requests…"
        />
      </div>

      {status === "error" && (
        <p className="font-body text-sm text-red-700" role="alert">
          {errorMessage}
        </p>
      )}

      <div className="text-center">
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary-solid inline-flex items-center gap-2 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Icon name="send" size={16} />
          {status === "loading" ? "Sending…" : submitLabel}
        </button>
      </div>
    </form>
  );
}
