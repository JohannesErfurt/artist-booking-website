import type {
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

type FieldProps = {
  label: string;
  id: string;
  error?: string;
  hint?: string;
};

export function TextField({
  label,
  id,
  error,
  hint,
  ...props
}: FieldProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-foreground block text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        className={`focus:border-brand-500 focus:ring-brand-100 w-full rounded-lg border bg-white px-3 py-3 text-base transition outline-none focus:ring-2 ${
          error ? "border-danger" : "border-border"
        }`}
        aria-invalid={Boolean(error)}
        aria-describedby={
          error ? `${id}-error` : hint ? `${id}-hint` : undefined
        }
        {...props}
      />
      {hint ? (
        <p id={`${id}-hint`} className="text-muted text-xs">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={`${id}-error`} className="text-danger text-sm" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function SelectField({
  label,
  id,
  error,
  children,
  ...props
}: FieldProps & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-foreground block text-sm font-medium">
        {label}
      </label>
      <select
        id={id}
        className={`focus:border-brand-500 focus:ring-brand-100 w-full rounded-lg border bg-white px-3 py-3 text-base transition outline-none focus:ring-2 ${
          error ? "border-danger" : "border-border"
        }`}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      >
        {children}
      </select>
      {error ? (
        <p id={`${id}-error`} className="text-danger text-sm" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function TextAreaField({
  label,
  id,
  error,
  ...props
}: FieldProps & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-foreground block text-sm font-medium">
        {label}
      </label>
      <textarea
        id={id}
        className={`focus:border-brand-500 focus:ring-brand-100 min-h-32 w-full rounded-lg border bg-white px-3 py-3 text-base transition outline-none focus:ring-2 ${
          error ? "border-danger" : "border-border"
        }`}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />
      {error ? (
        <p id={`${id}-error`} className="text-danger text-sm" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
