"use client";

import { useState, useMemo } from "react";
import { casinos } from "@/data/casinos";
import CasinoCard from "@/components/casino/CasinoCard";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { Filter, X } from "lucide-react";
import SeoText from "@/components/ui/SeoText";

const allCountries = [...new Set(casinos.flatMap((c) => c.countries))];
const allLicences = [...new Set(casinos.flatMap((c) => c.licence))];
const allTags = [...new Set(casinos.flatMap((c) => c.tags))];

export default function CasinosPage() {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedLicence, setSelectedLicence] = useState<string>("");
  const [selectedTag, setSelectedTag] = useState<string>("");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return casinos.filter((c) => {
      if (selectedCountry && !c.countries.includes(selectedCountry)) return false;
      if (selectedLicence && !c.licence.includes(selectedLicence)) return false;
      if (selectedTag && !c.tags.includes(selectedTag)) return false;
      return true;
    });
  }, [selectedCountry, selectedLicence, selectedTag]);

  const hasFilters = selectedCountry || selectedLicence || selectedTag;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Casinos en ligne" }]} />

      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          <span className="gradient-text">Casinos en Ligne</span> — Annuaire Complet
        </h1>
        <p className="text-foreground-muted max-w-3xl">
          Découvrez notre sélection des meilleurs casinos en ligne pour les joueurs francophones.
          Chaque casino est vérifié, testé et évalué par notre équipe d&apos;experts.
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8">
        <button
          onClick={() => setShowFilters(!showFilters)}
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
                <label className="text-xs text-foreground-muted uppercase tracking-wider mb-2 block">Pays</label>
                <select
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
                <label className="text-xs text-foreground-muted uppercase tracking-wider mb-2 block">Licence</label>
                <select
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
                <label className="text-xs text-foreground-muted uppercase tracking-wider mb-2 block">Tag</label>
                <select
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
                onClick={() => { setSelectedCountry(""); setSelectedLicence(""); setSelectedTag(""); }}
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
            onClick={() => { setSelectedCountry(""); setSelectedLicence(""); setSelectedTag(""); }}
            className="mt-4 text-accent-primary hover:underline text-sm"
          >
            Réinitialiser les filtres
          </button>
        </div>
      )}

      <SeoText>
        <h2 className="text-xl font-bold text-foreground">Comment Choisir le Meilleur Casino en Ligne ?</h2>
        <p>
          Trouver un casino en ligne fiable et adapté à vos besoins peut sembler complexe face à la multitude d&apos;offres
          disponibles sur le marché francophone. Notre annuaire vous simplifie cette tâche en regroupant les casinos les plus
          sérieux, testés et approuvés par notre équipe d&apos;experts. Chaque casino listé sur casinoenligne.guru a été soumis
          à un processus d&apos;évaluation rigoureux couvrant la sécurité, la qualité des jeux, les bonus et les conditions de
          retrait.
        </p>
        <p>
          Le premier critère à vérifier est la licence. Un casino en ligne légal doit posséder une autorisation délivrée par un
          régulateur reconnu comme l&apos;ANJ en France, la Commission des Jeux de Hasard en Belgique ou la CFMJ en Suisse. Cette
          licence garantit que le casino respecte des normes strictes en matière de protection des joueurs, d&apos;équité des jeux
          et de gestion des fonds. Méfiez-vous des casinos qui opèrent sans licence ou avec des licences de juridictions peu
          réglementées.
        </p>
        <p>
          Les bonus de bienvenue sont un excellent moyen de démarrer avec un capital supplémentaire, mais il est essentiel de lire
          attentivement les conditions de mise (wagering). Un bonus de 100% jusqu&apos;à 500€ avec un wagering de x35 signifie que
          vous devrez miser 17 500€ avant de pouvoir retirer vos gains de bonus. Privilégiez les casinos offrant un wagering bas
          (x25 à x30) pour maximiser vos chances de conversion. Utilisez nos filtres pour affiner votre recherche par pays, type
          de licence ou caractéristiques spécifiques comme les paiements crypto ou les retraits rapides.
        </p>
        <p>
          Enfin, la qualité du support client est un indicateur fiable du sérieux d&apos;un casino. Un bon casino propose un chat
          en direct disponible 24/7, idéalement en français, ainsi que des délais de retrait raisonnables (24 à 48 heures pour les
          e-wallets, 1 à 5 jours pour les virements bancaires). Consultez nos fiches détaillées pour connaître tous les avantages
          et inconvénients de chaque casino.
        </p>
      </SeoText>
    </div>
  );
}
