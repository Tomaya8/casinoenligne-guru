import Link from "next/link";
import Image from "next/image";
import { Article, subcategoryLabels } from "@/data/articles";
import Badge from "@/components/ui/Badge";
import { Clock, User } from "lucide-react";

const categoryColors: Record<string, "primary" | "secondary" | "gold"> = {
  guides: "primary",
  actualites: "secondary",
  analyses: "gold",
};

const categoryLabels: Record<string, string> = {
  guides: "Guide",
  actualites: "Actualité",
  analyses: "Analyse",
};

export default function ArticleList({ articles, showCategory = true }: { articles: Article[]; showCategory?: boolean }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <Link
          key={article.slug}
          href={`/${article.category}/${article.slug}`}
          className="group bg-background-card rounded-xl border border-border hover:border-accent-primary/40 transition-all duration-300 overflow-hidden"
        >
          <div className="h-40 relative bg-gradient-to-br from-background-secondary to-background-card-hover">
            {article.image?.startsWith("http") ? (
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-4xl opacity-20">
                  {article.category === "guides" ? "📖" : article.category === "actualites" ? "📰" : "📊"}
                </span>
              </div>
            )}
          </div>
          <div className="p-5">
            <div className="flex items-center gap-2 mb-3">
              {showCategory && (
                <Badge variant={categoryColors[article.category]}>
                  {article.subcategory ? subcategoryLabels[article.subcategory] : categoryLabels[article.category]}
                </Badge>
              )}
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
              <span>{new Date(article.date).toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" })}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
