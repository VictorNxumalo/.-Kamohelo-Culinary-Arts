"use client";



import { useState } from "react";

import { Icon, IconLabel } from "@/components/icons/Icon";

import { INQUIRY_NEXT_STEPS } from "@/lib/constants";

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

        <p className="mt-4 font-body text-base font-light text-brand-cream-muted">

          Your inquiry has been received. Here is what happens next:

        </p>

        <ul className="mt-6 space-y-3 text-left">

          {INQUIRY_NEXT_STEPS.map((step) => (

            <li key={step.text} className="flex items-start gap-3 font-body text-sm text-brand-cream-muted">

              <Icon name={step.icon} size={16} className="mt-0.5 shrink-0 text-brand-gold" />

              {step.text}

            </li>

          ))}

        </ul>

        <button

          type="button"

          onClick={() => setStatus("idle")}

          className="btn-primary mt-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"

        >

          Send Another Inquiry

        </button>

      </div>

    );

  }



  return (

    <form onSubmit={handleSubmit} className="space-y-8" noValidate>

      <div>

        <label htmlFor="inquiryType" className="sub-label text-brand-text-muted">

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



      <div>

        <p className="form-section-label">Your Details</p>

        <div className="space-y-6">

          <div className="grid gap-6 md:grid-cols-2">

            <div>

              <label htmlFor="name" className="sub-label text-brand-text-muted">

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

              <label htmlFor="email" className="sub-label text-brand-text-muted">

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

            <label htmlFor="phone" className="sub-label text-brand-text-muted">

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

        </div>

      </div>



      {showEventFields && (

        <div>

          <p className="form-section-label">Event Details</p>

          <div className="grid gap-6 md:grid-cols-3">

            <div>

              <label htmlFor="eventDate" className="sub-label text-brand-text-muted">

                <IconLabel name="calendar">Event Date</IconLabel>

              </label>

              <input id="eventDate" name="eventDate" type="date" className="input-light mt-2" />

            </div>

            <div>

              <label htmlFor="guestCount" className="sub-label text-brand-text-muted">

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

              <label htmlFor="location" className="sub-label text-brand-text-muted">

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

        </div>

      )}



      <div>

        <p className="form-section-label">Message</p>

        <div>

          <label htmlFor="message" className="sub-label text-brand-text-muted">

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

      </div>



      {status === "error" && (

        <p className="font-body text-sm text-red-400" role="alert">

          {errorMessage}

        </p>

      )}



      <div className="text-center">

        <button

          type="submit"

          disabled={status === "loading"}

          className="btn-primary-solid inline-flex items-center gap-2 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg"

        >

          <Icon name="send" size={16} className={status === "loading" ? "animate-pulse" : ""} />

          {status === "loading" ? "Sending…" : submitLabel}

        </button>

      </div>

    </form>

  );

}

