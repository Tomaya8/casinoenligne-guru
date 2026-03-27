import Image from "next/image";
import { Article, subcategoryLabels } from "@/data/articles";
import Badge from "@/components/ui/Badge";
import { Clock, User, Calendar, ChevronDown } from "lucide-react";

export default function ArticleDetail({ article, categoryLabel, categoryVariant = "primary" }: {
  article: Article;
  categoryLabel: string;
  categoryVariant?: "primary" | "secondary" | "gold";
}) {
  return (
    <article>
      {/* Hero image */}
      {article.image?.startsWith("http") && (
        <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden mb-8">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>
      )}

      <header className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant={categoryVariant}>{categoryLabel}</Badge>
          {article.subcategory && (
            <Badge variant="outline">{subcategoryLabels[article.subcategory]}</Badge>
          )}
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">{article.title}</h1>
        <p className="text-lg text-foreground-muted mb-6">{article.excerpt}</p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-foreground-muted border-t border-border pt-4">
          <span className="flex items-center gap-1.5"><User className="w-4 h-4" /> {article.author}</span>
          <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {new Date(article.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</span>
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {article.readTime} de lecture</span>
        </div>
      </header>

      {/* Content */}
      <div className="bg-background-card rounded-xl border border-border p-6 sm:p-8 mb-8">
        <div className="space-y-4">
          {article.content.split("\n\n").map((paragraph, i) => (
            <p key={i} className="text-foreground-muted leading-relaxed">{paragraph}</p>
          ))}
        </div>
      </div>

      {/* Comparison table */}
      {article.comparison && (
        <div className="bg-background-card rounded-xl border border-border p-6 sm:p-8 mb-8">
          <h2 className="text-xl font-bold text-foreground mb-4">{article.comparison.title}</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-3 px-3 text-foreground font-semibold">Nom</th>
                  {article.comparison.headers.map((header) => (
                    <th key={header} className="text-left py-3 px-3 text-foreground font-semibold">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {article.comparison.items.map((item) => (
                  <tr key={item.name} className="border-b border-border hover:bg-background-card-hover transition-colors">
                    <td className="py-3 px-3 font-medium text-foreground">{item.name}</td>
                    {article.comparison!.headers.map((header) => (
                      <td key={header} className="py-3 px-3 text-foreground-muted">{item.values[header] || "—"}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* FAQs */}
      {article.faqs && article.faqs.length > 0 && (
        <div className="bg-background-card rounded-xl border border-border p-6 sm:p-8 mb-8">
          <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <ChevronDown className="w-5 h-5 text-accent-primary" /> Questions Fréquentes
          </h2>
          <div className="space-y-4">
            {article.faqs.map((faq, i) => (
              <details key={i} className="group border border-border rounded-lg">
                <summary className="flex items-center justify-between cursor-pointer p-4 text-foreground font-medium hover:bg-background-card-hover rounded-lg transition-colors">
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown className="w-4 h-4 text-foreground-muted shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-4 pb-4 text-sm text-foreground-muted leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <Badge key={tag} variant="outline">{tag}</Badge>
        ))}
      </div>
    </article>
  );
}
