import Link from "next/link";
import { Casino } from "@/data/casinos";
import StarRating from "@/components/ui/StarRating";
import Badge from "@/components/ui/Badge";
import { ExternalLink, Shield, Clock, CreditCard } from "lucide-react";

export default function CasinoCard({ casino, rank }: { casino: Casino; rank?: number }) {
  return (
    <div className="group bg-background-card rounded-xl border border-border hover:border-accent-primary/40 transition-all duration-300 overflow-hidden">
      <div className="p-6">
        <div className="flex items-start gap-4">
          {/* Rank & Logo */}
          <div className="relative shrink-0">
            {rank && (
              <div className="absolute -top-2 -left-2 w-7 h-7 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center text-white text-xs font-bold z-10">
                {rank}
              </div>
            )}
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-background-secondary to-background-card-hover border border-border flex items-center justify-center">
              <span className="text-xl font-bold gradient-text">{casino.name.charAt(0)}</span>
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div>
                <Link href={`/casinos/${casino.slug}`} className="text-lg font-bold text-foreground hover:text-accent-primary transition-colors">
                  {casino.name}
                </Link>
                <div className="mt-1">
                  <StarRating rating={casino.rating} size={14} />
                </div>
              </div>
              {casino.isFeatured && <Badge variant="gold">Top choix</Badge>}
            </div>
            <p className="text-sm text-foreground-muted mt-2 line-clamp-2">{casino.shortDescription}</p>
          </div>
        </div>

        {/* Quick info */}
        <div className="grid grid-cols-3 gap-3 mt-4 pt-4 border-t border-border">
          <div className="flex items-center gap-1.5 text-xs text-foreground-muted">
            <Shield className="w-3.5 h-3.5 text-accent-green" />
            <span>{casino.licence[0]}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-foreground-muted">
            <Clock className="w-3.5 h-3.5 text-accent-secondary" />
            <span>{casino.withdrawalTime}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-foreground-muted">
            <CreditCard className="w-3.5 h-3.5 text-accent-primary" />
            <span>Min {casino.minDeposit}</span>
          </div>
        </div>

        {/* Bonus */}
        <div className="mt-4 p-3 rounded-lg bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/20">
          <p className="text-xs text-foreground-muted">{casino.bonusTitle}</p>
          <p className="text-sm font-bold text-foreground mt-0.5">{casino.bonusAmount}</p>
          <p className="text-xs text-foreground-muted mt-0.5">Wagering : {casino.bonusWagering}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {casino.tags.slice(0, 4).map((tag) => (
            <Badge key={tag} variant="outline" className="text-[10px]">
              {tag}
            </Badge>
          ))}
        </div>

        {/* CTA */}
        <div className="flex gap-3 mt-4">
          <Link
            href={`/casinos/${casino.slug}`}
            className="flex-1 text-center py-2.5 px-4 rounded-lg bg-gradient-to-r from-accent-primary to-purple-500 text-white text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Voir la fiche
          </Link>
          <button className="flex items-center gap-1 py-2.5 px-4 rounded-lg border border-border text-sm text-foreground-muted hover:text-foreground hover:border-border-light transition-colors">
            <ExternalLink className="w-3.5 h-3.5" />
            Visiter
          </button>
        </div>
      </div>
    </div>
  );
}
