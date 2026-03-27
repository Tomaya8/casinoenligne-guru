import { notFound } from "next/navigation";
import Link from "next/link";
import { articles, getArticleBySlug, getArticlesByCategory } from "@/data/articles";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ArticleDetail from "@/components/editorial/ArticleDetail";
import type { Metadata } from "next";
import { Clock, ArrowRight } from "lucide-react";

export async function generateStaticParams() {
  return articles.filter((a) => a.category === "actualites").map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      images: article.image?.startsWith("http") ? [{ url: article.image }] : undefined,
    },
  };
}

export default async function ActualiteDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article || article.category !== "actualites") notFound();

  const related = getArticlesByCategory("actualites").filter((a) => a.slug !== slug).slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Actualités", href: "/actualites" }, { label: article.title }]} />

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ArticleDetail article={article} categoryLabel="Actualité" categoryVariant="secondary" />
        </div>

        <div className="space-y-6">
          <div className="sticky top-24 space-y-6">
            {related.length > 0 && (
              <div className="bg-background-card rounded-xl border border-border p-6">
                <h3 className="font-semibold mb-4">Autres actualités</h3>
                <div className="space-y-4">
                  {related.map((r) => (
                    <Link key={r.slug} href={`/actualites/${r.slug}`} className="block group">
                      <p className="text-sm font-medium text-foreground group-hover:text-accent-primary transition-colors line-clamp-2">{r.title}</p>
                      <p className="text-xs text-foreground-muted mt-1 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {r.readTime}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            <Link
              href="/actualites"
              className="flex items-center gap-2 p-4 rounded-xl bg-gradient-to-r from-accent-secondary/10 to-accent-primary/10 border border-accent-secondary/20 hover:border-accent-secondary/40 transition-colors text-sm font-medium text-foreground"
            >
              Toutes les actualités <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline: article.title,
            description: article.excerpt,
            image: article.image?.startsWith("http") ? article.image : undefined,
            author: { "@type": "Person", name: article.author },
            datePublished: article.date,
            publisher: { "@type": "Organization", name: "casinoenligne.guru" },
            ...(article.faqs?.length ? {
              mainEntity: article.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
              })),
            } : {}),
          }),
        }}
      />
    </div>
  );
}
