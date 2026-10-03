"use client";

import { useState } from "react";
import { eventTypes } from "@/content/site";
import { Button } from "@/components/ui/Button";
import {
  SelectField,
  TextAreaField,
  TextField,
} from "@/components/forms/FormField";
import { TurnstileWidget } from "@/components/forms/TurnstileWidget";
import {
  bookingRequestSchema,
  type BookingRequestFormData,
} from "@/lib/validation/booking";
import { getPublicEnv } from "@/lib/env";

type FormErrors = Partial<Record<keyof BookingRequestFormData, string>>;

const initialValues: BookingRequestFormData = {
  name: "",
  email: "",
  phone: "",
  event_date: "",
  event_location: "",
  event_type: "Geburtstag",
  guest_count: 1,
  message: "",
  turnstileToken: undefined,
};

export function BookingForm() {
  const [values, setValues] = useState<BookingRequestFormData>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const { turnstileEnabled } = getPublicEnv();

  function updateField<K extends keyof BookingRequestFormData>(
    key: K,
    value: BookingRequestFormData[K],
  ) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    setFormError(null);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError(null);

    const parsed = bookingRequestSchema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors: FormErrors = {};
      for (const issue of parsed.error.issues) {
        const field = issue.path[0];
        if (
          typeof field === "string" &&
          !fieldErrors[field as keyof FormErrors]
        ) {
          fieldErrors[field as keyof FormErrors] = issue.message;
        }
      }
      setErrors(fieldErrors);
      return;
    }

    if (turnstileEnabled && !parsed.data.turnstileToken) {
      setFormError("Bitte bestätige die Spam-Schutz-Prüfung.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(parsed.data),
      });

      const payload = (await response.json()) as {
        success?: boolean;
        message?: string;
        errors?: FormErrors;
      };

      if (!response.ok) {
        setErrors(payload.errors ?? {});
        setFormError(
          payload.message ?? "Senden fehlgeschlagen. Bitte versuche es erneut.",
        );
        setStatus("error");
        return;
      }

      setStatus("success");
      setValues(initialValues);
    } catch {
      setFormError("Netzwerkfehler. Bitte versuche es erneut.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="border-success/30 rounded-2xl border bg-green-50 p-6 text-green-900"
        role="status"
      >
        <h3 className="text-lg font-semibold">Anfrage gesendet</h3>
        <p className="mt-2 text-sm">
          Vielen Dank! Deine Anfrage ist angekommen – ich melde mich bald bei
          dir.
        </p>
        <Button
          type="button"
          variant="secondary"
          className="mt-4"
          onClick={() => setStatus("idle")}
        >
          Weitere Anfrage senden
        </Button>
      </div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField
          id="name"
          name="name"
          label="Name"
          autoComplete="name"
          required
          value={values.name}
          error={errors.name}
          onChange={(event) => updateField("name", event.target.value)}
        />
        <TextField
          id="email"
          name="email"
          type="email"
          label="E-Mail"
          autoComplete="email"
          required
          value={values.email}
          error={errors.email}
          onChange={(event) => updateField("email", event.target.value)}
        />
        <TextField
          id="phone"
          name="phone"
          type="tel"
          label="Telefon"
          autoComplete="tel"
          required
          value={values.phone}
          error={errors.phone}
          onChange={(event) => updateField("phone", event.target.value)}
        />
        <TextField
          id="event_date"
          name="event_date"
          type="date"
          label="Datum der Feier"
          required
          value={values.event_date}
          error={errors.event_date}
          onChange={(event) => updateField("event_date", event.target.value)}
        />
        <TextField
          id="event_location"
          name="event_location"
          label="Ort der Feier"
          required
          value={values.event_location}
          error={errors.event_location}
          onChange={(event) =>
            updateField("event_location", event.target.value)
          }
        />
        <SelectField
          id="event_type"
          name="event_type"
          label="Anlass"
          required
          value={values.event_type}
          error={errors.event_type}
          onChange={(event) =>
            updateField(
              "event_type",
              event.target.value as BookingRequestFormData["event_type"],
            )
          }
        >
          {eventTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </SelectField>
        <TextField
          id="guest_count"
          name="guest_count"
          type="number"
          label="Anzahl der Gäste"
          min={1}
          required
          value={values.guest_count}
          error={errors.guest_count}
          onChange={(event) =>
            updateField("guest_count", Number(event.target.value))
          }
        />
      </div>

      <TextAreaField
        id="message"
        name="message"
        label="Nachricht"
        required
        value={values.message}
        error={errors.message}
        onChange={(event) => updateField("message", event.target.value)}
      />

      <TurnstileWidget
        onVerify={(token) => updateField("turnstileToken", token)}
        onExpire={() => updateField("turnstileToken", undefined)}
      />

      {formError ? (
        <p className="text-danger text-sm" role="alert">
          {formError}
        </p>
      ) : null}

      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Wird gesendet..." : "Anfrage senden"}
      </Button>
    </form>
  );
}
