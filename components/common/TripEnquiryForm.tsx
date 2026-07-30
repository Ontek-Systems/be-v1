"use client";

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
import { useTripPlan } from "@/lib/TripPlanContext";

interface FormState {
  name: string;
  email: string;
  phone: string;
  from: string;
  where: string;
  when: string;
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
  duration: "",
  message: "",
};

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
  const [showPrompt, setShowPrompt] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!plan) return;
    setForm((prev) => ({
      ...prev,
      from: plan.from || prev.from,
      where: plan.where || prev.where,
      when: plan.when || prev.when,
      duration: plan.duration || prev.duration,
    }));
    clearPlan();
  }, [plan, clearPlan]);

  const set = (field: keyof FormState) => (value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim()) {
      setShowPrompt(true);
      return;
    }

    setShowPrompt(false);
    setSubmitted(true);
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
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8 fill-none stroke-primary-navy">
            <path d="M4 12L9 17L20 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <Heading as="h2" size="md">
          Thanks, {form.name.split(" ")[0]}!
        </Heading>
        <Text size="lg" className="mt-[13px] text-primary-navy">
          {successBody}{" "}
          <a href="tel:07789652136" className="font-semibold text-primary-navy underline-offset-2 hover:underline">
            07789 652 136
          </a>
          .
        </Text>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setForm(emptyForm);
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
          type="email"
          tone={fieldTone}
          autoComplete="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={(e) => set("email")(e.target.value)}
        />
      </FormField>

      <FormField id={id("phone")} label="Phone (optional)">
        <Input
          id={id("phone")}
          name="phone"
          type="tel"
          tone={fieldTone}
          autoComplete="tel"
          placeholder="07700 900000"
          value={form.phone}
          onChange={(e) => set("phone")(e.target.value)}
          style={form.phone ? { boxShadow: "inset 0 -2px 0 0 var(--color-primary-gold)" } : undefined}
        />
      </FormField>

      <FormField id={id("from")} label="Traveling from">
        <Input
          id={id("from")}
          name="from"
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
          placeholder="e.g. next spring, or June 2027"
          value={form.when}
          onChange={set("when")}
        />
      </FormField>

      <FormField id={id("duration")} label="Trip length (days)">
        <Input
          id={id("duration")}
          name="duration"
          type="number"
          tone={fieldTone}
          min={1}
          max={365}
          inputMode="numeric"
          placeholder="e.g. 10"
          value={form.duration}
          onChange={(e) => set("duration")(e.target.value)}
        />
      </FormField>

      <div className="sm:col-span-2">
        <FormField id={id("message")} label="Anything else we should know?">
          <Textarea
            id={id("message")}
            name="message"
            rows={4}
            tone={textareaTone}
            placeholder="Tell us a bit about the trip. Who you are travelling with, what matters most, any ideas you already have..."
            value={form.message}
            onChange={(e) => set("message")(e.target.value)}
          />
        </FormField>
      </div>

      <div className="flex flex-col items-center justify-center gap-3 pt-2 text-center sm:col-span-2">
        {showPrompt && (
          <p aria-live="polite" className="text-sm text-primary-navy">
            Could you pop in your name and email? We just need those two to get back to you.
          </p>
        )}
        <Button type="submit" className="mx-auto">
          Send my travel details
        </Button>
      </div>
    </form>
  );
}
