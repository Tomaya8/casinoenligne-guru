"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { mainNavigation } from "@/data/navigation";
import SearchBar from "@/components/search/SearchBar";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const openDropdown = useCallback((label: string) => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setActiveDropdown(label);
  }, []);

  const closeDropdown = useCallback(() => {
    closeTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  }, []);

  return (
    <header className="sticky top-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center">
              <span className="text-white font-bold text-sm">CG</span>
            </div>
            <span className="text-lg font-bold">
              <span className="gradient-text">casino</span>
              <span className="text-foreground-muted">enligne</span>
              <span className="gradient-text-gold">.guru</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {mainNavigation.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => openDropdown(item.label)}
                onMouseLeave={closeDropdown}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 text-sm text-foreground-muted hover:text-foreground transition-colors rounded-lg hover:bg-background-card"
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3 h-3" />}
                </Link>

                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-0 w-72">
                    {/* Invisible bridge to prevent gap mouseLeave */}
                    <div className="h-2" />
                    <div className="glass rounded-xl p-2 shadow-2xl">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-3 py-2.5 rounded-lg hover:bg-background-card-hover transition-colors"
                        >
                          <span className="text-sm font-medium text-foreground">{child.label}</span>
                          {child.description && (
                            <span className="block text-xs text-foreground-muted mt-0.5">{child.description}</span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => { setSearchOpen(!searchOpen); setMobileMenuOpen(false); }}
              className="p-2 text-foreground-muted hover:text-foreground transition-colors rounded-lg hover:bg-background-card"
              aria-label="Rechercher"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={() => { setMobileMenuOpen(!mobileMenuOpen); setSearchOpen(false); }}
              className="lg:hidden p-2 text-foreground-muted hover:text-foreground transition-colors rounded-lg hover:bg-background-card"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Search overlay */}
        {searchOpen && (
          <div className="pb-4">
            <SearchBar onClose={() => setSearchOpen(false)} />
          </div>
        )}
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass border-t border-border">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            {mainNavigation.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:text-accent-primary transition-colors rounded-lg hover:bg-background-card"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4 space-y-0.5">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-3 py-2.5 text-sm text-foreground-muted hover:text-foreground transition-colors rounded-lg hover:bg-background-card"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
