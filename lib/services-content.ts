import type { IconName } from "./icons";

export const PRIVATE_CHEF_SERVICES: ReadonlyArray<{
  title: string;
  description: string;
  icon: IconName;
}> = [
  {
    title: "In-Home Dining",
    description: "Multi-course experiences in the comfort of your home, with full service and cleanup.",
    icon: "chef-hat",
  },
  {
    title: "Romantic Dinners",
    description: "Intimate menus for two — thoughtfully paced, beautifully plated, and personally served.",
    icon: "heart",
  },
  {
    title: "Family Gatherings",
    description: "Celebratory menus for family milestones, from casual elegance to fine dining.",
    icon: "users",
  },
  {
    title: "Corporate Dining",
    description: "Executive dinners and small corporate gatherings with refined, professional service.",
    icon: "briefcase",
  },
  {
    title: "Special Occasions",
    description: "Birthdays, anniversaries, and private celebrations with bespoke menu design.",
    icon: "sparkles",
  },
];

export const BOOKING_STEPS: ReadonlyArray<{
  step: string;
  title: string;
  description: string;
  icon: IconName;
}> = [
  {
    step: "01",
    title: "Consultation",
    description: "We discuss your occasion, preferences, dietary needs, and vision for the experience.",
    icon: "message",
  },
  {
    step: "02",
    title: "Menu Development",
    description: "A custom menu is crafted to match your tastes, seasonality, and event style.",
    icon: "menu-book",
  },
  {
    step: "03",
    title: "Preparation",
    description: "Ingredients are sourced, dishes are prepared, and your space is set with care.",
    icon: "kitchen",
  },
  {
    step: "04",
    title: "Dining Experience",
    description: "Enjoy a seamless private dining experience — plated, served, and memorable.",
    icon: "wine",
  },
];

export const SAMPLE_MENUS: ReadonlyArray<{
  name: string;
  courses: string;
  highlights: readonly string[];
  icon: IconName;
}> = [
  {
    name: "Intimate Evening",
    courses: "4 courses · 2–6 guests",
    highlights: ["Amuse-bouche", "Seasonal starter", "Main course", "Dessert"],
    icon: "heart",
  },
  {
    name: "Celebration Feast",
    courses: "5 courses · 6–12 guests",
    highlights: ["Canapés on arrival", "Soup or salad", "Fish or poultry", "Main protein", "Petit fours"],
    icon: "sparkles",
  },
  {
    name: "Tasting Journey",
    courses: "7 courses · 4–10 guests",
    highlights: ["Progressive tasting menu", "Wine-pairing options", "Chef interaction", "Seasonal focus"],
    icon: "wine",
  },
];

export const CATERING_EVENT_TYPES: ReadonlyArray<{
  title: string;
  description: string;
  icon: IconName;
}> = [
  { title: "Weddings", description: "Elegant receptions, canapés, and plated service for your special day.", icon: "wedding" },
  { title: "Corporate Events", description: "Professional catering for conferences, launches, and executive functions.", icon: "corporate" },
  { title: "Birthday Celebrations", description: "Memorable menus tailored to your theme and guest list.", icon: "cake" },
  { title: "Private Functions", description: "From intimate gatherings to large-scale private events.", icon: "party" },
];

export const CATERING_FORMATS: ReadonlyArray<{
  title: string;
  description: string;
  icon: IconName;
}> = [
  { title: "Buffet Service", description: "Curated stations and displays for flexible, social dining.", icon: "buffet" },
  { title: "Fine Dining Service", description: "Plated courses with full wait staff and refined presentation.", icon: "fine-dining" },
  { title: "Canapés", description: "Passed hors d'oeuvres and bite-sized creations for cocktail events.", icon: "canapes" },
  { title: "Cocktail Events", description: "Stylish finger food and grazing options for standing receptions.", icon: "cocktail" },
];

export const CONSULTING_SERVICES: ReadonlyArray<{
  title: string;
  description: string;
  icon: IconName;
}> = [
  {
    title: "Menu Development",
    description: "Concept-to-plate menu design for restaurants, hotels, and private brands.",
    icon: "menu-book",
  },
  {
    title: "Kitchen Planning",
    description: "Workflow, equipment, and layout guidance for efficient kitchen operations.",
    icon: "kitchen",
  },
  {
    title: "Recipe Development",
    description: "Original recipes, costing, and standardisation for consistent execution.",
    icon: "recipe",
  },
  {
    title: "Staff Training",
    description: "Technique coaching and service standards for culinary teams.",
    icon: "graduation",
  },
  {
    title: "Culinary Strategy",
    description: "Brand positioning, concept refinement, and growth planning for food businesses.",
    icon: "strategy",
  },
];
