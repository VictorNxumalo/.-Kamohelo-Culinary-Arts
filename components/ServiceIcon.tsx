import { Icon } from "@/components/icons/Icon";
import type { IconName } from "@/lib/icons";

type ServiceIconProps = {
  name: Extract<IconName, "utensils" | "events" | "flame" | "consult">;
  className?: string;
};

/** @deprecated Prefer Icon or IconBox from @/components/icons/Icon */
export function ServiceIcon({ name, className = "h-6 w-6" }: ServiceIconProps) {
  return <Icon name={name} className={className} size={24} />;
}
