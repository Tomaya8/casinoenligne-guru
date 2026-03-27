import { getFeaturedCasinos } from "@/data/casinos";
import CasinoCard from "@/components/casino/CasinoCard";
import SectionHeading from "@/components/ui/SectionHeading";

export default function FeaturedCasinos() {
  const featured = getFeaturedCasinos();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SectionHeading
        title="Casinos Populaires"
        subtitle="Notre sélection des meilleurs casinos en ligne pour les joueurs francophones"
        href="/casinos"
        gradient
      />
      <div className="grid md:grid-cols-2 gap-6">
        {featured.map((casino, i) => (
          <CasinoCard key={casino.slug} casino={casino} rank={i + 1} />
        ))}
      </div>
    </section>
  );
}
