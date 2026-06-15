import type { IconName } from "./icons";

export const BRAND = {
  visual: "Kamohelo Culinary Arts",
  legal: "Kamohelo Culinary Group",
  chef: "Chef Kamohelo Mthombeni",
  chefShort: "Kamohelo Mthombeni",
} as const;

export const BRAND_STATEMENT =
  "Creating exceptional dining experiences, developing innovative culinary concepts, and building a portfolio of hospitality businesses that combine creativity, craftsmanship, and entrepreneurship.";

export const HERO_SUBHEADLINE =
  "Creating exceptional dining experiences, developing original recipes, and building innovative culinary ventures.";

export const SERVICE_AREA = "Private dining & catering across South Africa";

export const TRUST_STRIP: ReadonlyArray<{ text: string; icon: IconName }> = [
  { text: "IHS Graduate", icon: "graduation" },
  { text: "Private Chef", icon: "chef-hat" },
  { text: "Catering", icon: "events" },
  { text: "South Africa", icon: "map-pin" },
];

export const INQUIRY_NEXT_STEPS: ReadonlyArray<{ text: string; icon: IconName }> = [
  { text: "Response within 24–48 hours", icon: "mail" },
  { text: "Brief consultation to understand your vision", icon: "message" },
  { text: "Menu discussion tailored to your occasion", icon: "menu-book" },
];

export const CONTACT = {
  phone: "+27 083 972 5798",
  email: "hello@kamoheloculinary.co.za",
  instagram: "https://www.instagram.com/alpha.middoew?igsh=MW1jZ2FmenUwOXI0Mw==",
} as const;

export const EDUCATION = {
  institution: "International Hotel School",
  qualification: "Diploma in Professional Cookery and Kitchen Management",
  dates: "2022 – 2024",
  url: "https://www.hotelschool.co.za/",
} as const;

export const NAV_LINKS: ReadonlyArray<{ href: string; label: string; icon: IconName }> = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/about", label: "About", icon: "user" },
  { href: "/portfolio", label: "Portfolio", icon: "images" },
  { href: "/recipes", label: "Recipes", icon: "recipe" },
  { href: "/blog", label: "Journal", icon: "newspaper" },
  { href: "/businesses", label: "Ventures", icon: "building" },
  { href: "/contact", label: "Contact", icon: "mail" },
];

export const SERVICE_LINKS: ReadonlyArray<{ href: string; label: string; icon: IconName }> = [
  { href: "/private-chef", label: "Private Chef", icon: "chef-hat" },
  { href: "/catering", label: "Catering", icon: "events" },
  { href: "/consulting", label: "Consulting", icon: "consult" },
];

export const FOOTER_LINKS: ReadonlyArray<{ href: string; label: string; icon: IconName }> = [
  { href: "/about", label: "About", icon: "user" },
  { href: "/portfolio", label: "Portfolio", icon: "images" },
  { href: "/craft", label: "Craft", icon: "knife" },
  { href: "/recipes", label: "Recipes", icon: "recipe" },
  { href: "/techniques", label: "Techniques", icon: "technique" },
  { href: "/blog", label: "Blog", icon: "newspaper" },
  { href: "/ai", label: "Ask Chef", icon: "spark" },
  { href: "/businesses", label: "Businesses", icon: "building" },
  { href: "/concepts", label: "Concepts", icon: "flame" },
  { href: "/private-chef", label: "Private Chef", icon: "chef-hat" },
  { href: "/catering", label: "Catering", icon: "events" },
  { href: "/consulting", label: "Consulting", icon: "consult" },
  { href: "/contact", label: "Contact", icon: "mail" },
];

export const SERVICES = [
  {
    title: "Private Chef",
    description: "Luxury in-home dining experiences tailored to your occasion.",
    icon: "utensils" as const,
    href: "/private-chef",
  },
  {
    title: "Catering",
    description: "Elevated service for weddings, corporate events, and celebrations.",
    icon: "events" as const,
    href: "/catering",
  },
  {
    title: "Ghost Kitchen Concepts",
    description: "Delivery-focused culinary brands built for scale.",
    icon: "flame" as const,
    href: "/concepts",
  },
  {
    title: "Restaurant Consulting",
    description: "Menu development, kitchen planning, and operational strategy.",
    icon: "consult" as const,
    href: "/consulting",
  },
] as const;

export const ABOUT_HIGHLIGHTS: ReadonlyArray<{ text: string; icon: IconName }> = [
  { text: "Diploma in Professional Cookery and Kitchen Management", icon: "graduation" },
  { text: "International Hotel School graduate", icon: "check" },
  { text: "Professional kitchen experience on the line", icon: "kitchen" },
  { text: `Building ventures under ${BRAND.legal}`, icon: "rocket" },
];

export const SIGNATURE_DISHES = [
  {
    title: "Pan-Seared White Fish",
    image: "/assets/dishes/Pan-Seared White Fish Fillet.jpeg",
    recipeSlug: "pan-seared-white-fish",
  },
  {
    title: "Chicken Roulade",
    image: "/assets/dishes/Chicken roulade.jpeg",
    recipeSlug: "chicken-roulade",
  },
  {
    title: "Frenched Rack of Lamb",
    image: "/assets/dishes/Rack of lamb.jpeg",
    recipeSlug: "frenched-rack-of-lamb",
  },
  {
    title: "Chocolate Lava Cake",
    image: "/assets/dishes/chocolate lava cake .jpeg",
    recipeSlug: "chocolate-lava-cake",
  },
  {
    title: "Grazing Board",
    image: "/assets/dishes/Grazing Board.jpeg",
  },
  {
    title: "Classic Duo Burgers",
    image: "/assets/dishes/Burgers.jpeg",
  },
] as const;

/** Re-export gallery for home/portfolio parity */
export { GALLERY_ITEMS } from "@/lib/gallery";

export const TIMELINE: ReadonlyArray<{
  period: string;
  title: string;
  org: string;
  description: string;
  icon: IconName;
}> = [
  {
    period: "2022 – 2024",
    title: "Culinary Education",
    org: "International Hotel School",
    description:
      "Formal training in professional cookery and kitchen management — building the technical foundation for fine dining and hospitality entrepreneurship.",
    icon: "graduation",
  },
  {
    period: "2024 – Present",
    title: "Professional Kitchen Experience",
    org: "Line Cook",
    description:
      "Hands-on experience on the line — refining speed, consistency, and the discipline required in professional kitchens.",
    icon: "kitchen",
  },
  {
    period: "In Development",
    title: "Entrepreneurial Ventures",
    org: "Kamohelo Culinary Group",
    description:
      "Developing ghost kitchen concepts, private chef services, and culinary brands under one umbrella vision.",
    icon: "rocket",
  },
];

export const INQUIRY_TYPES: ReadonlyArray<{
  title: string;
  description: string;
  headline: string;
  intro: string;
  icon: IconName;
  type: "private-chef" | "catering" | "consulting" | "general";
}> = [
  {
    title: "Private Chef",
    description: "In-home dining, romantic dinners, and intimate gatherings.",
    headline: "Book a Private Chef Experience",
    intro:
      "Share your occasion, guest count, and menu preferences. We will craft a bespoke in-home dining proposal.",
    icon: "chef-hat",
    type: "private-chef",
  },
  {
    title: "Catering",
    description: "Weddings, corporate events, and private functions.",
    headline: "Request Catering for Your Event",
    intro:
      "Tell us about your venue, date, and service style. We will respond with a tailored catering quote.",
    icon: "events",
    type: "catering",
  },
  {
    title: "Consulting",
    description: "Menu development, kitchen planning, and culinary strategy.",
    headline: "Culinary Consulting Inquiry",
    intro:
      "Describe your business goals and challenges. We will outline how strategic culinary support can help.",
    icon: "consult",
    type: "consulting",
  },
  {
    title: "General Inquiry",
    description: "Partnerships, media, and other questions.",
    headline: "Get in Touch",
    intro:
      "Whether it is a collaboration, media request, or general question — we are happy to hear from you.",
    icon: "message",
    type: "general",
  },
];

export const CONTACT_TIPS: ReadonlyArray<{ text: string; icon: IconName }> = [
  { text: "Event date & type", icon: "calendar" },
  { text: "Approximate guest count", icon: "users" },
  { text: "Location & venue", icon: "map-pin" },
  { text: "Dietary preferences or themes", icon: "leaf" },
];
