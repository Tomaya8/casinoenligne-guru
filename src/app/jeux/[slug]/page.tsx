import { notFound } from "next/navigation";
import { gameCategories, getGameBySlug } from "@/data/games";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Badge from "@/components/ui/Badge";
import type { Metadata } from "next";
import { BookOpen, Target, Lightbulb, BarChart3, Gamepad2 } from "lucide-react";

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
          <section className="bg-background-card rounded-xl border border-border p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-accent-primary" /> Règles du Jeu
            </h2>
            <p className="text-foreground-muted leading-relaxed">{game.rules}</p>
          </section>

          {/* Variants */}
          <section className="bg-background-card rounded-xl border border-border p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Gamepad2 className="w-5 h-5 text-accent-secondary" /> Variantes
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {game.variants.map((v) => (
                <div key={v} className="flex items-center gap-2 p-3 rounded-lg bg-background-secondary border border-border">
                  <div className="w-2 h-2 rounded-full bg-accent-primary" />
                  <span className="text-sm text-foreground">{v}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Strategies */}
          <section className="bg-background-card rounded-xl border border-border p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-accent-gold" /> Stratégies
            </h2>
            <ul className="space-y-3">
              {game.strategies.map((s, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent-primary/20 text-accent-primary text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    {i + 1}
                  </span>
                  <span className="text-foreground-muted">{s}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Tips */}
          <section className="bg-background-card rounded-xl border border-border p-6">
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
                {game.popularGames.map((g) => (
                  <Badge key={g} variant="primary">{g}</Badge>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div className="bg-background-card rounded-xl border border-border p-6">
              <h3 className="font-semibold mb-4">Sur cette page</h3>
              <ul className="space-y-2 text-sm">
                {["Règles du Jeu", "Variantes", "Stratégies", "Conseils"].map((item) => (
                  <li key={item}>
                    <span className="text-foreground-muted hover:text-accent-primary cursor-pointer transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
