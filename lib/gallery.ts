export type GalleryItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  featured?: boolean;
  recipeSlug?: string;
};

export const GALLERY_FILTERS = [
  { slug: "all", label: "All Creations" },
  { slug: "fine-dining", label: "Fine Dining" },
  { slug: "comfort-food", label: "Comfort Food" },
  { slug: "seafood", label: "Seafood" },
  { slug: "meat", label: "Meat" },
  { slug: "desserts", label: "Desserts" },
  { slug: "catering-events", label: "Catering & Events" },
  { slug: "signature", label: "Signature Dishes" },
] as const;

export type GalleryFilterSlug = (typeof GALLERY_FILTERS)[number]["slug"];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: "Pan-Seared White Fish Fillet",
    description: "White fish fillet served over couscous and garnished with citrus.",
    image: "/assets/dishes/Pan-Seared White Fish Fillet.jpeg",
    tags: ["seafood", "fine-dining", "signature"],
    featured: true,
    recipeSlug: "pan-seared-white-fish",
  },
  {
    id: 2,
    title: "Chicken Roulade",
    description:
      "Elegantly presented meat roll with rich sauce, mashed potatoes, and vegetables.",
    image: "/assets/dishes/Chicken roulade.jpeg",
    tags: ["meat", "fine-dining", "signature"],
    featured: true,
    recipeSlug: "chicken-roulade",
  },
  {
    id: 3,
    title: "Frenched Rack of Lamb",
    description:
      "Lamb cutlets served with roasted potatoes and vibrant green sauce.",
    image: "/assets/dishes/Rack of lamb.jpeg",
    tags: ["meat", "fine-dining"],
    featured: false,
    recipeSlug: "frenched-rack-of-lamb",
  },
  {
    id: 4,
    title: "Chocolate Lava Cake",
    description: "Molten chocolate fondant with a flowing centre.",
    image: "/assets/dishes/chocolate lava cake .jpeg",
    tags: ["desserts", "signature"],
    featured: true,
    recipeSlug: "chocolate-lava-cake",
  },
  {
    id: 5,
    title: "Savory Grazing Board",
    description: "Curated appetizer platter with artisan cheeses, charcuterie, and accompaniments.",
    image: "/assets/dishes/Grazing Board.jpeg",
    tags: ["catering-events"],
    featured: false,
  },
  {
    id: 6,
    title: "Classic Duo Burgers",
    description: "One chicken and one beef burger, precisely assembled and plated.",
    image: "/assets/dishes/Burgers.jpeg",
    tags: ["comfort-food"],
    featured: false,
  },
  {
    id: 7,
    title: "Chicken Club Sandwich & Wrap",
    description: "Toasted club sandwich and chicken wrap with shawarma-style filling.",
    image: "/assets/dishes/Chicken club sandwhich & chicken wrap.jpeg",
    tags: ["comfort-food", "signature"],
    featured: true,
  },
  {
    id: 8,
    title: "Green Pesto Pasta & Crispy Chicken",
    description: "Long pasta with crispy fried chicken and fresh herb garnish.",
    image: "/assets/dishes/Green pesto Pasta.jpeg",
    tags: ["comfort-food"],
    featured: false,
  },
  {
    id: 9,
    title: "Brownie Sundae",
    description: "Chocolate brownie with ice cream and caramel sauce.",
    image: "/assets/dishes/Chocolate brownie.jpeg",
    tags: ["desserts"],
    featured: false,
  },
];

export function formatTagLabel(tag: string): string {
  return tag
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
