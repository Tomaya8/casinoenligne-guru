"use client";

import { useState, useMemo } from "react";
import { Casino } from "@/data/casinos";
import CasinoCard from "@/components/casino/CasinoCard";
import { Filter, X } from "lucide-react";

export default function CasinoFilters({ casinos }: { casinos: Casino[] }) {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedLicence, setSelectedLicence] = useState<string>("");
  const [selectedTag, setSelectedTag] = useState<string>("");
  const [showFilters, setShowFilters] = useState(false);

  const allCountries = useMemo(() => [...new Set(casinos.flatMap((c) => c.countries))], [casinos]);
  const allLicences = useMemo(() => [...new Set(casinos.flatMap((c) => c.licence))], [casinos]);
  const allTags = useMemo(() => [...new Set(casinos.flatMap((c) => c.tags))], [casinos]);

  const filtered = useMemo(() => {
    return casinos.filter((c) => {
      if (selectedCountry && !c.countries.includes(selectedCountry)) return false;
      if (selectedLicence && !c.licence.includes(selectedLicence)) return false;
      if (selectedTag && !c.tags.includes(selectedTag)) return false;
      return true;
    });
  }, [casinos, selectedCountry, selectedLicence, selectedTag]);

  const hasFilters = selectedCountry || selectedLicence || selectedTag;

  const resetFilters = () => {
    setSelectedCountry("");
    setSelectedLicence("");
    setSelectedTag("");
  };

  return (
    <>
      {/* Filters */}
      <div className="mb-8">
        <button
          onClick={() => setShowFilters(!showFilters)}
          aria-expanded={showFilters}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background-card border border-border text-sm text-foreground-muted hover:text-foreground transition-colors"
        >
          <Filter className="w-4 h-4" />
          Filtres
          {hasFilters && <span className="w-2 h-2 rounded-full bg-accent-primary" />}
        </button>

        {showFilters && (
          <div className="mt-4 p-6 glass rounded-xl">
            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <label htmlFor="filter-country" className="text-xs text-foreground-muted uppercase tracking-wider mb-2 block">Pays</label>
                <select
                  id="filter-country"
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="w-full bg-background-card border border-border rounded-lg px-3 py-2 text-sm text-foreground outline-none focus:border-accent-primary"
                >
                  <option value="">Tous les pays</option>
                  {allCountries.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="filter-licence" className="text-xs text-foreground-muted uppercase tracking-wider mb-2 block">Licence</label>
                <select
                  id="filter-licence"
                  value={selectedLicence}
                  onChange={(e) => setSelectedLicence(e.target.value)}
                  className="w-full bg-background-card border border-border rounded-lg px-3 py-2 text-sm text-foreground outline-none focus:border-accent-primary"
                >
                  <option value="">Toutes les licences</option>
                  {allLicences.map((l) => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="filter-tag" className="text-xs text-foreground-muted uppercase tracking-wider mb-2 block">Tag</label>
                <select
                  id="filter-tag"
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  className="w-full bg-background-card border border-border rounded-lg px-3 py-2 text-sm text-foreground outline-none focus:border-accent-primary"
                >
                  <option value="">Tous</option>
                  {allTags.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>
            {hasFilters && (
              <button
                onClick={resetFilters}
                className="mt-4 flex items-center gap-1 text-xs text-accent-red hover:text-red-400 transition-colors"
              >
                <X className="w-3 h-3" /> Réinitialiser les filtres
              </button>
            )}
          </div>
        )}
      </div>

      {/* Results */}
      <p className="text-sm text-foreground-muted mb-6">{filtered.length} casino{filtered.length > 1 ? "s" : ""} trouvé{filtered.length > 1 ? "s" : ""}</p>

      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map((casino, i) => (
          <CasinoCard key={casino.slug} casino={casino} rank={i + 1} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <p className="text-foreground-muted">Aucun casino ne correspond à vos critères.</p>
          <button
            onClick={resetFilters}
            className="mt-4 text-accent-primary hover:underline text-sm"
          >
            Réinitialiser les filtres
          </button>
        </div>
      )}
    </>
  );
}
