import { clsx } from "clsx";

type BadgeVariant = "primary" | "secondary" | "gold" | "green" | "red" | "outline";

const variants: Record<BadgeVariant, string> = {
  primary: "bg-accent-primary/20 text-accent-primary border-accent-primary/30",
  secondary: "bg-accent-secondary/20 text-accent-secondary border-accent-secondary/30",
  gold: "bg-accent-gold/20 text-accent-gold border-accent-gold/30",
  green: "bg-accent-green/20 text-accent-green border-accent-green/30",
  red: "bg-accent-red/20 text-accent-red border-accent-red/30",
  outline: "bg-transparent text-foreground-muted border-border-light",
};

export default function Badge({
  children,
  variant = "primary",
  className,
}: {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
