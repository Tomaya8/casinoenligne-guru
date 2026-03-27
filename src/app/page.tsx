import HeroSection from "@/components/home/HeroSection";
import FeaturedCasinos from "@/components/home/FeaturedCasinos";
import GameCategories from "@/components/home/GameCategories";
import LatestArticles from "@/components/home/LatestArticles";
import QuickNavigation from "@/components/home/QuickNavigation";
import SeoText from "@/components/ui/SeoText";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Casino en Ligne Guide | casinoenligne.guru — Le Guide Ultime du Casino en Ligne",
  description:
    "Le guide ultime du casino en ligne pour les joueurs francophones. Comparatif casinos, bonus, jeux, stratégies et actualités iGaming. Expert, indépendant et fiable.",
  openGraph: {
    title: "casinoenligne.guru — Le Guide Ultime du Casino en Ligne",
    description:
      "Comparatif casinos en ligne, bonus, jeux, stratégies et actualités. Le guide expert pour les joueurs francophones.",
    type: "website",
    locale: "fr_FR",
    siteName: "casinoenligne.guru",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedCasinos />
      <GameCategories />
      <LatestArticles />
      <QuickNavigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <SeoText>
          <h2 className="text-xl font-bold text-foreground">Casino en Ligne : Votre Guide Expert Francophone</h2>
          <p>
            Bienvenue sur casinoenligne.guru, le guide de référence pour les joueurs francophones qui souhaitent découvrir
            l&apos;univers du casino en ligne en toute sécurité. Que vous soyez un joueur débutant à la recherche de vos premiers
            repères ou un joueur expérimenté cherchant les meilleures opportunités, notre plateforme vous accompagne à chaque étape
            de votre parcours dans l&apos;iGaming.
          </p>
          <p>
            Notre équipe d&apos;experts analyse en permanence le marché des casinos en ligne pour vous proposer des comparatifs
            objectifs, des avis détaillés et des recommandations personnalisées. Nous évaluons chaque casino selon des critères
            rigoureux : licence et sécurité, qualité des bonus, variété des jeux, rapidité des paiements et qualité du support
            client. Chaque fiche casino est mise à jour régulièrement pour refléter les dernières évolutions des offres et des
            conditions.
          </p>
          <p>
            Le monde du casino en ligne évolue rapidement, avec de nouvelles technologies comme les jeux en direct avec croupiers
            réels, les paiements en cryptomonnaie et les slots à mécaniques innovantes comme Megaways ou Buy Bonus. Notre section
            actualités vous tient informé des dernières tendances, des changements réglementaires dans les marchés francophones
            (France, Belgique, Suisse, Québec, Afrique francophone) et des lancements de nouveaux jeux.
          </p>
          <p>
            La sécurité et le jeu responsable sont au coeur de notre démarche. Nous ne recommandons que des casinos disposant de
            licences reconnues (ANJ, MGA, CFMJ, UKGC) et nous mettons un point d&apos;honneur à informer nos lecteurs sur les
            risques liés au jeu d&apos;argent. Consultez notre page dédiée au jeu responsable pour découvrir les outils de
            prévention et les ressources d&apos;aide disponibles. Le jeu doit rester un divertissement : jouez toujours avec
            modération et ne misez jamais plus que ce que vous pouvez vous permettre de perdre.
          </p>
        </SeoText>
      </div>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Quel est le meilleur casino en ligne en France ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Le meilleur casino en ligne dépend de vos critères. Consultez notre classement basé sur la sécurité, les bonus, la variété des jeux et la qualité du service client.",
                },
              },
              {
                "@type": "Question",
                name: "Les casinos en ligne sont-ils légaux en France ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En France, les jeux de casino en ligne sont régulés par l'ANJ (Autorité Nationale des Jeux). Seuls les casinos disposant d'une licence ANJ sont autorisés à opérer légalement.",
                },
              },
              {
                "@type": "Question",
                name: "Comment choisir un casino en ligne fiable ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Vérifiez la licence, les avis des joueurs, les méthodes de paiement, la qualité du support client et les conditions des bonus avant de vous inscrire.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
