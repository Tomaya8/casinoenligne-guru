import { notFound } from "next/navigation";
import { providers, getProviderBySlug } from "@/data/providers";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import StarRating from "@/components/ui/StarRating";
import Badge from "@/components/ui/Badge";
import type { Metadata } from "next";
import { Building, MapPin, Calendar, Gamepad2 } from "lucide-react";

export async function generateStaticParams() {
  return providers.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const provider = getProviderBySlug(slug);
  if (!provider) return {};
  return {
    title: `${provider.name} — Avis, Jeux et Technologie`,
    description: provider.description,
  };
}

export default async function ProviderDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const provider = getProviderBySlug(slug);
  if (!provider) notFound();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Logiciels Casino", href: "/logiciels-casino" }, { label: provider.name }]} />

      <div className="glass rounded-2xl p-8 mb-8">
        <div className="flex flex-col sm:flex-row items-start gap-6">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center text-white text-3xl font-bold">
            {provider.name.charAt(0)}
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">{provider.name}</h1>
            <StarRating rating={provider.rating} size={18} />
            <p className="text-foreground-muted mt-4">{provider.description}</p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
              <div className="flex items-center gap-2 text-sm text-foreground-muted">
                <Calendar className="w-4 h-4 text-accent-primary" /> Fondé en {provider.founded}
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground-muted">
                <MapPin className="w-4 h-4 text-accent-secondary" /> {provider.headquarters}
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground-muted">
                <Gamepad2 className="w-4 h-4 text-accent-gold" /> {provider.gameCount} jeux
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground-muted">
                <Building className="w-4 h-4 text-accent-green" /> {provider.speciality}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <section className="bg-background-card rounded-xl border border-border p-6">
          <h2 className="text-xl font-bold mb-4">Jeux Phares</h2>
          <div className="space-y-3">
            {provider.popularGames.map((game, i) => (
              <div key={game} className="flex items-center gap-3 p-3 rounded-lg bg-background-secondary border border-border">
                <span className="w-8 h-8 rounded-full bg-accent-primary/20 text-accent-primary text-sm flex items-center justify-center font-bold">
                  {i + 1}
                </span>
                <span className="text-foreground">{game}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-background-card rounded-xl border border-border p-6">
          <h2 className="text-xl font-bold mb-4">Informations</h2>
          <dl className="space-y-4">
            <div>
              <dt className="text-sm text-foreground-muted">Spécialité</dt>
              <dd className="text-foreground font-medium mt-1"><Badge variant="primary">{provider.speciality}</Badge></dd>
            </div>
            <div>
              <dt className="text-sm text-foreground-muted">Nombre de jeux</dt>
              <dd className="text-foreground font-medium mt-1">{provider.gameCount}</dd>
            </div>
            <div>
              <dt className="text-sm text-foreground-muted">Siège social</dt>
              <dd className="text-foreground font-medium mt-1">{provider.headquarters}</dd>
            </div>
            <div>
              <dt className="text-sm text-foreground-muted">Année de fondation</dt>
              <dd className="text-foreground font-medium mt-1">{provider.founded}</dd>
            </div>
            <div>
              <dt className="text-sm text-foreground-muted">Note</dt>
              <dd className="mt-1"><StarRating rating={provider.rating} size={16} /></dd>
            </div>
          </dl>
        </section>
      </div>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: provider.name,
            description: provider.description,
            foundingDate: String(provider.founded),
            location: {
              "@type": "Place",
              address: provider.headquarters,
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: provider.rating,
              bestRating: 5,
              ratingCount: 1,
            },
          }),
        }}
      />
    </div>
  );
}
