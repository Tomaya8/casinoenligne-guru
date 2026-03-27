import Link from "next/link";
import { gameCategories } from "@/data/games";
import SectionHeading from "@/components/ui/SectionHeading";
import { Dice1, Club, CircleDot, Spade } from "lucide-react";

const icons: Record<string, React.ReactNode> = {
  "slot-machine": <Dice1 className="w-8 h-8" />,
  cards: <Club className="w-8 h-8" />,
  roulette: <CircleDot className="w-8 h-8" />,
  "poker-chip": <Spade className="w-8 h-8" />,
};

const gradients = [
  "from-purple-600 to-blue-600",
  "from-emerald-600 to-teal-600",
  "from-red-600 to-pink-600",
  "from-amber-600 to-orange-600",
];

export default function GameCategories() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SectionHeading
        title="Jeux de Casino"
        subtitle="Explorez nos guides complets pour chaque type de jeu"
        href="/jeux"
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {gameCategories.map((game, i) => (
          <Link
            key={game.slug}
            href={`/jeux/${game.slug}`}
            className="group relative overflow-hidden rounded-xl border border-border hover:border-accent-primary/40 transition-all duration-300"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${gradients[i]} opacity-10 group-hover:opacity-20 transition-opacity`} />
            <div className="relative p-6">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradients[i]} flex items-center justify-center text-white mb-4`}>
                {icons[game.icon]}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{game.name}</h3>
              <p className="text-sm text-foreground-muted line-clamp-2">{game.shortDescription}</p>
              <div className="mt-4 flex items-center gap-2">
                <span className="text-xs px-2 py-0.5 rounded-full bg-background-card border border-border text-foreground-muted">
                  RTP: {game.rtp.split("(")[0].trim()}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
