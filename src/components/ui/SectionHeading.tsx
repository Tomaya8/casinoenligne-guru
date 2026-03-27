import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SectionHeading({
  title,
  subtitle,
  href,
  gradient = false,
}: {
  title: string;
  subtitle?: string;
  href?: string;
  gradient?: boolean;
}) {
  return (
    <div className="flex items-end justify-between mb-8">
      <div>
        <h2 className={`text-2xl sm:text-3xl font-bold ${gradient ? "gradient-text" : "text-foreground"}`}>
          {title}
        </h2>
        {subtitle && <p className="text-foreground-muted mt-2 max-w-2xl">{subtitle}</p>}
      </div>
      {href && (
        <Link
          href={href}
          className="hidden sm:flex items-center gap-1 text-sm text-accent-primary hover:text-accent-secondary transition-colors shrink-0"
        >
          Voir tout <ArrowRight className="w-4 h-4" />
        </Link>
      )}
    </div>
  );
}
