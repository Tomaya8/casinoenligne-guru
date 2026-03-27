import Link from "next/link";
import { getArticlesByCategory } from "@/data/articles";
import { getAllGuideArticles, getGuideArticlesByTopic } from "@/data/guides";
import { guideTopics } from "@/data/guides/types";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ArticleList from "@/components/editorial/ArticleList";
import GuideImage from "@/components/guides/GuideImage";
import Badge from "@/components/ui/Badge";
import SeoText from "@/components/ui/SeoText";
import type { Metadata } from "next";
import { Video, Smartphone, Bitcoin, Dice1, Shield, ArrowRight, Clock, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Guides Casino en Ligne — Stratégies, Tutoriels et Revues Experts",
  description:
    "Nos guides experts pour maîtriser les jeux de casino en ligne. Live casino, mobile, crypto, slots et sécurité. Stratégies, comparatifs et conseils.",
};

const topicIcons: Record<string, React.ReactNode> = {
  "live-casino": <Video className="w-6 h-6" />,
  "casino-mobile": <Smartphone className="w-6 h-6" />,
  "crypto-casino": <Bitcoin className="w-6 h-6" />,
  "slots-avance": <Dice1 className="w-6 h-6" />,
  "securite-casino": <Shield className="w-6 h-6" />,
};

export default function GuidesPage() {
  const legacyGuides = getArticlesByCategory("guides");
  const allGuideArticles = getAllGuideArticles();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Guides" }]} />

      <h1 className="text-3xl sm:text-4xl font-bold mb-4">
        <span className="gradient-text">Guides</span> Casino — Revues et Stratégies Experts
      </h1>
      <p className="text-foreground-muted max-w-3xl mb-12">
        Nos guides experts vous accompagnent dans votre découverte des jeux de casino en ligne.
        Revues détaillées, stratégies éprouvées, comparatifs et conseils pour tous les niveaux.
      </p>

      {/* Topic navigation */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
        {guideTopics.map((topic) => {
          const topicArticles = getGuideArticlesByTopic(topic.slug);
          return (
            <a
              key={topic.slug}
              href={`#${topic.slug}`}
              className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-background-card border border-border hover:border-accent-primary/40 transition-all text-center"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${topic.color} flex items-center justify-center text-white`}>
                {topicIcons[topic.slug]}
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm group-hover:text-accent-primary transition-colors">{topic.name}</p>
                <p className="text-xs text-foreground-muted mt-0.5">{topicArticles.length} articles</p>
              </div>
            </a>
          );
        })}
      </div>

      {/* Topic sections */}
      {guideTopics.map((topic) => {
        const topicArticles = getGuideArticlesByTopic(topic.slug);
        if (topicArticles.length === 0) return null;

        return (
          <section key={topic.slug} id={topic.slug} className="mb-16 scroll-mt-24">
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${topic.color} flex items-center justify-center text-white`}>
                {topicIcons[topic.slug]}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">{topic.name}</h2>
                <p className="text-sm text-foreground-muted">{topic.description}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topicArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/guides/${article.slug}`}
                  className="group bg-background-card rounded-xl border border-border hover:border-accent-primary/40 transition-all duration-300 overflow-hidden"
                >
                  <GuideImage
                    src={article.headerImage}
                    alt={article.headerImageAlt}
                    topic={article.topic}
                    className="h-40"
                  />
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="primary">{topic.name}</Badge>
                      <span className="flex items-center gap-1 text-xs text-foreground-muted">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="font-bold text-foreground group-hover:text-accent-primary transition-colors line-clamp-2 mb-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-foreground-muted line-clamp-2">{article.excerpt}</p>
                    <div className="flex items-center gap-1.5 mt-4 text-xs text-foreground-muted">
                      <User className="w-3 h-3" />
                      <span>{article.author}</span>
                      <span className="mx-1">·</span>
                      <span>
                        {new Date(article.date).toLocaleDateString("fr-FR", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );
      })}

      {/* Legacy guides */}
      {legacyGuides.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">Guides Généraux</h2>
          <ArticleList articles={legacyGuides} showCategory={false} />
        </section>
      )}

      <SeoText>
        <h2 className="text-xl font-bold text-foreground">Guides Casino : Apprenez, Maîtrisez, Gagnez</h2>
        <p>
          Nos guides casino sont conçus pour vous accompagner dans votre progression, du débutant complet au joueur confirmé.
          Rédigés par des experts de l&apos;industrie iGaming avec plus de 15 ans d&apos;expérience, chaque guide offre des
          informations pratiques, des stratégies éprouvées et des conseils concrets que vous pouvez appliquer immédiatement.
          Nous couvrons tous les aspects du jeu en ligne : casino en direct, jeu mobile, cryptomonnaies, machines à sous
          avancées et sécurité.
        </p>
        <p>
          Chaque revue est structurée pour offrir une expérience de lecture optimale : des sections claires avec des titres
          explicites, des tableaux comparatifs pour faciliter vos choix, des listes d&apos;avantages et inconvénients pour
          chaque option, et des FAQ répondant aux questions les plus fréquentes des joueurs francophones. Nos images
          illustratives vous aident à visualiser les interfaces et les concepts abordés.
        </p>
        <p>
          Le casino en direct révolutionne l&apos;expérience de jeu avec des croupiers réels filmés en haute définition.
          Le jeu mobile vous permet de profiter de vos jeux préférés partout, à tout moment. Les cryptomonnaies offrent
          des transactions rapides et anonymes. Les machines à sous modernes proposent des mécaniques innovantes comme
          Megaways et les jackpots progressifs. Et la sécurité reste la base de toute expérience de jeu réussie.
        </p>
        <p>
          Explorez nos {allGuideArticles.length + legacyGuides.length} guides détaillés pour devenir un joueur informé et
          responsable. Chaque article est mis à jour régulièrement pour refléter les dernières évolutions du marché et les
          nouvelles offres disponibles pour les joueurs francophones de France, Belgique, Suisse, Québec et Afrique francophone.
        </p>
      </SeoText>
    </div>
  );
}
