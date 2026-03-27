"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, TrendingUp, Shield, Zap } from "lucide-react";
import Link from "next/link";

const stats = [
  { icon: Shield, label: "Casinos vérifiés", value: "50+" },
  { icon: TrendingUp, label: "Guides experts", value: "100+" },
  { label: "Jeux analysés", value: "2000+" },
  { label: "Mis à jour", value: "Quotidien" },
] as const;

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  return (
    <section className="relative overflow-x-hidden overflow-y-visible">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent-primary/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-accent-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-sm text-accent-primary mb-8">
            <Zap className="w-4 h-4" />
            <span>Le guide #1 du casino en ligne francophone</span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Le guide ultime du{" "}
            <span className="gradient-text">casino en ligne</span>
          </h1>

          <p className="text-lg sm:text-xl text-foreground-muted mb-10 max-w-2xl mx-auto">
            Comparez les meilleurs casinos, découvrez les jeux, profitez des bonus et jouez en toute sécurité.
            Expert, indépendant et 100% francophone.
          </p>

          {/* Search bar */}
          <div className="max-w-xl mx-auto mb-12">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                router.push(searchQuery ? `/recherche?q=${encodeURIComponent(searchQuery)}` : "/casinos");
              }}
              className="flex items-center gap-3 bg-background-card rounded-xl border border-border px-4 py-3 focus-within:border-accent-primary/50 transition-colors"
            >
              <Search className="w-5 h-5 text-foreground-muted" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher un casino, un jeu, un bonus..."
                className="flex-1 bg-transparent text-foreground placeholder:text-foreground-muted outline-none"
              />
              <button
                type="submit"
                className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-accent-primary to-purple-500 text-white text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Rechercher
              </button>
            </form>

            {/* Quick links */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {["Casinos France", "Bonus sans dépôt", "Machines à sous", "Crypto casino"].map((term) => (
                <Link
                  key={term}
                  href={`/recherche?q=${encodeURIComponent(term)}`}
                  className="text-xs px-3 py-1 rounded-full bg-background-card border border-border text-foreground-muted hover:text-foreground hover:border-border-light transition-colors"
                >
                  {term}
                </Link>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="glass rounded-xl p-4 text-center"
              >
                <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                <p className="text-xs text-foreground-muted mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
