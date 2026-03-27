import Link from "next/link";
import { Home, Search, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <p className="text-8xl font-bold gradient-text mb-4">404</p>
        <h1 className="text-2xl font-bold text-foreground mb-3">Page introuvable</h1>
        <p className="text-foreground-muted mb-8">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-accent-primary to-purple-500 text-white font-medium hover:opacity-90 transition-opacity"
          >
            <Home className="w-4 h-4" />
            Accueil
          </Link>
          <Link
            href="/recherche"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground-muted hover:text-foreground hover:border-border-light transition-colors"
          >
            <Search className="w-4 h-4" />
            Rechercher
          </Link>
        </div>
        <div className="mt-10 pt-8 border-t border-border">
          <p className="text-sm text-foreground-muted mb-4">Pages populaires</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Casinos", href: "/casinos" },
              { label: "Guides", href: "/guides" },
              { label: "Bonus", href: "/bonus-casino" },
              { label: "Jeux", href: "/jeux" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1 text-sm text-accent-primary hover:text-accent-secondary transition-colors"
              >
                {link.label} <ArrowRight className="w-3 h-3" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
