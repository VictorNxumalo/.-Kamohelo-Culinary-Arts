import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  variant?: "full" | "mark-only";
  className?: string;
  priority?: boolean;
  href?: string;
};

const LOGO_SRC = "/assets/logo/kamohelo-culinary-arts.png";

export function Logo({
  variant = "full",
  className = "",
  priority = false,
  href = "/",
}: LogoProps) {
  const sizes =
    variant === "full"
      ? "h-10 w-auto md:h-12"
      : "h-8 w-8 object-contain object-left md:h-9 md:w-9";

  const image = (
    <Image
      src={LOGO_SRC}
      alt="Kamohelo Culinary Arts"
      width={variant === "full" ? 220 : 56}
      height={variant === "full" ? 88 : 56}
      className={`${sizes} ${className}`}
      priority={priority}
    />
  );

  return (
    <Link href={href} className="inline-flex shrink-0 items-center" aria-label="Kamohelo Culinary Arts — Home">
      {image}
    </Link>
  );
}
