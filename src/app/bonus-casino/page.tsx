import { casinos } from "@/data/casinos";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Badge from "@/components/ui/Badge";
import StarRating from "@/components/ui/StarRating";
import Link from "next/link";
import type { Metadata } from "next";
import { Gift, AlertTriangle, Info } from "lucide-react";
import SeoText from "@/components/ui/SeoText";

export const metadata: Metadata = {
  title: "Bonus Casino en Ligne — Comparatif et Guide Complet",
  description: "Comparez les meilleurs bonus de casino en ligne : bonus de bienvenue, sans dépôt, cashback. Guide complet des conditions et pièges à éviter.",
  openGraph: {
    title: "Bonus Casino en Ligne — Comparatif et Guide Complet",
    description: "Comparatif des meilleurs bonus casino : bienvenue, sans dépôt, cashback, tours gratuits. Comprenez le wagering.",
  },
};

const bonusTypes = [
  {
    title: "Bonus de Bienvenue",
    description: "Le bonus le plus courant : un pourcentage de votre premier dépôt est doublé (voire triplé). Généralement entre 100% et 300% jusqu'à un montant plafonné.",
    icon: "🎁",
    example: "Ex: 100% jusqu'à 500€ signifie que vous déposez 500€ et recevez 500€ de bonus.",
  },
  {
    title: "Bonus Sans Dépôt",
    description: "Le Graal des joueurs : recevez un bonus (souvent 5€ à 25€) ou des tours gratuits sans avoir à déposer. Idéal pour tester un casino sans risque.",
    icon: "💰",
    example: "Ex: 10€ gratuits à l'inscription, wagering x40 = vous devez miser 400€ avant retrait.",
  },
  {
    title: "Cashback",
    description: "Un pourcentage de vos pertes vous est remboursé, généralement entre 5% et 25%. Certains casinos l'offrent sans condition de mise.",
    icon: "🔄",
    example: "Ex: 10% cashback sur vos pertes de la semaine, jusqu'à 200€.",
  },
  {
    title: "Tours Gratuits",
    description: "Des spins offerts sur des machines à sous spécifiques. Souvent associés au bonus de bienvenue ou à des promotions régulières.",
    icon: "🎰",
    example: "Ex: 200 tours gratuits sur Starburst avec un wagering x30.",
  },
];

export default function BonusCasinoPage() {
  const sortedByBonus = [...casinos].sort((a, b) => {
    const getAmount = (s: string) => {
      const match = s.match(/(\d+)/);
      return match ? parseInt(match[1]) : 0;
    };
    return getAmount(b.bonusAmount) - getAmount(a.bonusAmount);
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Bonus Casino" }]} />

      <h1 className="text-3xl sm:text-4xl font-bold mb-4">
        <span className="gradient-text-gold">Bonus Casino</span> — Guide Complet
      </h1>
      <p className="text-foreground-muted max-w-3xl mb-12">
        Comparez les meilleurs bonus de casino en ligne, comprenez les conditions de mise et évitez les pièges.
      </p>

      {/* Bonus types */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Types de Bonus</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {bonusTypes.map((type) => (
            <div key={type.title} className="bg-background-card rounded-xl border border-border p-6">
              <div className="text-3xl mb-3">{type.icon}</div>
              <h3 className="text-lg font-bold text-foreground mb-2">{type.title}</h3>
              <p className="text-sm text-foreground-muted mb-3">{type.description}</p>
              <div className="p-3 rounded-lg bg-background-secondary border border-border">
                <p className="text-xs text-foreground-muted flex items-start gap-1.5">
                  <Info className="w-3.5 h-3.5 text-accent-primary shrink-0 mt-0.5" />
                  {type.example}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bonus comparison table */}
      <section className="mb-16" id="comparatif">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Gift className="w-6 h-6 text-accent-gold" /> Comparatif des Bonus
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-foreground-muted font-medium whitespace-nowrap">Casino</th>
                <th className="text-left py-3 px-4 text-foreground-muted font-medium whitespace-nowrap">Bonus</th>
                <th className="text-left py-3 px-4 text-foreground-muted font-medium whitespace-nowrap">Wagering</th>
                <th className="text-left py-3 px-4 text-foreground-muted font-medium whitespace-nowrap">Note</th>
                <th className="text-left py-3 px-4 text-foreground-muted font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {sortedByBonus.map((casino) => (
                <tr key={casino.slug} className="border-b border-border hover:bg-background-card-hover transition-colors">
                  <td className="py-4 px-4 font-medium text-foreground">{casino.name}</td>
                  <td className="py-4 px-4">
                    <span className="text-accent-gold font-medium">{casino.bonusAmount}</span>
                  </td>
                  <td className="py-4 px-4">
                    <Badge variant={parseInt(casino.bonusWagering.replace("x", "")) <= 30 ? "green" : "gold"}>
                      {casino.bonusWagering}
                    </Badge>
                  </td>
                  <td className="py-4 px-4">
                    <StarRating rating={casino.rating} size={12} />
                  </td>
                  <td className="py-4 px-4">
                    <Link href={`/casinos/${casino.slug}`} className="text-accent-primary hover:underline text-xs">
                      Détails
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Wagering explanation */}
      <section className="mb-16">
        <div className="glass rounded-xl p-8">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-accent-gold" /> Comprendre le Wagering
          </h2>
          <p className="text-foreground-muted mb-4">
            Le wagering (ou conditions de mise) est le nombre de fois que vous devez miser le montant du bonus
            avant de pouvoir retirer vos gains. Un wagering de x35 sur un bonus de 100€ signifie que vous devez
            miser 3500€ au total avant de pouvoir retirer.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-accent-green/10 border border-accent-green/20 text-center">
              <p className="text-2xl font-bold text-accent-green">x20-x30</p>
              <p className="text-xs text-foreground-muted mt-1">Excellent</p>
            </div>
            <div className="p-4 rounded-lg bg-accent-gold/10 border border-accent-gold/20 text-center">
              <p className="text-2xl font-bold text-accent-gold">x30-x40</p>
              <p className="text-xs text-foreground-muted mt-1">Correct</p>
            </div>
            <div className="p-4 rounded-lg bg-accent-red/10 border border-accent-red/20 text-center">
              <p className="text-2xl font-bold text-accent-red">x40+</p>
              <p className="text-xs text-foreground-muted mt-1">Élevé</p>
            </div>
          </div>
        </div>
      </section>

      <SeoText>
        <h2 className="text-xl font-bold text-foreground">Guide Complet des Bonus de Casino en Ligne</h2>
        <p>
          Les bonus de casino en ligne sont l&apos;un des principaux avantages du jeu en ligne par rapport aux casinos physiques.
          Ils permettent aux joueurs de commencer avec un capital supérieur à leur dépôt initial, offrant ainsi plus d&apos;opportunités
          de découvrir les jeux et potentiellement de remporter des gains. Cependant, tous les bonus ne se valent pas, et il est
          essentiel de comprendre les conditions associées avant de s&apos;engager.
        </p>
        <p>
          Le bonus de bienvenue est l&apos;offre la plus courante et généralement la plus généreuse. Il prend souvent la forme
          d&apos;un match de dépôt (100% à 300%) accompagné de tours gratuits sur des machines à sous populaires. Par exemple,
          un bonus de 100% jusqu&apos;à 500€ signifie que si vous déposez 500€, vous recevez 500€ supplémentaires en bonus,
          portant votre solde à 1000€. Certains casinos proposent des packs de bienvenue répartis sur les 2 à 4 premiers dépôts,
          offrant une valeur totale pouvant dépasser 2000€.
        </p>
        <p>
          Les bonus sans dépôt sont particulièrement prisés car ils permettent de jouer sans aucun risque financier. Généralement
          compris entre 5€ et 25€ ou sous forme de tours gratuits, ils sont crédités dès l&apos;inscription sans qu&apos;aucun
          dépôt ne soit requis. Attention toutefois : les conditions de mise (wagering) sont souvent plus élevées sur ces bonus
          (x40 à x60), et les gains retirables sont généralement plafonnés. Le cashback, quant à lui, rembourse un pourcentage
          de vos pertes sur une période donnée, offrant un filet de sécurité appréciable.
        </p>
        <p>
          Pour tirer le meilleur parti des bonus, comparez toujours le wagering, les délais d&apos;utilisation, les jeux
          éligibles et les limites de mise maximales en mode bonus. Un bonus avec un wagering de x25 est nettement plus avantageux
          qu&apos;un bonus apparemment plus généreux avec un wagering de x50. Notre comparatif ci-dessus vous permet de visualiser
          rapidement les meilleures offres du moment et de choisir le bonus le plus adapté à votre profil de joueur et à votre
          budget.
        </p>
      </SeoText>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Qu'est-ce qu'un bonus de bienvenue casino ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Un bonus de bienvenue est une offre proposée aux nouveaux joueurs lors de leur inscription. Il prend généralement la forme d'un pourcentage de votre premier dépôt (100% à 300%) accompagné de tours gratuits.",
                },
              },
              {
                "@type": "Question",
                name: "Que signifie le wagering (conditions de mise) ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Le wagering est le nombre de fois que vous devez miser le montant du bonus avant de pouvoir retirer vos gains. Un wagering de x35 sur un bonus de 100€ signifie que vous devez miser 3500€ au total.",
                },
              },
              {
                "@type": "Question",
                name: "Quel est un bon wagering pour un bonus casino ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Un wagering entre x20 et x30 est considéré comme excellent. Entre x30 et x40, c'est correct. Au-delà de x40, les conditions sont considérées comme élevées et défavorables au joueur.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
