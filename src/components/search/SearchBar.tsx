"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { casinos } from "@/data/casinos";
import { gameCategories } from "@/data/games";
import { articles } from "@/data/articles";

interface SearchResult {
  type: "casino" | "jeu" | "article";
  title: string;
  href: string;
  description: string;
}

const allSearchItems: SearchResult[] = [
  ...casinos.map((c) => ({
    type: "casino" as const,
    title: c.name,
    href: `/casinos/${c.slug}`,
    description: c.shortDescription,
  })),
  ...gameCategories.map((g) => ({
    type: "jeu" as const,
    title: g.name,
    href: `/jeux/${g.slug}`,
    description: g.shortDescription,
  })),
  ...articles.map((a) => ({
    type: "article" as const,
    title: a.title,
    href: `/${a.category}/${a.slug}`,
    description: a.excerpt,
  })),
];

const popularSearches = ["bonus sans dépôt", "casinos France", "machines à sous", "crypto casino", "blackjack stratégie"];

export default function SearchBar({ onClose }: { onClose?: () => void }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }
    const q = query.toLowerCase();
    const filtered = allSearchItems.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q)
    );
    setResults(filtered.slice(0, 8));
  }, [query]);

  const typeLabels = { casino: "Casino", jeu: "Jeu", article: "Article" };
  const typeColors = {
    casino: "bg-accent-primary/20 text-accent-primary",
    jeu: "bg-accent-secondary/20 text-accent-secondary",
    article: "bg-accent-gold/20 text-accent-gold",
  };

  return (
    <div className="relative">
      <div className="flex items-center gap-3 bg-background-card rounded-xl border border-border px-4 py-3">
        <Search className="w-5 h-5 text-foreground-muted shrink-0" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher un casino, un jeu, un guide..."
          className="flex-1 bg-transparent text-foreground placeholder:text-foreground-muted outline-none text-sm"
        />
        {query && (
          <button onClick={() => setQuery("")} className="text-foreground-muted hover:text-foreground">
            <X className="w-4 h-4" />
          </button>
        )}
        {onClose && (
          <button onClick={onClose} className="text-xs text-foreground-muted hover:text-foreground ml-2">
            ESC
          </button>
        )}
      </div>

      {/* Results */}
      {(results.length > 0 || query.length < 2) && (
        <div className="absolute top-full left-0 right-0 mt-2 glass rounded-xl shadow-2xl overflow-hidden z-50">
          {query.length < 2 ? (
            <div className="p-4">
              <p className="text-xs text-foreground-muted mb-3 uppercase tracking-wider">Recherches populaires</p>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((s) => (
                  <button
                    key={s}
                    onClick={() => setQuery(s)}
                    className="text-xs px-3 py-1.5 rounded-full bg-background-card hover:bg-background-card-hover text-foreground-muted hover:text-foreground transition-colors border border-border"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="max-h-96 overflow-y-auto">
              {results.map((result, i) => (
                <Link
                  key={i}
                  href={result.href}
                  className="flex items-start gap-3 px-4 py-3 hover:bg-background-card-hover transition-colors border-b border-border last:border-0"
                  onClick={onClose}
                >
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium shrink-0 mt-0.5 ${typeColors[result.type]}`}>
                    {typeLabels[result.type]}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{result.title}</p>
                    <p className="text-xs text-foreground-muted truncate">{result.description}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-foreground-muted shrink-0 mt-1" />
                </Link>
              ))}
              {results.length === 0 && query.length >= 2 && (
                <div className="p-6 text-center text-sm text-foreground-muted">
                  Aucun résultat pour &quot;{query}&quot;
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
