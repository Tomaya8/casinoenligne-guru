import Breadcrumbs from "@/components/layout/Breadcrumbs";
import type { Metadata } from "next";
import { CreditCard, Wallet, Bitcoin, Shield, Clock, AlertCircle } from "lucide-react";
import SeoText from "@/components/ui/SeoText";

export const metadata: Metadata = {
  title: "Méthodes de Paiement Casino — Dépôts et Retraits Sécurisés",
  description: "Guide complet des méthodes de paiement dans les casinos en ligne : cartes bancaires, e-wallets, crypto. Avantages, délais et sécurité.",
};

const paymentMethods = [
  {
    category: "Cartes Bancaires",
    icon: <CreditCard className="w-8 h-8" />,
    color: "from-blue-500 to-blue-700",
    methods: [
      { name: "Visa", depositTime: "Instantané", withdrawalTime: "1-5 jours", fees: "Gratuit", minDeposit: "10€" },
      { name: "Mastercard", depositTime: "Instantané", withdrawalTime: "1-5 jours", fees: "Gratuit", minDeposit: "10€" },
    ],
    pros: ["Accepté partout", "Dépôts instantanés", "Sécurité 3D Secure"],
    cons: ["Retraits lents (1-5 jours)", "Certaines banques bloquent les transactions casino"],
  },
  {
    category: "E-Wallets",
    icon: <Wallet className="w-8 h-8" />,
    color: "from-purple-500 to-purple-700",
    methods: [
      { name: "Skrill", depositTime: "Instantané", withdrawalTime: "24h", fees: "Gratuit", minDeposit: "10€" },
      { name: "Neteller", depositTime: "Instantané", withdrawalTime: "24h", fees: "Gratuit", minDeposit: "10€" },
      { name: "PayPal", depositTime: "Instantané", withdrawalTime: "24-48h", fees: "Gratuit", minDeposit: "10€" },
      { name: "ecoPayz", depositTime: "Instantané", withdrawalTime: "24h", fees: "Gratuit", minDeposit: "10€" },
    ],
    pros: ["Retraits rapides (24h)", "Couche de sécurité supplémentaire", "Pas de partage d'infos bancaires"],
    cons: ["Certains bonus exclus avec e-wallets", "Frais possibles sur le portefeuille"],
  },
  {
    category: "Cryptomonnaies",
    icon: <Bitcoin className="w-8 h-8" />,
    color: "from-amber-500 to-orange-600",
    methods: [
      { name: "Bitcoin", depositTime: "10-30 min", withdrawalTime: "Instant - 1h", fees: "Frais réseau", minDeposit: "0.0001 BTC" },
      { name: "Ethereum", depositTime: "5-15 min", withdrawalTime: "Instant - 1h", fees: "Frais réseau", minDeposit: "0.01 ETH" },
      { name: "USDT", depositTime: "5-15 min", withdrawalTime: "Instant - 1h", fees: "Frais réseau", minDeposit: "10 USDT" },
    ],
    pros: ["Retraits quasi-instantanés", "Anonymat renforcé", "Pas de limites bancaires", "Frais réduits"],
    cons: ["Volatilité des cours", "Non disponible partout", "Pas de recours en cas d'erreur"],
  },
];

export default function PaiementsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Paiements" }]} />

      <h1 className="text-3xl sm:text-4xl font-bold mb-4">
        <span className="gradient-text">Méthodes de Paiement</span> Casino
      </h1>
      <p className="text-foreground-muted max-w-3xl mb-12">
        Guide complet des méthodes de dépôt et retrait dans les casinos en ligne.
        Comparez les délais, frais et niveaux de sécurité de chaque option.
      </p>

      <div className="space-y-12">
        {paymentMethods.map((category) => (
          <section key={category.category}>
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white`}>
                {category.icon}
              </div>
              <h2 className="text-2xl font-bold">{category.category}</h2>
            </div>

            {/* Table */}
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-foreground-muted font-medium">Méthode</th>
                    <th className="text-left py-3 px-4 text-foreground-muted font-medium">Dépôt</th>
                    <th className="text-left py-3 px-4 text-foreground-muted font-medium">Retrait</th>
                    <th className="text-left py-3 px-4 text-foreground-muted font-medium">Frais</th>
                    <th className="text-left py-3 px-4 text-foreground-muted font-medium">Min. dépôt</th>
                  </tr>
                </thead>
                <tbody>
                  {category.methods.map((method) => (
                    <tr key={method.name} className="border-b border-border hover:bg-background-card-hover transition-colors">
                      <td className="py-3 px-4 font-medium text-foreground">{method.name}</td>
                      <td className="py-3 px-4 text-foreground-muted flex items-center gap-1">
                        <Clock className="w-3 h-3 text-accent-green" /> {method.depositTime}
                      </td>
                      <td className="py-3 px-4 text-foreground-muted">{method.withdrawalTime}</td>
                      <td className="py-3 px-4 text-foreground-muted">{method.fees}</td>
                      <td className="py-3 px-4 text-foreground-muted">{method.minDeposit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pros/Cons */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-accent-green/5 border border-accent-green/20">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-4 h-4 text-accent-green" />
                  <span className="text-sm font-medium text-accent-green">Avantages</span>
                </div>
                <ul className="space-y-1">
                  {category.pros.map((pro) => (
                    <li key={pro} className="text-sm text-foreground-muted">+ {pro}</li>
                  ))}
                </ul>
              </div>
              <div className="p-4 rounded-lg bg-accent-red/5 border border-accent-red/20">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="w-4 h-4 text-accent-red" />
                  <span className="text-sm font-medium text-accent-red">Inconvénients</span>
                </div>
                <ul className="space-y-1">
                  {category.cons.map((con) => (
                    <li key={con} className="text-sm text-foreground-muted">- {con}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>

      <SeoText>
        <h2 className="text-xl font-bold text-foreground">Paiements Casino en Ligne : Sécurité et Rapidité</h2>
        <p>
          Le choix de la méthode de paiement est un aspect fondamental de l&apos;expérience dans un casino en ligne. Il influence
          directement la rapidité de vos dépôts, le temps d&apos;attente pour vos retraits et le niveau de sécurité de vos
          transactions financières. Les casinos modernes proposent un large éventail de solutions de paiement adaptées aux
          préférences de chaque joueur, des cartes bancaires traditionnelles aux cryptomonnaies de dernière génération.
        </p>
        <p>
          Les cartes bancaires Visa et Mastercard restent les méthodes les plus utilisées grâce à leur simplicité et leur
          universalité. Les dépôts sont instantanés et protégés par la technologie 3D Secure. En revanche, les retraits par carte
          peuvent prendre de 1 à 5 jours ouvrables en raison des délais de traitement bancaire. Les portefeuilles électroniques
          (e-wallets) comme Skrill, Neteller et PayPal offrent un excellent compromis entre rapidité et sécurité, avec des retraits
          généralement traités en 24 heures.
        </p>
        <p>
          Les cryptomonnaies révolutionnent le paysage des paiements casino. Bitcoin, Ethereum et USDT permettent des transactions
          quasi-instantanées avec des frais réduits et un niveau d&apos;anonymat supérieur. Les casinos crypto ne nécessitent
          souvent aucune vérification d&apos;identité pour les petits montants, ce qui accélère considérablement le processus.
          Cependant, la volatilité des cours et l&apos;absence de recours en cas d&apos;erreur de transaction sont des facteurs
          à prendre en compte.
        </p>
        <p>
          Avant de choisir un casino, vérifiez toujours les méthodes de paiement disponibles dans votre pays, les limites minimales
          et maximales de dépôt et retrait, les éventuels frais de transaction et les délais de traitement réels (qui peuvent
          différer des délais annoncés). Un casino sérieux propose au minimum 5 à 10 méthodes de paiement différentes et traite
          les demandes de retrait dans un délai de 24 à 48 heures. Consultez nos fiches casino pour connaître les détails de
          chaque opérateur.
        </p>
      </SeoText>
    </div>
  );
}
