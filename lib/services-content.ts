export const PRIVATE_CHEF_SERVICES = [
  {
    title: "In-Home Dining",
    description: "Multi-course experiences in the comfort of your home, with full service and cleanup.",
  },
  {
    title: "Romantic Dinners",
    description: "Intimate menus for two — thoughtfully paced, beautifully plated, and personally served.",
  },
  {
    title: "Family Gatherings",
    description: "Celebratory menus for family milestones, from casual elegance to fine dining.",
  },
  {
    title: "Corporate Dining",
    description: "Executive dinners and small corporate gatherings with refined, professional service.",
  },
  {
    title: "Special Occasions",
    description: "Birthdays, anniversaries, and private celebrations with bespoke menu design.",
  },
] as const;

export const BOOKING_STEPS = [
  {
    step: "01",
    title: "Consultation",
    description: "We discuss your occasion, preferences, dietary needs, and vision for the experience.",
  },
  {
    step: "02",
    title: "Menu Development",
    description: "A custom menu is crafted to match your tastes, seasonality, and event style.",
  },
  {
    step: "03",
    title: "Preparation",
    description: "Ingredients are sourced, dishes are prepared, and your space is set with care.",
  },
  {
    step: "04",
    title: "Dining Experience",
    description: "Enjoy a seamless private dining experience — plated, served, and memorable.",
  },
] as const;

export const SAMPLE_MENUS = [
  {
    name: "Intimate Evening",
    courses: "4 courses · 2–6 guests",
    highlights: ["Amuse-bouche", "Seasonal starter", "Main course", "Dessert"],
  },
  {
    name: "Celebration Feast",
    courses: "5 courses · 6–12 guests",
    highlights: ["Canapés on arrival", "Soup or salad", "Fish or poultry", "Main protein", "Petit fours"],
  },
  {
    name: "Tasting Journey",
    courses: "7 courses · 4–10 guests",
    highlights: ["Progressive tasting menu", "Wine-pairing options", "Chef interaction", "Seasonal focus"],
  },
] as const;

export const CATERING_EVENT_TYPES = [
  { title: "Weddings", description: "Elegant receptions, canapés, and plated service for your special day." },
  { title: "Corporate Events", description: "Professional catering for conferences, launches, and executive functions." },
  { title: "Birthday Celebrations", description: "Memorable menus tailored to your theme and guest list." },
  { title: "Private Functions", description: "From intimate gatherings to large-scale private events." },
] as const;

export const CATERING_FORMATS = [
  { title: "Buffet Service", description: "Curated stations and displays for flexible, social dining." },
  { title: "Fine Dining Service", description: "Plated courses with full wait staff and refined presentation." },
  { title: "Canapés", description: "Passed hors d'oeuvres and bite-sized creations for cocktail events." },
  { title: "Cocktail Events", description: "Stylish finger food and grazing options for standing receptions." },
] as const;

export const CONSULTING_SERVICES = [
  {
    title: "Menu Development",
    description: "Concept-to-plate menu design for restaurants, hotels, and private brands.",
  },
  {
    title: "Kitchen Planning",
    description: "Workflow, equipment, and layout guidance for efficient kitchen operations.",
  },
  {
    title: "Recipe Development",
    description: "Original recipes, costing, and standardisation for consistent execution.",
  },
  {
    title: "Staff Training",
    description: "Technique coaching and service standards for culinary teams.",
  },
  {
    title: "Culinary Strategy",
    description: "Brand positioning, concept refinement, and growth planning for food businesses.",
  },
] as const;
