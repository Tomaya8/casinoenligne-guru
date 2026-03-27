import Link from "next/link";
import { Landmark, Gift, Wallet, Scale, BookOpen, AlertTriangle } from "lucide-react";

const sections = [
  {
    icon: <Landmark className="w-6 h-6" />,
    title: "Casinos",
    description: "Annuaire complet des casinos en ligne vérifiés",
    href: "/casinos",
    color: "from-purple-500 to-indigo-600",
  },
  {
    icon: <Gift className="w-6 h-6" />,
    title: "Bonus",
    description: "Comparatif des meilleurs bonus et promotions",
    href: "/bonus-casino",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: <Wallet className="w-6 h-6" />,
    title: "Paiements",
    description: "Méthodes de dépôt et retrait sécurisées",
    href: "/paiements",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: <Scale className="w-6 h-6" />,
    title: "Régulation",
    description: "Lois et licences par pays francophone",
    href: "/regulation",
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Guides",
    description: "Tutoriels et stratégies pour tous les niveaux",
    href: "/guides",
    color: "from-pink-500 to-rose-600",
  },
  {
    icon: <AlertTriangle className="w-6 h-6" />,
    title: "Jeu Responsable",
    description: "Prévention, outils et ressources d'aide",
    href: "/risques-jeu",
    color: "from-red-500 to-red-700",
  },
];

export default function QuickNavigation() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-border">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Explorez par Thème</h2>
        <p className="text-foreground-muted">Naviguez dans notre encyclopédie du casino en ligne</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="group flex items-start gap-4 p-5 rounded-xl bg-background-card border border-border hover:border-accent-primary/40 transition-all duration-300"
          >
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center text-white shrink-0`}>
              {section.icon}
            </div>
            <div>
              <h3 className="font-bold text-foreground group-hover:text-accent-primary transition-colors">{section.title}</h3>
              <p className="text-sm text-foreground-muted mt-1">{section.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
