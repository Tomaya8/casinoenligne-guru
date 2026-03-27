import Breadcrumbs from "@/components/layout/Breadcrumbs";
import type { Metadata } from "next";
import { Users, Target, Shield, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "À Propos — Notre Mission et Notre Équipe",
  description: "Découvrez l'équipe derrière casinoenligne.guru, notre mission, nos valeurs et notre engagement envers la transparence et le jeu responsable.",
};

export default function AProposPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "À propos" }]} />

      <h1 className="text-3xl sm:text-4xl font-bold mb-4">
        À propos de <span className="gradient-text">casinoenligne.guru</span>
      </h1>
      <p className="text-foreground-muted mb-12">
        Votre guide expert et indépendant du casino en ligne francophone.
      </p>

      <div className="space-y-8">
        <section className="bg-background-card rounded-xl border border-border p-8">
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-6 h-6 text-accent-primary" />
            <h2 className="text-xl font-bold">Notre Mission</h2>
          </div>
          <p className="text-foreground-muted leading-relaxed">
            casinoenligne.guru a été créé avec une mission claire : fournir aux joueurs francophones
            les informations les plus complètes, objectives et à jour sur l&apos;industrie du casino en ligne.
            Nous croyons que des joueurs bien informés font de meilleurs choix.
          </p>
        </section>

        <section className="bg-background-card rounded-xl border border-border p-8">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-6 h-6 text-accent-secondary" />
            <h2 className="text-xl font-bold">Notre Équipe</h2>
          </div>
          <p className="text-foreground-muted leading-relaxed mb-6">
            Notre équipe est composée d&apos;experts en iGaming, de journalistes spécialisés et d&apos;analystes
            qui cumulent plus de 30 ans d&apos;expérience dans l&apos;industrie du jeu en ligne.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { name: "Marc Dubois", role: "Rédacteur en chef", expertise: "15 ans dans l'iGaming" },
              { name: "Sophie Laurent", role: "Analyste casino", expertise: "Spécialiste des bonus et promotions" },
              { name: "Pierre Martin", role: "Expert régulation", expertise: "Ancien consultant pour l'ANJ" },
              { name: "Dr. Claire Moreau", role: "Jeu responsable", expertise: "Psychologue spécialisée en addictologie" },
            ].map((member) => (
              <div key={member.name} className="p-4 rounded-lg bg-background-secondary border border-border">
                <p className="font-medium text-foreground">{member.name}</p>
                <p className="text-sm text-accent-primary">{member.role}</p>
                <p className="text-xs text-foreground-muted mt-1">{member.expertise}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-background-card rounded-xl border border-border p-8">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-accent-green" />
            <h2 className="text-xl font-bold">Nos Valeurs</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Indépendance", desc: "Nos avis ne sont influencés par aucun opérateur" },
              { title: "Transparence", desc: "Nous déclarons clairement nos méthodes et sources de revenus" },
              { title: "Exactitude", desc: "Chaque information est vérifiée et mise à jour régulièrement" },
              { title: "Responsabilité", desc: "Le jeu responsable est au coeur de notre démarche" },
            ].map((value) => (
              <div key={value.title} className="p-4 rounded-lg bg-background-secondary border border-border">
                <p className="font-medium text-foreground mb-1">{value.title}</p>
                <p className="text-sm text-foreground-muted">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-background-card rounded-xl border border-border p-8" id="mentions-legales">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-accent-gold" />
            <h2 className="text-xl font-bold">Mentions Légales</h2>
          </div>
          <p className="text-foreground-muted leading-relaxed text-sm">
            casinoenligne.guru est un site informatif indépendant. Nous ne sommes pas un casino en ligne
            et ne proposons pas de jeux d&apos;argent. Le contenu est fourni à titre éducatif et informatif uniquement.
            Les informations sur les bonus et promotions sont susceptibles de changer. Vérifiez toujours
            les conditions directement sur le site de l&apos;opérateur. Interdit aux mineurs de 18 ans.
            Jouer comporte des risques : endettement, dépendance. Appelez le 09 74 75 13 13.
          </p>
        </section>
      </div>
    </div>
  );
}
