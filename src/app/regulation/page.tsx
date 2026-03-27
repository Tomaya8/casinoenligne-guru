import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import type { Metadata } from "next";
import { Scale, ArrowRight } from "lucide-react";
import SeoText from "@/components/ui/SeoText";

export const metadata: Metadata = {
  title: "Régulation Casino en Ligne — Lois et Licences par Pays",
  description: "Guide complet de la régulation des casinos en ligne dans les pays francophones : France (ANJ), Belgique, Suisse, Québec. Légalité et licences.",
  openGraph: {
    title: "Régulation Casino en Ligne — Lois et Licences par Pays",
    description: "Législation des casinos en ligne : France (ANJ), Belgique, Suisse, Québec. Licences et protection des joueurs.",
  },
};

const countries = [
  {
    slug: "france",
    name: "France",
    flag: "🇫🇷",
    regulator: "ANJ (Autorité Nationale des Jeux)",
    status: "Régulé",
    statusColor: "text-accent-green",
    summary: "Les casinos en ligne sont autorisés en France sous licence ANJ. Seuls les jeux de cercle (poker) et les paris sportifs sont pleinement régulés en ligne.",
  },
  {
    slug: "belgique",
    name: "Belgique",
    flag: "🇧🇪",
    regulator: "Commission des Jeux de Hasard",
    status: "Régulé",
    statusColor: "text-accent-green",
    summary: "La Belgique dispose d'un cadre réglementaire strict pour les jeux en ligne. Les opérateurs doivent obtenir une licence de classe A+ ou B+.",
  },
  {
    slug: "suisse",
    name: "Suisse",
    flag: "🇨🇭",
    regulator: "CFMJ (Commission Fédérale des Maisons de Jeu)",
    status: "Régulé",
    statusColor: "text-accent-green",
    summary: "Depuis 2019, la Suisse autorise les casinos en ligne opérés par des casinos terrestres détenteurs d'une concession fédérale.",
  },
  {
    slug: "quebec",
    name: "Québec",
    flag: "🇨🇦",
    regulator: "Loto-Québec / Espacejeux",
    status: "Monopole d'État",
    statusColor: "text-accent-gold",
    summary: "Au Québec, seul Espacejeux (opéré par Loto-Québec) est autorisé à offrir des jeux de casino en ligne. Les sites étrangers ne sont pas bloqués mais non régulés.",
  },
];

export default function RegulationPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Régulation" }]} />

      <h1 className="text-3xl sm:text-4xl font-bold mb-4">
        <span className="gradient-text">Régulation</span> des Casinos en Ligne
      </h1>
      <p className="text-foreground-muted max-w-3xl mb-12">
        Comprendre la légalité des casinos en ligne dans les pays francophones. Licences, régulateurs et protection des joueurs.
      </p>

      <div className="space-y-6">
        {countries.map((country) => (
          <Link
            key={country.slug}
            href={`/regulation/${country.slug}`}
            className="group flex items-start gap-6 p-6 bg-background-card rounded-xl border border-border hover:border-accent-primary/40 transition-all"
          >
            <span className="text-5xl shrink-0">{country.flag}</span>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-xl font-bold text-foreground group-hover:text-accent-primary transition-colors">{country.name}</h2>
                <span className={`text-sm font-medium ${country.statusColor}`}>{country.status}</span>
              </div>
              <p className="text-sm text-foreground-muted mb-2">
                <Scale className="w-3.5 h-3.5 inline mr-1" />{country.regulator}
              </p>
              <p className="text-foreground-muted text-sm">{country.summary}</p>
            </div>
            <ArrowRight className="w-5 h-5 text-foreground-muted group-hover:text-accent-primary transition-colors shrink-0 mt-2" />
          </Link>
        ))}
      </div>

      <SeoText>
        <h2 className="text-xl font-bold text-foreground">La Régulation des Casinos en Ligne dans l&apos;Espace Francophone</h2>
        <p>
          La régulation des casinos en ligne varie considérablement d&apos;un pays francophone à l&apos;autre. Comprendre le cadre
          légal de votre juridiction est essentiel pour jouer en toute sécurité et en toute légalité. Un casino régulé offre des
          garanties fondamentales : équité des jeux vérifiée par des organismes indépendants, protection des fonds des joueurs sur
          des comptes séparés, et recours en cas de litige auprès du régulateur compétent.
        </p>
        <p>
          En France, l&apos;Autorité Nationale des Jeux (ANJ) régule les jeux d&apos;argent en ligne depuis 2020, succédant à
          l&apos;ARJEL. Le marché français présente une particularité notable : seuls les paris sportifs, les paris hippiques et
          le poker en ligne sont autorisés. Les jeux de casino (machines à sous, roulette, blackjack) ne sont pas encore régulés
          en ligne, bien que des discussions soient en cours pour une éventuelle ouverture du marché. La Belgique, en revanche,
          autorise l&apos;ensemble des jeux de casino en ligne via sa Commission des Jeux de Hasard, avec un système de licences
          liées aux casinos terrestres.
        </p>
        <p>
          La Suisse a ouvert son marché des casinos en ligne en 2019 avec la Loi fédérale sur les jeux d&apos;argent (LJAr). Seuls
          les casinos terrestres titulaires d&apos;une concession fédérale peuvent proposer des jeux en ligne, et les sites étrangers
          sont activement bloqués par les fournisseurs d&apos;accès Internet. Au Québec, Loto-Québec détient le monopole via sa
          plateforme Espacejeux, bien que les sites internationaux restent accessibles sans blocage technique.
        </p>
        <p>
          L&apos;Afrique francophone représente un marché en pleine expansion avec des cadres réglementaires encore en développement.
          Certains pays comme le Sénégal et la Côte d&apos;Ivoire disposent de régulations locales, tandis que d&apos;autres
          n&apos;ont pas encore de législation spécifique pour le jeu en ligne. Quel que soit votre pays, nous vous recommandons
          de privilégier les casinos licenciés par des régulateurs reconnus internationalement (MGA, UKGC) pour garantir une
          expérience de jeu sûre et équitable.
        </p>
      </SeoText>
    </div>
  );
}
