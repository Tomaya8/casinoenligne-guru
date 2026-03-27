import { clsx } from "clsx";

export default function Card({
  children,
  className,
  hover = true,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={clsx(
        "bg-background-card rounded-xl border border-border p-6",
        hover && "hover:border-accent-primary/30 hover:bg-background-card-hover transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
}
