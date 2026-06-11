export type VentureStatus = "concept" | "live" | "in-development";

export type ConceptType = "ghost-kitchen" | "restaurant";

export type CulinaryConcept = {
  id: string;
  name: string;
  type: ConceptType;
  cuisine: string;
  brandStory: string;
  targetMarket: string;
  signatureDishes: string[];
  status: VentureStatus;
  statusLabel: string;
  developmentPlans?: string;
};

export const CULINARY_CONCEPTS: CulinaryConcept[] = [
  {
    id: "fire-and-ash",
    name: "Fire & Ash",
    type: "ghost-kitchen",
    cuisine: "Modern flame-grilled cuisine",
    brandStory:
      "Fire & Ash celebrates the primal art of open-flame cooking — bold flavours, charred perfection, and smoke-kissed ingredients reimagined for the modern palate.",
    targetMarket: "Urban professionals and food lovers seeking premium grilled delivery and takeaway.",
    signatureDishes: [
      "Charred ribeye with smoked butter",
      "Flame-grilled vegetable platter",
      "Ash-roasted chicken with herb jus",
    ],
    status: "concept",
    statusLabel: "Concept",
    developmentPlans: "Menu development and delivery-partner strategy in progress.",
  },
  {
    id: "the-bento-lab",
    name: "The Bento Lab",
    type: "ghost-kitchen",
    cuisine: "Asian-inspired fast casual",
    brandStory:
      "The Bento Lab fuses precision plating with fast-casual convenience — thoughtfully composed boxes that balance tradition, freshness, and contemporary Asian flavours.",
    targetMarket: "Office workers, students, and families wanting elevated quick-service Asian cuisine.",
    signatureDishes: [
      "Teriyaki salmon bento",
      "Crispy karaage rice bowl",
      "Seasonal vegetable donburi",
    ],
    status: "concept",
    statusLabel: "Concept",
    developmentPlans: "Brand identity and core menu testing underway.",
  },
  {
    id: "midnight-kitchen",
    name: "Midnight Kitchen",
    type: "ghost-kitchen",
    cuisine: "Late-night delivery",
    brandStory:
      "Midnight Kitchen serves the city after dark — comfort-driven, chef-crafted dishes designed for late-night cravings without compromising quality.",
    targetMarket: "Night-shift workers, hospitality staff, and late-night diners across metro areas.",
    signatureDishes: [
      "Truffle-loaded fries",
      "Midnight smash burger",
      "Chef's late-night ramen bowl",
    ],
    status: "concept",
    statusLabel: "Concept",
    developmentPlans: "Operating hours model and delivery radius being defined.",
  },
];

export const GHOST_KITCHEN_CONCEPTS = CULINARY_CONCEPTS.filter(
  (c) => c.type === "ghost-kitchen"
);

export const RESTAURANT_CONCEPTS = CULINARY_CONCEPTS.filter(
  (c) => c.type === "restaurant"
);

export type BusinessDivision = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  cta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
};

export const BUSINESS_DIVISIONS: BusinessDivision[] = [
  {
    id: "restaurants",
    title: "Restaurants",
    eyebrow: "Division",
    description:
      "Brick-and-mortar dining concepts in development — fine dining and contemporary restaurant experiences under the Kamohelo Culinary Group umbrella.",
    secondaryCta: { href: "/concepts", label: "View All Concepts" },
  },
  {
    id: "ghost-kitchens",
    title: "Ghost Kitchens",
    eyebrow: "Division",
    description:
      "Delivery-focused food brands built for scale — original concepts designed for modern urban dining and late-night culture.",
    cta: { href: "/concepts", label: "Explore Ghost Kitchen Concepts" },
  },
  {
    id: "private-chef",
    title: "Private Chef Division",
    eyebrow: "Division",
    description:
      "Luxury in-home dining experiences — bespoke menus, intimate service, and unforgettable occasions crafted by Chef Kamohelo Mthombeni.",
    cta: { href: "/private-chef", label: "Book a Private Dining Experience" },
  },
  {
    id: "catering",
    title: "Catering Division",
    eyebrow: "Division",
    description:
      "Elevated catering for weddings, corporate events, and private celebrations — from canapés to fine dining service.",
    cta: { href: "/catering", label: "Request a Catering Quote" },
  },
  {
    id: "consulting",
    title: "Consulting Division",
    eyebrow: "Division",
    description:
      "Menu development, kitchen planning, recipe innovation, and culinary strategy for hospitality businesses.",
    cta: { href: "/consulting", label: "Start a Consulting Conversation" },
  },
  {
    id: "future-ventures",
    title: "Future Ventures",
    eyebrow: "Roadmap",
    description:
      "Long-term vision for a diversified culinary group — education, products, and hospitality investments in development.",
  },
];

export const FUTURE_VENTURES = [
  {
    title: "Culinary Academy",
    description: "Online and in-person culinary education — technique, hospitality, and entrepreneurship.",
    status: "In Development",
  },
  {
    title: "Cookbooks",
    description: "Published collections of original recipes, techniques, and culinary philosophy.",
    status: "In Development",
  },
  {
    title: "Product Lines",
    description: "Sauces, spice blends, and chef-crafted products for home cooks.",
    status: "In Development",
  },
  {
    title: "Hospitality Investments",
    description: "Partnerships and ventures across restaurants, delivery brands, and food service.",
    status: "In Development",
  },
] as const;

/** Compact cards for home page preview */
export const VENTURE_PREVIEW = GHOST_KITCHEN_CONCEPTS.map((c) => ({
  name: c.name,
  cuisine: c.cuisine,
  status: c.statusLabel,
  href: `/concepts#${c.id}`,
}));
