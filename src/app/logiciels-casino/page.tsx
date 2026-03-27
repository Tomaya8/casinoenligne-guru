import Link from "next/link";
import { providers } from "@/data/providers";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import StarRating from "@/components/ui/StarRating";
import Badge from "@/components/ui/Badge";
import type { Metadata } from "next";
import SeoText from "@/components/ui/SeoText";

export const metadata: Metadata = {
  title: "Logiciels Casino — Fournisseurs de Jeux en Ligne",
  description: "Découvrez les meilleurs fournisseurs de jeux de casino en ligne : NetEnt, Evolution Gaming, Pragmatic Play. Historique, jeux phares et technologie.",
  openGraph: {
    title: "Logiciels Casino — Fournisseurs de Jeux en Ligne",
    description: "NetEnt, Evolution Gaming, Pragmatic Play : découvrez les meilleurs fournisseurs de jeux casino.",
  },
};

export default function LogicielsCasinoPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Logiciels Casino" }]} />

      <h1 className="text-3xl sm:text-4xl font-bold mb-4">
        <span className="gradient-text">Logiciels Casino</span> — Fournisseurs de Jeux
      </h1>
      <p className="text-foreground-muted max-w-3xl mb-12">
        Les fournisseurs de logiciels sont les créateurs des jeux que vous trouvez dans les casinos en ligne.
        Découvrez les leaders de l&apos;industrie et leurs jeux phares.
      </p>

      <div className="space-y-6">
        {providers.map((provider) => (
          <Link
            key={provider.slug}
            href={`/logiciels-casino/${provider.slug}`}
            className="group flex flex-col sm:flex-row gap-6 p-6 bg-background-card rounded-xl border border-border hover:border-accent-primary/40 transition-all"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 border border-border flex items-center justify-center shrink-0">
              <span className="text-2xl font-bold gradient-text">{provider.name.charAt(0)}</span>
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <h2 className="text-xl font-bold text-foreground group-hover:text-accent-primary transition-colors">{provider.name}</h2>
                  <StarRating rating={provider.rating} size={14} />
                </div>
                <div className="flex gap-2">
                  <Badge variant="primary">{provider.gameCount} jeux</Badge>
                  <Badge variant="outline">{provider.speciality}</Badge>
                </div>
              </div>
              <p className="text-foreground-muted text-sm mt-3 line-clamp-2">{provider.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {provider.popularGames.slice(0, 4).map((game) => (
                  <span key={game} className="text-xs px-2 py-1 rounded bg-background-secondary border border-border text-foreground-muted">
                    {game}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <SeoText>
        <h2 className="text-xl font-bold text-foreground">Les Fournisseurs de Jeux : Le Coeur de l&apos;iGaming</h2>
        <p>
          Derrière chaque jeu de casino en ligne se trouve un fournisseur de logiciels spécialisé. Ces entreprises conçoivent,
          développent et distribuent les jeux que vous retrouvez dans les casinos, des machines à sous aux tables de live casino.
          La qualité d&apos;un casino en ligne dépend en grande partie des fournisseurs avec lesquels il collabore. Un casino
          proposant des jeux de NetEnt, Evolution Gaming et Pragmatic Play offre généralement une expérience supérieure en termes
          de graphismes, de gameplay et d&apos;équité.
        </p>
        <p>
          NetEnt, fondé en 1996, est considéré comme le pionnier des machines à sous en ligne premium. Avec des titres légendaires
          comme Starburst, Gonzo&apos;s Quest et Dead or Alive, NetEnt a défini les standards de qualité de l&apos;industrie.
          Evolution Gaming domine le segment du live casino avec des innovations constantes comme Lightning Roulette et Crazy Time,
          diffusés depuis des studios ultramodernes avec des croupiers professionnels multilingues.
        </p>
        <p>
          Pragmatic Play s&apos;est imposé comme l&apos;un des fournisseurs les plus prolifiques avec des succès massifs comme
          Sweet Bonanza et Gates of Olympus, reconnus pour leur haute volatilité et leurs potentiels de gains élevés. Microgaming,
          le plus ancien fournisseur de l&apos;industrie (fondé en 1994), reste célèbre pour ses jackpots progressifs record,
          notamment Mega Moolah qui a versé certains des plus gros gains de l&apos;histoire du casino en ligne.
        </p>
        <p>
          Chaque fournisseur possède un style distinct : certains excellent dans les graphismes cinématographiques, d&apos;autres
          dans les mécaniques de jeu innovantes ou les jackpots progressifs. Le RTP et la certification des jeux par des
          laboratoires indépendants (eCOGRA, iTech Labs, GLI) garantissent l&apos;équité de chaque titre. Consultez nos fiches
          détaillées pour découvrir l&apos;histoire, les jeux phares et les spécialités de chaque fournisseur.
        </p>
      </SeoText>
    </div>
  );
}
