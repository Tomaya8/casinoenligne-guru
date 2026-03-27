export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  description?: string;
}

export const mainNavigation: NavItem[] = [
  {
    label: "Casinos",
    href: "/casinos",
    children: [
      { label: "Tous les casinos", href: "/casinos", description: "Annuaire complet des casinos en ligne" },
      { label: "Casinos France", href: "/casinos?pays=france", description: "Casinos légaux avec licence ANJ" },
      { label: "Casinos Belgique", href: "/casinos?pays=belgique", description: "Casinos autorisés en Belgique" },
      { label: "Casinos Suisse", href: "/casinos?pays=suisse", description: "Casinos légaux en Suisse" },
      { label: "Casinos Crypto", href: "/casinos?tag=crypto", description: "Casinos acceptant les cryptomonnaies" },
    ],
  },
  {
    label: "Jeux",
    href: "/jeux",
    children: [
      { label: "Machines à Sous", href: "/jeux/machines-a-sous", description: "Slots en ligne : règles et stratégies" },
      { label: "Blackjack", href: "/jeux/blackjack", description: "Stratégie et variantes du blackjack" },
      { label: "Roulette", href: "/jeux/roulette", description: "Guide complet de la roulette" },
      { label: "Poker", href: "/jeux/poker", description: "Poker en ligne francophone" },
    ],
  },
  {
    label: "Bonus",
    href: "/bonus-casino",
    children: [
      { label: "Tous les bonus", href: "/bonus-casino", description: "Comparatif des meilleurs bonus" },
      { label: "Bonus sans dépôt", href: "/bonus-casino#sans-depot", description: "Jouez gratuitement" },
      { label: "Tours gratuits", href: "/bonus-casino#tours-gratuits", description: "Free spins disponibles" },
    ],
  },
  {
    label: "Guides",
    href: "/guides",
    children: [
      { label: "Tous les guides", href: "/guides", description: "Nos guides et revues experts" },
      { label: "Casino en Direct", href: "/guides#live-casino", description: "Live casino : stratégies et revues" },
      { label: "Casino Mobile", href: "/guides#casino-mobile", description: "Jeux sur mobile et applications" },
      { label: "Crypto & Casino", href: "/guides#crypto-casino", description: "Bitcoin et cryptomonnaies" },
      { label: "Machines à Sous", href: "/guides#slots-avance", description: "RTP, volatilité et mécaniques" },
      { label: "Sécurité Casino", href: "/guides#securite-casino", description: "Licences, KYC et protection" },
      { label: "Actualités", href: "/actualites", description: "News de l'industrie iGaming" },
      { label: "Analyses", href: "/analyses", description: "Études et tendances du marché" },
      { label: "Jeu responsable", href: "/risques-jeu", description: "Prévention et ressources" },
    ],
  },
  {
    label: "Paiements",
    href: "/paiements",
  },
  {
    label: "Régulation",
    href: "/regulation",
    children: [
      { label: "France (ANJ)", href: "/regulation/france", description: "Régulation française" },
      { label: "Belgique", href: "/regulation/belgique", description: "Législation belge" },
      { label: "Suisse", href: "/regulation/suisse", description: "Régulation suisse" },
      { label: "Québec", href: "/regulation/quebec", description: "Législation québécoise" },
    ],
  },
];

export const footerNavigation = {
  annuaire: [
    { label: "Casinos en ligne", href: "/casinos" },
    { label: "Bonus casino", href: "/bonus-casino" },
    { label: "Logiciels casino", href: "/logiciels-casino" },
    { label: "Paiements", href: "/paiements" },
  ],
  jeux: [
    { label: "Machines à sous", href: "/jeux/machines-a-sous" },
    { label: "Blackjack", href: "/jeux/blackjack" },
    { label: "Roulette", href: "/jeux/roulette" },
    { label: "Poker", href: "/jeux/poker" },
  ],
  editorial: [
    { label: "Guides", href: "/guides" },
    { label: "Actualités", href: "/actualites" },
    { label: "Analyses", href: "/analyses" },
    { label: "Jeu responsable", href: "/risques-jeu" },
  ],
  legal: [
    { label: "À propos", href: "/a-propos" },
    { label: "Méthodologie", href: "/methodologie" },
    { label: "Contact", href: "/a-propos#contact" },
    { label: "Mentions légales", href: "/a-propos#mentions-legales" },
  ],
};
