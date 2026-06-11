import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Building2,
  Cake,
  CalendarDays,
  Carrot,
  Check,
  ChefHat,
  ClipboardList,
  ExternalLink,
  Flame,
  GraduationCap,
  Heart,
  Home,
  Images,
  Leaf,
  Lightbulb,
  Mail,
  MapPin,
  Martini,
  MessageSquare,
  Newspaper,
  PartyPopper,
  Phone,
  Play,
  Rocket,
  Search,
  Send,
  ShoppingBag,
  Sparkles,
  Target,
  User,
  Users,
  Utensils,
  UtensilsCrossed,
  Wine,
  Wrench,
} from "lucide-react";
import type { ReactNode } from "react";
import type { IconName } from "@/lib/icons";

function InstagramGlyph({
  className = "",
  size = 20,
  strokeWidth = 1.25,
}: {
  className?: string;
  size?: number;
  strokeWidth?: number;
}) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const ICON_MAP: Record<Exclude<IconName, "instagram">, LucideIcon> = {
  home: Home,
  user: User,
  images: Images,
  "book-open": BookOpen,
  newspaper: Newspaper,
  building: Building2,
  mail: Mail,
  phone: Phone,
  utensils: UtensilsCrossed,
  events: CalendarDays,
  flame: Flame,
  consult: ClipboardList,
  "chef-hat": ChefHat,
  heart: Heart,
  users: Users,
  briefcase: Briefcase,
  sparkles: Sparkles,
  message: MessageSquare,
  "menu-book": BookOpen,
  shopping: ShoppingBag,
  wine: Wine,
  calendar: CalendarDays,
  "map-pin": MapPin,
  leaf: Leaf,
  graduation: GraduationCap,
  kitchen: Utensils,
  rocket: Rocket,
  wedding: Heart,
  corporate: Briefcase,
  cake: Cake,
  party: PartyPopper,
  buffet: Utensils,
  "fine-dining": Wine,
  canapes: Martini,
  cocktail: Martini,
  recipe: BookOpen,
  technique: Wrench,
  search: Search,
  spark: Sparkles,
  play: Play,
  knife: UtensilsCrossed,
  carrot: Carrot,
  target: Target,
  clipboard: ClipboardList,
  strategy: Lightbulb,
  external: ExternalLink,
  "arrow-right": ArrowRight,
  check: Check,
  send: Send,
};

type IconProps = {
  name: IconName;
  className?: string;
  size?: number;
  strokeWidth?: number;
};

export function Icon({
  name,
  className = "",
  size = 20,
  strokeWidth = 1.25,
}: IconProps) {
  if (name === "instagram") {
    return (
      <InstagramGlyph className={className} size={size} strokeWidth={strokeWidth} />
    );
  }

  const Component = ICON_MAP[name];
  return (
    <Component
      className={className}
      size={size}
      strokeWidth={strokeWidth}
      aria-hidden="true"
    />
  );
}

type IconBoxProps = {
  name: IconName;
  className?: string;
  size?: number;
  variant?: "light" | "dark";
};

export function IconBox({
  name,
  className = "",
  size = 22,
  variant = "light",
}: IconBoxProps) {
  const shell =
    variant === "dark"
      ? "border-white/15 bg-white/5 text-brand-gold group-hover:border-brand-gold/40 group-hover:bg-brand-gold/10"
      : "border-brand-gold/30 bg-brand-gold/5 text-brand-gold group-hover:border-brand-gold group-hover:bg-brand-gold/10 group-hover:shadow-gold-sm";

  return (
    <div
      className={`mb-5 flex h-12 w-12 shrink-0 items-center justify-center border transition-all duration-500 ease-premium ${shell} ${className}`}
    >
      <Icon name={name} size={size} />
    </div>
  );
}

type IconLabelProps = {
  name: IconName;
  children: ReactNode;
  className?: string;
};

export function IconLabel({ name, children, className = "" }: IconLabelProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <Icon name={name} size={16} className="shrink-0 text-brand-gold" />
      {children}
    </span>
  );
}
