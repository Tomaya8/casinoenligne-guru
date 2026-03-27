import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://casinoenligne.guru" },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.label,
        ...(item.href ? { item: `https://casinoenligne.guru${item.href}` } : {}),
      })),
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="flex items-center gap-1.5 text-sm text-foreground-muted py-4 overflow-x-auto" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-accent-primary transition-colors shrink-0">
          <Home className="w-4 h-4" />
        </Link>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <span key={index} className={`flex items-center gap-1.5 ${isLast ? "min-w-0" : "shrink-0"}`}>
              <ChevronRight className="w-3 h-3 shrink-0" />
              {item.href ? (
                <Link href={item.href} className="hover:text-accent-primary transition-colors shrink-0">
                  {item.label}
                </Link>
              ) : (
                <span className={`text-foreground ${isLast ? "truncate max-w-[200px] sm:max-w-none" : ""}`}>{item.label}</span>
              )}
            </span>
          );
        })}
      </nav>
    </>
  );
}
