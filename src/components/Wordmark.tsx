import { cn } from "@/lib/utils";

/**
 * The "e-load me" wordmark with the charge-plug + signal mark, mirroring
 * the brand card. `tone="light"` renders the text in white for use on the
 * dark footer / panels.
 */
export function Wordmark({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-display font-bold tracking-tight",
        className
      )}
    >
      <span className={tone === "light" ? "text-white" : "text-brand-blue-ink"}>
        e&#8209;load
      </span>
      <span className="text-brand-blue">me</span>
      <ChargeMark className="size-[0.9em] -translate-y-[0.18em]" />
    </span>
  );
}

function ChargeMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {/* plug body with lightning bolt cut-out */}
      <path
        d="M8 13.5a6 6 0 0 1 6-6h.5a6 6 0 0 1 6 6V16a6 6 0 0 1-6 6H14a6 6 0 0 1-6-6v-2.5Z"
        fill="var(--color-brand-green)"
      />
      <path
        d="M15.4 9.5 11 16.2h3.1l-1 5.3 4.9-7.1h-3.3l.7-4.9Z"
        fill="var(--color-brand-blue-ink)"
      />
      {/* signal arcs */}
      <path
        d="M22.5 10.5a7 7 0 0 1 0 11"
        stroke="var(--color-brand-green)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M25.5 7.5a11 11 0 0 1 0 17"
        stroke="var(--color-brand-green)"
        strokeWidth="2.4"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}
