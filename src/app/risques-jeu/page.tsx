import Breadcrumbs from "@/components/layout/Breadcrumbs";
import type { Metadata } from "next";
import { AlertTriangle, Phone, Heart, Shield, HelpCircle } from "lucide-react";
import SeoText from "@/components/ui/SeoText";

export const metadata: Metadata = {
  title: "Jeu Responsable — Prévention de l'Addiction aux Jeux",
  description: "Guide du jeu responsable : signes d'addiction, outils de prévention, limites de jeu et ressources d'aide pour les joueurs en difficulté.",
  openGraph: {
    title: "Jeu Responsable — Prévention de l'Addiction aux Jeux",
    description: "Signes d'alerte, outils de prévention et ressources d'aide pour jouer de manière responsable.",
  },
};

const warningSignals = [
  "Vous jouez plus d'argent que vous ne pouvez vous permettre de perdre",
  "Vous empruntez de l'argent ou vendez des biens pour jouer",
  "Vous négligez vos responsabilités (travail, famille) pour jouer",
  "Vous mentez à vos proches sur le temps ou l'argent consacré au jeu",
  "Vous jouez pour récupérer des pertes précédentes",
  "Vous ressentez de l'irritabilité quand vous essayez de réduire le jeu",
  "Le jeu est votre principal moyen de gérer le stress ou l'ennui",
  "Vous avez essayé de vous arrêter sans succès",
];

const helpResources = [
  { name: "Joueurs Info Service", phone: "09 74 75 13 13", description: "Écoute, information et orientation. Appel non surtaxé.", country: "France" },
  { name: "SOS Joueurs", phone: "09 69 39 55 12", description: "Association d'aide aux joueurs en difficulté.", country: "France" },
  { name: "Aide Info Jeu", phone: "1 800 461-0140", description: "Ligne d'aide pour les joueurs du Québec.", country: "Québec" },
  { name: "Centre du jeu excessif", phone: "+41 21 321 29 11", description: "Centre de traitement spécialisé en Suisse.", country: "Suisse" },
];

export default function RisquesJeuPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Jeu Responsable" }]} />

      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-red/20 mb-4">
          <Heart className="w-8 h-8 text-accent-red" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Jeu Responsable</h1>
        <p className="text-foreground-muted max-w-2xl mx-auto">
          Le jeu doit rester un divertissement. Si vous ou un proche êtes en difficulté,
          des solutions et de l&apos;aide existent.
        </p>
      </div>

      {/* Warning signs */}
      <section className="bg-background-card rounded-xl border border-accent-gold/30 p-8 mb-8">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-accent-gold" /> Signes d&apos;Alerte
        </h2>
        <p className="text-foreground-muted mb-6">
          Reconnaître un problème de jeu est la première étape vers la guérison.
          Voici les signes qui doivent vous alerter :
        </p>
        <ul className="space-y-3">
          {warningSignals.map((signal, i) => (
            <li key={i} className="flex items-start gap-3 text-foreground-muted">
              <span className="w-6 h-6 rounded-full bg-accent-gold/20 text-accent-gold text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">
                {i + 1}
              </span>
              {signal}
            </li>
          ))}
        </ul>
      </section>

      {/* Prevention tools */}
      <section className="bg-background-card rounded-xl border border-border p-8 mb-8">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          <Shield className="w-5 h-5 text-accent-green" /> Outils de Prévention
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: "Limites de dépôt", desc: "Fixez un budget maximum quotidien, hebdomadaire ou mensuel" },
            { title: "Limites de temps", desc: "Définissez un temps de jeu maximum par session" },
            { title: "Auto-exclusion", desc: "Bloquez votre accès aux sites de jeu pour une période définie" },
            { title: "Historique de jeu", desc: "Consultez régulièrement vos statistiques de jeu et de dépenses" },
            { title: "Alertes de réalité", desc: "Recevez des rappels réguliers du temps passé à jouer" },
            { title: "Test d'auto-évaluation", desc: "Évaluez votre comportement de jeu avec des questionnaires validés" },
          ].map((tool) => (
            <div key={tool.title} className="p-4 rounded-lg bg-background-secondary border border-border">
              <h3 className="font-medium text-foreground mb-1">{tool.title}</h3>
              <p className="text-sm text-foreground-muted">{tool.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Help resources */}
      <section className="bg-background-card rounded-xl border border-accent-primary/30 p-8 mb-8">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          <Phone className="w-5 h-5 text-accent-primary" /> Obtenir de l&apos;Aide
        </h2>
        <div className="space-y-4">
          {helpResources.map((resource) => (
            <div key={resource.name} className="flex items-start gap-4 p-4 rounded-lg bg-background-secondary border border-border">
              <div className="w-10 h-10 rounded-full bg-accent-primary/20 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-accent-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium text-foreground">{resource.name}</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-background-card border border-border text-foreground-muted">{resource.country}</span>
                </div>
                <p className="text-accent-primary font-bold mt-1">{resource.phone}</p>
                <p className="text-sm text-foreground-muted mt-1">{resource.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="glass rounded-xl p-8 text-center">
        <HelpCircle className="w-8 h-8 text-foreground-muted mx-auto mb-4" />
        <p className="text-foreground-muted leading-relaxed">
          Si vous pensez avoir un problème de jeu, n&apos;hésitez pas à en parler.
          L&apos;aide est gratuite, confidentielle et disponible 24h/24.
          <br /><br />
          <span className="text-accent-primary font-bold text-lg">09 74 75 13 13</span>
          <br />
          <span className="text-sm">Joueurs Info Service — Appel non surtaxé</span>
        </p>
      </section>

      <SeoText>
        <h2 className="text-xl font-bold text-foreground">Jeu Responsable : Protégez-vous et Jouez en Toute Sécurité</h2>
        <p>
          Le jeu d&apos;argent en ligne doit avant tout rester un divertissement. Lorsqu&apos;il cesse d&apos;être amusant et
          commence à causer du stress, des problèmes financiers ou des tensions relationnelles, il est temps de prendre du recul.
          L&apos;addiction aux jeux de hasard est un trouble reconnu par l&apos;Organisation Mondiale de la Santé, qui touche
          environ 1 à 3% des joueurs réguliers. Sur casinoenligne.guru, la promotion du jeu responsable est au coeur de notre
          mission éditoriale.
        </p>
        <p>
          Les signes d&apos;un problème de jeu ne sont pas toujours évidents, ni pour le joueur concerné ni pour son entourage.
          Ils peuvent inclure une augmentation progressive des mises pour retrouver la même excitation, le besoin de jouer pour
          oublier ses problèmes, des mensonges sur le temps et l&apos;argent consacrés au jeu, ou la poursuite des pertes dans
          l&apos;espoir de les récupérer. Si vous vous reconnaissez dans un ou plusieurs de ces comportements, nous vous
          encourageons vivement à consulter les ressources d&apos;aide listées sur cette page.
        </p>
        <p>
          Les casinos en ligne régulés sont tenus de proposer des outils de jeu responsable : limites de dépôt quotidiennes,
          hebdomadaires et mensuelles ; limites de temps de jeu par session ; auto-exclusion temporaire ou permanente ; et
          accès à l&apos;historique détaillé de vos transactions. Nous vous recommandons d&apos;activer ces outils dès votre
          inscription, avant même de commencer à jouer. Fixer des limites à l&apos;avance, lorsque vous êtes dans un état
          d&apos;esprit rationnel, est bien plus efficace que d&apos;essayer de se contrôler en pleine session de jeu.
        </p>
        <p>
          En France, Joueurs Info Service (09 74 75 13 13) offre une écoute gratuite et confidentielle 7j/7. Au Québec, Aide
          Info Jeu (1 800 461-0140) propose un service similaire. En Suisse, le Centre du jeu excessif accompagne les joueurs
          en difficulté. N&apos;hésitez jamais à demander de l&apos;aide : les professionnels sont formés pour vous accompagner
          sans jugement. Le premier pas est souvent le plus difficile, mais c&apos;est aussi le plus important.
        </p>
      </SeoText>
    </div>
  );
}
