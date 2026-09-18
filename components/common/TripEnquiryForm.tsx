"use client";

import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { FormField } from "@/components/common/FormField";
import { DatePicker } from "@/components/common/DatePicker";
import { Select } from "@/components/ui/Select";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { destinationOptions } from "@/lib/destinationOptions";
import { tripLengthOptions } from "@/lib/tripFormOptions";
import { useTripPlan, type TripPlan } from "@/lib/TripPlanContext";
import { contactPhoneDisplay, contactPhoneHref } from "@/lib/contactDetails";
import { submitTripEnquiry, TripEnquiryError } from "@/lib/tripEnquiryApi";

interface FormState {
  name: string;
  email: string;
  phone: string;
  from: string;
  where: string;
  when: string;
  flexibility: string;
  duration: string;
  message: string;
}

const emptyForm: FormState = {
  name: "",
  email: "",
  phone: "",
  from: "",
  where: "",
  when: "",
  flexibility: "",
  duration: "",
  message: "",
};

/* Deliberately loose. The job here is to catch a missing @ or a stray space,
   not to adjudicate what a valid address is. */
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface TripEnquiryFormProps {
  /** Namespaces field ids so two instances can coexist on one page. */
  idPrefix: string;
  /** Tone of the form fields, matched to the section/card background behind it. */
  tone?: "default" | "onCream" | "onWhite";
  /** Copy shown after a successful submit. */
  successBody: string;
  className?: string;
}

export function TripEnquiryForm({
  idPrefix,
  tone = "default",
  successBody,
  className = "",
}: Readonly<TripEnquiryFormProps>) {
  const { plan, clearPlan } = useTripPlan();
  const [form, setForm] = useState<FormState>(emptyForm);
  const [error, setError] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  /* Hidden from people, irresistible to the bots that walk static forms. */
  const [botField, setBotField] = useState("");

  /* The hero bar hands its answers over through context. Folding them in during
     render rather than in an effect means the fields are already filled on the
     paint the reader arrives at, instead of flashing empty first. */
  const [appliedPlan, setAppliedPlan] = useState<TripPlan | null>(null);
  if (plan && plan !== appliedPlan) {
    setAppliedPlan(plan);
    setForm((prev) => ({
      ...prev,
      from: plan.from || prev.from,
      where: plan.where || prev.where,
      when: plan.when || prev.when,
      flexibility: plan.flexibility || prev.flexibility,
      duration: plan.duration || prev.duration,
    }));
  }

  useEffect(() => {
    if (appliedPlan) clearPlan();
  }, [appliedPlan, clearPlan]);

  /* The maxLength on each field is deliberate rather than cosmetic: the form
     posts straight to a public, unauthenticated endpoint, and an unbounded
     message field lets a script push an arbitrarily large body at it. The
     ceilings are far above anything a person would type. */
  const set = (field: keyof FormState) => (value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    /* Name and email are the two an enquiry cannot be answered without. Phone
       stays optional on purpose. */
    if (!form.name.trim() || !form.email.trim()) {
      setError("We need your name and email address so we can come back to you.");
      return;
    }

    if (!EMAIL_PATTERN.test(form.email.trim())) {
      setError("That email address does not look right. Could you check it over?");
      return;
    }

    if (botField) return;

    setError("");
    setIsSending(true);
    try {
      await submitTripEnquiry(form);
      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof TripEnquiryError
          ? err.message
          : "We could not send that just then. Please try again in a moment.",
      );
    } finally {
      setIsSending(false);
    }
  };

  const id = (field: string) => `${idPrefix}-${field}`;
  const fieldTone = tone === "onWhite" ? "onWhite" : "default";
  const textareaTone = tone === "onWhite" ? "onCream" : tone;

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`mx-auto max-w-2xl bg-primary-cream p-10 text-center sm:p-14 ${className}`}
      >
        <div className="mb-6 inline-flex items-center justify-center bg-white p-5">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8 fill-none stroke-primary-sky">
            <path d="M4 12L9 17L20 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <Heading as="h2" size="md">
          Thank you, {form.name.split(" ")[0]}
        </Heading>
        <Text size="lg" className="mt-[13px] text-primary-navy">
          {successBody}{" "}
          <a href={`tel:+${contactPhoneHref}`} className="font-semibold text-primary-navy underline-offset-2 hover:underline">
            {contactPhoneDisplay}
          </a>
          .
        </Text>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setForm(emptyForm);
            setError("");
          }}
          className="mt-8 cursor-pointer text-sm font-semibold text-primary-navy underline-offset-2 transition-colors hover:text-primary-sky hover:underline focus-visible:outline-2 focus-visible:outline-primary-navy"
        >
          Send another enquiry
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`grid grid-cols-1 gap-6 sm:grid-cols-2 ${className}`}
      noValidate
    >
      <FormField id={id("name")} label="Your name" required>
        <Input
          id={id("name")}
          name="name"
          maxLength={200}
          type="text"
          tone={fieldTone}
          autoComplete="name"
          placeholder="Your full name"
          value={form.name}
          onChange={(e) => set("name")(e.target.value)}
        />
      </FormField>

      <FormField id={id("email")} label="Email address" required>
        <Input
          id={id("email")}
          name="email"
          maxLength={254}
          type="email"
          tone={fieldTone}
          autoComplete="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={(e) => set("email")(e.target.value)}
        />
      </FormField>

      <FormField id={id("phone")} label="Phone number">
        <Input
          id={id("phone")}
          name="phone"
          maxLength={40}
          type="tel"
          tone={fieldTone}
          autoComplete="tel"
          placeholder="07700 900000"
          value={form.phone}
          onChange={(e) => set("phone")(e.target.value)}
        />
      </FormField>

      <FormField id={id("from")} label="Travelling from">
        <Input
          id={id("from")}
          name="from"
          maxLength={120}
          type="text"
          tone={fieldTone}
          autoComplete="address-level2"
          placeholder="e.g. Manchester, UK"
          value={form.from}
          onChange={(e) => set("from")(e.target.value)}
        />
      </FormField>

      <FormField id={id("where")} label="Destination">
        <Select
          id={id("where")}
          name="where"
          tone={fieldTone}
          options={destinationOptions}
          value={form.where}
          onChange={(e) => set("where")(e.target.value)}
        />
      </FormField>

      <FormField id={id("when")} label="Departure date">
        <DatePicker
          id={id("when")}
          name="when"
          tone={fieldTone}
          placeholder="Pick a date"
          value={form.when}
          onChange={set("when")}
          flexibility={form.flexibility}
          onFlexibilityChange={set("flexibility")}
        />
      </FormField>

      <FormField id={id("duration")} label="Trip length">
        <Select
          id={id("duration")}
          name="duration"
          tone={fieldTone}
          options={tripLengthOptions}
          value={form.duration}
          onChange={(e) => set("duration")(e.target.value)}
        />
      </FormField>

      <div className="sm:col-span-2">
        <FormField id={id("message")} label="Anything else we should know?">
          <Textarea
            id={id("message")}
            name="message"
            maxLength={4000}
            rows={4}
            tone={textareaTone}
            placeholder="Who is travelling, and is it for a special occasion? A wedding, a honeymoon, a proposal, a 50th birthday. Anything that matters to you is worth telling us."
            value={form.message}
            onChange={(e) => set("message")(e.target.value)}
          />
        </FormField>
      </div>

      {/* Never shown and never focusable, so anything that fills it in is not a
          person. Named to look like the field a scraper expects. */}
      <div aria-hidden="true" className="hidden">
        <label htmlFor={id("company")}>Company</label>
        <input
          id={id("company")}
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={botField}
          onChange={(e) => setBotField(e.target.value)}
        />
      </div>

      {/* Off screen rather than absent, so a screen reader is already listening
          on the region when the message arrives. */}
      <div className="flex flex-col items-center justify-center gap-3 pt-2 text-center sm:col-span-2">
        <p aria-live="polite" role="status" className={`text-sm text-primary-navy ${error ? "" : "sr-only"}`}>
          {error}
        </p>
        <Button type="submit" disabled={isSending} className="mx-auto disabled:cursor-not-allowed disabled:opacity-60">
          {isSending ? "Sending..." : "Send my travel details"}
        </Button>
        <p className="max-w-md text-xs leading-relaxed text-primary-navy/70">
          We only use your details to plan your trip. Read how in our{" "}
          <Link
            href="/privacy"
            className="cursor-pointer underline underline-offset-2 transition-colors duration-150 hover:text-primary-sky focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-navy"
          >
            privacy policy
          </Link>
          .
        </p>
      </div>
    </form>
  );
}
