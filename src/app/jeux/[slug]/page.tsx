import { notFound } from "next/navigation";
import Link from "next/link";
import { gameCategories, getGameBySlug } from "@/data/games";
import { allBlackjackVariants } from "@/data/blackjack-variants";
import { allStrategies } from "@/data/blackjack-strategies";
import { allRouletteVariants } from "@/data/roulette-variants";
import { allRouletteStrategies } from "@/data/roulette-strategies";
import { allPokerVariants } from "@/data/poker-variants";
import { allPokerStrategies } from "@/data/poker-strategies";
import { allGameReviews } from "@/data/game-reviews";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Badge from "@/components/ui/Badge";
import type { Metadata } from "next";
import { BookOpen, Target, Lightbulb, BarChart3, Gamepad2, ArrowRight } from "lucide-react";

export async function generateStaticParams() {
  return gameCategories.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) return {};
  return {
    title: `${game.name} en Ligne — Règles, Stratégies et Astuces`,
    description: game.description,
  };
}

export default async function GameDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) notFound();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Jeux", href: "/jeux" }, { label: game.name }]} />

      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          <span className="gradient-text">{game.name}</span> en Ligne
        </h1>
        <p className="text-foreground-muted max-w-3xl">{game.description}</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Rules */}
          <section id="regles" className="bg-background-card rounded-xl border border-border p-6 scroll-mt-24">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-accent-primary" /> Règles du Jeu
            </h2>
            <p className="text-foreground-muted leading-relaxed">{game.rules}</p>
          </section>

          {/* Variants */}
          <section id="variantes" className="bg-background-card rounded-xl border border-border p-6 scroll-mt-24">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Gamepad2 className="w-5 h-5 text-accent-secondary" /> Variantes
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {game.variants.map((v) => {
                // Check blackjack variants
                const bjVariant = game.slug === "blackjack"
                  ? allBlackjackVariants.find((bv) => bv.name === v)
                  : undefined;
                // Check roulette variants (fuzzy: strip parenthetical text)
                const vBase = v.split("(")[0].trim().toLowerCase();
                const rlVariant = game.slug === "roulette"
                  ? allRouletteVariants.find((rv) => rv.name.split("(")[0].trim().toLowerCase() === vBase || rv.name.toLowerCase() === v.toLowerCase())
                  : undefined;
                // Check poker variants
                const pkVariant = game.slug === "poker"
                  ? allPokerVariants.find((pv) => pv.name.toLowerCase() === v.toLowerCase() || pv.name.split("(")[0].trim().toLowerCase() === vBase)
                  : undefined;

                const matchedVariant = bjVariant || rlVariant || pkVariant;
                const matchedHref = bjVariant
                  ? `/jeux/blackjack/${bjVariant.slug}`
                  : rlVariant
                    ? `/jeux/roulette/${rlVariant.slug}`
                    : pkVariant
                      ? `/jeux/poker/${pkVariant.slug}`
                      : undefined;

                if (matchedVariant && matchedHref) {
                  return (
                    <Link
                      key={v}
                      href={matchedHref}
                      className="group flex items-center justify-between p-3 rounded-lg bg-background-secondary border border-border hover:border-accent-primary/40 transition-all"
                    >
                      <span className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-accent-primary" />
                        <span className="text-sm text-foreground group-hover:text-accent-primary transition-colors">{v}</span>
                      </span>
                      <span className="flex items-center gap-1 text-xs text-foreground-muted">
                        RTP {matchedVariant.rtp} <ArrowRight className="w-3 h-3" />
                      </span>
                    </Link>
                  );
                }

                return (
                  <div key={v} className="flex items-center gap-2 p-3 rounded-lg bg-background-secondary border border-border">
                    <div className="w-2 h-2 rounded-full bg-accent-primary" />
                    <span className="text-sm text-foreground">{v}</span>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Strategies */}
          <section id="strategies" className="bg-background-card rounded-xl border border-border p-6 scroll-mt-24">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-accent-gold" /> Stratégies
            </h2>
            <ul className="space-y-3">
              {game.strategies.map((s, i) => {
                const sLower = s.toLowerCase().split("(")[0].trim();

                // Match blackjack strategies
                const bjStrategy = game.slug === "blackjack"
                  ? allStrategies.find((st) => st.name.toLowerCase().split("(")[0].trim() === sLower || sLower.includes(st.name.toLowerCase().split("(")[0].trim()))
                  : undefined;

                // Match roulette strategies
                const rlStrategy = game.slug === "roulette"
                  ? allRouletteStrategies.find((st) => st.name.toLowerCase().split("(")[0].trim() === sLower || sLower.includes(st.name.toLowerCase().split("(")[0].trim()))
                  : undefined;

                // Match poker strategies
                const pkStrategy = game.slug === "poker"
                  ? allPokerStrategies.find((st) => st.name.toLowerCase().split("(")[0].trim() === sLower || sLower.includes(st.name.toLowerCase().split("(")[0].trim()))
                  : undefined;

                const matchedHref = bjStrategy
                  ? `/jeux/blackjack/strategie/${bjStrategy.slug}`
                  : rlStrategy
                    ? `/jeux/roulette/strategie/${rlStrategy.slug}`
                    : pkStrategy
                      ? `/jeux/poker/strategie/${pkStrategy.slug}`
                      : undefined;
                const matchedLabel = bjStrategy ? bjStrategy.difficulty : rlStrategy ? rlStrategy.difficulty : pkStrategy ? pkStrategy.difficulty : "";

                if ((bjStrategy || rlStrategy || pkStrategy) && matchedHref) {
                  return (
                    <li key={i}>
                      <Link
                        href={matchedHref}
                        className="flex items-center justify-between gap-3 group p-3 -mx-3 rounded-lg hover:bg-background-secondary transition-colors"
                      >
                        <span className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-accent-primary/20 text-accent-primary text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">{i + 1}</span>
                          <span className="text-foreground-muted group-hover:text-accent-primary transition-colors">{s}</span>
                        </span>
                        <span className="flex items-center gap-1 text-xs text-foreground-muted shrink-0">
                          {matchedLabel} <ArrowRight className="w-3 h-3" />
                        </span>
                      </Link>
                    </li>
                  );
                }

                return (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent-primary/20 text-accent-primary text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">{i + 1}</span>
                    <span className="text-foreground-muted">{s}</span>
                  </li>
                );
              })}
            </ul>
          </section>

          {/* Tips */}
          <section id="conseils" className="bg-background-card rounded-xl border border-border p-6 scroll-mt-24">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-accent-green" /> Conseils
            </h2>
            <ul className="space-y-2">
              {game.tips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2 text-foreground-muted">
                  <span className="text-accent-green mt-1">&#10003;</span>
                  {tip}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="sticky top-24 space-y-6">
            {/* RTP */}
            <div className="glass rounded-xl p-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-accent-primary" /> RTP / Probabilités
              </h3>
              <p className="text-2xl font-bold gradient-text">{game.rtp.split("(")[0].trim()}</p>
              {game.rtp.includes("(") && (
                <p className="text-xs text-foreground-muted mt-1">({game.rtp.split("(")[1]}</p>
              )}
            </div>

            {/* Popular games */}
            <div className="bg-background-card rounded-xl border border-border p-6">
              <h3 className="font-semibold mb-4">Jeux populaires</h3>
              <div className="flex flex-wrap gap-2">
                {game.popularGames.map((g) => {
                  // Check blackjack variants
                  const bjVariant = game.slug === "blackjack"
                    ? allBlackjackVariants.find((v) => v.name === g)
                    : undefined;
                  if (bjVariant) {
                    return (
                      <Link key={g} href={`/jeux/blackjack/${bjVariant.slug}`}>
                        <Badge variant="primary" className="cursor-pointer hover:opacity-80 transition-opacity">{g}</Badge>
                      </Link>
                    );
                  }

                  // Check roulette variants
                  const rlVariant = game.slug === "roulette"
                    ? allRouletteVariants.find((v) => v.name === g || v.name.split("(")[0].trim() === g.split("(")[0].trim())
                    : undefined;
                  if (rlVariant) {
                    return (
                      <Link key={g} href={`/jeux/roulette/${rlVariant.slug}`}>
                        <Badge variant="primary" className="cursor-pointer hover:opacity-80 transition-opacity">{g}</Badge>
                      </Link>
                    );
                  }

                  // Check poker variants
                  const pkVariant = game.slug === "poker"
                    ? allPokerVariants.find((v) => v.name === g || v.name.split("(")[0].trim() === g.split("(")[0].trim())
                    : undefined;
                  if (pkVariant) {
                    return (
                      <Link key={g} href={`/jeux/poker/${pkVariant.slug}`}>
                        <Badge variant="primary" className="cursor-pointer hover:opacity-80 transition-opacity">{g}</Badge>
                      </Link>
                    );
                  }

                  // Check game reviews (slots, live casino games etc.) — fuzzy match for apostrophes
                  const gNorm = g.toLowerCase().replace(/['']/g, "");
                  const gameReview = allGameReviews.find((r) => r.name === g || r.name.toLowerCase().replace(/['']/g, "") === gNorm);
                  if (gameReview) {
                    return (
                      <Link key={g} href={`/logiciels-casino/${gameReview.providerSlug}/${gameReview.slug}`}>
                        <Badge variant="primary" className="cursor-pointer hover:opacity-80 transition-opacity">{g}</Badge>
                      </Link>
                    );
                  }

                  return <Badge key={g} variant="primary">{g}</Badge>;
                })}
              </div>
            </div>

            {/* Quick links */}
            <div className="bg-background-card rounded-xl border border-border p-6">
              <h3 className="font-semibold mb-4">Sur cette page</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: "Règles du Jeu", id: "regles" },
                  { label: "Variantes", id: "variantes" },
                  { label: "Stratégies", id: "strategies" },
                  { label: "Conseils", id: "conseils" },
                ].map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="text-foreground-muted hover:text-accent-primary transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `${game.name} en Ligne — Règles, Stratégies et Astuces`,
            description: game.description,
            author: { "@type": "Organization", name: "casinoenligne.guru" },
            publisher: { "@type": "Organization", name: "casinoenligne.guru" },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://casinoenligne.guru/jeux/${game.slug}`,
            },
          }),
        }}
      />
    </div>
  );
}
