"use client";

import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SearchBar from "@/components/search/SearchBar";
import Badge from "@/components/ui/Badge";
import { casinos } from "@/data/casinos";
import { gameCategories } from "@/data/games";
import { articles } from "@/data/articles";
import { providers } from "@/data/providers";
import { ArrowRight } from "lucide-react";
import { Suspense } from "react";

interface SearchResult {
  type: string;
  title: string;
  href: string;
  description: string;
}

function SearchContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    setQuery(searchParams.get("q") || "");
  }, [searchParams]);

  const results = useMemo(() => {
    if (!query || query.length < 2) return [];
    const q = query.toLowerCase();
    const all: SearchResult[] = [
      ...casinos.filter((c) => c.name.toLowerCase().includes(q) || c.description.toLowerCase().includes(q) || c.tags.some((t) => t.includes(q)))
        .map((c) => ({ type: "Casino", title: c.name, href: `/casinos/${c.slug}`, description: c.shortDescription })),
      ...gameCategories.filter((g) => g.name.toLowerCase().includes(q) || g.description.toLowerCase().includes(q))
        .map((g) => ({ type: "Jeu", title: g.name, href: `/jeux/${g.slug}`, description: g.shortDescription })),
      ...articles.filter((a) => a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q) || a.tags.some((t) => t.includes(q)))
        .map((a) => ({ type: a.category === "guides" ? "Guide" : a.category === "actualites" ? "Actualité" : "Analyse", title: a.title, href: `/${a.category}/${a.slug}`, description: a.excerpt })),
      ...providers.filter((p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q))
        .map((p) => ({ type: "Logiciel", title: p.name, href: `/logiciels-casino/${p.slug}`, description: p.description })),
    ];
    return all;
  }, [query]);

  const typeColors: Record<string, "primary" | "secondary" | "gold" | "green"> = {
    Casino: "primary", Jeu: "secondary", Guide: "gold", Actualité: "green", Analyse: "gold", Logiciel: "primary",
  };

  return (
    <>
      <div className="mb-8">
        <SearchBar />
      </div>

      {query && (
        <p className="text-foreground-muted mb-6">
          {results.length} résultat{results.length !== 1 ? "s" : ""} pour &quot;{query}&quot;
        </p>
      )}

      <div className="space-y-4">
        {results.map((result, i) => (
          <Link
            key={i}
            href={result.href}
            className="flex items-start gap-4 p-4 bg-background-card rounded-xl border border-border hover:border-accent-primary/40 transition-all"
          >
            <Badge variant={typeColors[result.type] || "primary"}>{result.type}</Badge>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-foreground hover:text-accent-primary transition-colors">{result.title}</h3>
              <p className="text-sm text-foreground-muted mt-1 line-clamp-2">{result.description}</p>
            </div>
            <ArrowRight className="w-4 h-4 text-foreground-muted shrink-0 mt-1" />
          </Link>
        ))}
      </div>

      {query && query.length >= 2 && results.length === 0 && (
        <div className="text-center py-16">
          <p className="text-foreground-muted text-lg mb-2">Aucun résultat trouvé</p>
          <p className="text-foreground-muted text-sm">Essayez avec d&apos;autres termes de recherche</p>
        </div>
      )}
    </>
  );
}

export default function RecherchePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Recherche" }]} />
      <h1 className="text-3xl font-bold mb-6">Recherche</h1>
      <Suspense fallback={<div className="text-foreground-muted">Chargement...</div>}>
        <SearchContent />
      </Suspense>
    </div>
  );
}
