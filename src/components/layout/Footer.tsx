import Link from "next/link";
import { footerNavigation } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="bg-background-secondary border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Annuaire</h3>
            <ul className="space-y-2">
              {footerNavigation.annuaire.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-foreground-muted hover:text-accent-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Jeux</h3>
            <ul className="space-y-2">
              {footerNavigation.jeux.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-foreground-muted hover:text-accent-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Éditorial</h3>
            <ul className="space-y-2">
              {footerNavigation.editorial.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-foreground-muted hover:text-accent-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Informations</h3>
            <ul className="space-y-2">
              {footerNavigation.legal.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-foreground-muted hover:text-accent-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Responsible gaming */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="glass rounded-xl p-6">
            <h4 className="text-sm font-semibold text-accent-gold mb-2">Jeu Responsable</h4>
            <p className="text-xs text-foreground-muted leading-relaxed">
              Le jeu doit rester un divertissement. Jouez de manière responsable. Si vous pensez avoir un problème
              de jeu, contactez Joueurs Info Service au 09 74 75 13 13 (appel non surtaxé) ou visitez{" "}
              <Link href="/risques-jeu" className="text-accent-primary hover:underline">
                notre page de prévention
              </Link>
              . Interdit aux moins de 18 ans.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-foreground-muted">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center">
              <span className="text-white font-bold text-[10px]">CG</span>
            </div>
            <span>casinoenligne.guru &copy; {new Date().getFullYear()}</span>
          </div>
          <p className="text-center md:text-right max-w-xl">
            Ce site est un guide informatif indépendant. Nous ne sommes pas un casino en ligne et ne proposons pas
            de jeux d&apos;argent. Le contenu est fourni à titre éducatif uniquement.
          </p>
        </div>
      </div>
    </footer>
  );
}
