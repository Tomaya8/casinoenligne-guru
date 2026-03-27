import { MetadataRoute } from "next";
import { casinos } from "@/data/casinos";
import { gameCategories } from "@/data/games";
import { articles } from "@/data/articles";
import { providers } from "@/data/providers";
import { getAllGuideArticles } from "@/data/guides";
import { allGameReviews } from "@/data/game-reviews";
import { allBonusArticles } from "@/data/bonus-articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://casinoenligne.guru";

  const staticPages = [
    { url: baseUrl, changeFrequency: "daily" as const, priority: 1.0 },
    { url: `${baseUrl}/casinos`, changeFrequency: "daily" as const, priority: 0.9 },
    { url: `${baseUrl}/jeux`, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/bonus-casino`, changeFrequency: "daily" as const, priority: 0.9 },
    { url: `${baseUrl}/paiements`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/logiciels-casino`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/regulation`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/regulation/france`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/regulation/belgique`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/regulation/suisse`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/regulation/quebec`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/guides`, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/actualites`, changeFrequency: "daily" as const, priority: 0.8 },
    { url: `${baseUrl}/analyses`, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/risques-jeu`, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/a-propos`, changeFrequency: "monthly" as const, priority: 0.4 },
    { url: `${baseUrl}/methodologie`, changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${baseUrl}/recherche`, changeFrequency: "weekly" as const, priority: 0.3 },
  ];

  const casinoPages = casinos.map((c) => ({
    url: `${baseUrl}/casinos/${c.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const gamePages = gameCategories.map((g) => ({
    url: `${baseUrl}/jeux/${g.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const articlePages = articles.map((a) => ({
    url: `${baseUrl}/${a.category}/${a.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
    lastModified: new Date(a.date),
  }));

  const providerPages = providers.map((p) => ({
    url: `${baseUrl}/logiciels-casino/${p.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const guidePages = getAllGuideArticles().map((g) => ({
    url: `${baseUrl}/guides/${g.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
    lastModified: new Date(g.date),
  }));

  const gameReviewPages = allGameReviews.map((g) => ({
    url: `${baseUrl}/logiciels-casino/${g.providerSlug}/${g.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const bonusPages = allBonusArticles.map((b) => ({
    url: `${baseUrl}/bonus-casino/${b.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...casinoPages, ...gamePages, ...articlePages, ...providerPages, ...guidePages, ...gameReviewPages, ...bonusPages];
}
