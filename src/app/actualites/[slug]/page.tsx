import { notFound } from "next/navigation";
import { articles, getArticleBySlug } from "@/data/articles";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Badge from "@/components/ui/Badge";
import type { Metadata } from "next";
import { Clock, User, Calendar } from "lucide-react";

export async function generateStaticParams() {
  return articles.filter((a) => a.category === "actualites").map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return { title: article.title, description: article.excerpt };
}

export default async function ActualiteDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article || article.category !== "actualites") notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Actualités", href: "/actualites" }, { label: article.title }]} />

      <article>
        <header className="mb-8">
          <Badge variant="secondary" className="mb-4">Actualité</Badge>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{article.title}</h1>
          <p className="text-lg text-foreground-muted mb-6">{article.excerpt}</p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-foreground-muted border-t border-border pt-4">
            <span className="flex items-center gap-1.5"><User className="w-4 h-4" /> {article.author}</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {new Date(article.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {article.readTime} de lecture</span>
          </div>
        </header>

        <div className="bg-background-card rounded-xl border border-border p-8">
          <p className="text-foreground-muted leading-relaxed">{article.content}</p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <Badge key={tag} variant="outline">{tag}</Badge>
          ))}
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline: article.title,
            description: article.excerpt,
            author: { "@type": "Person", name: article.author },
            datePublished: article.date,
            publisher: { "@type": "Organization", name: "casinoenligne.guru" },
          }),
        }}
      />
    </div>
  );
}
