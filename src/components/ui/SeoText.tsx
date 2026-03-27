"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function SeoText({ children }: { children: React.ReactNode }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="mt-16 border-t border-border pt-10">
      <div
        className={`relative text-sm text-foreground-muted leading-relaxed space-y-4 ${
          expanded ? "" : "max-h-[120px] overflow-hidden"
        }`}
      >
        {children}
        {!expanded && (
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        )}
      </div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-3 flex items-center gap-1 text-sm font-medium text-accent-primary hover:text-accent-secondary transition-colors"
      >
        {expanded ? (
          <>Réduire <ChevronUp className="w-4 h-4" /></>
        ) : (
          <>Lire la suite <ChevronDown className="w-4 h-4" /></>
        )}
      </button>
    </section>
  );
}
