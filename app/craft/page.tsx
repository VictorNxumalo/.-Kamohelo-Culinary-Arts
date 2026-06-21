import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { Icon, IconBox } from "@/components/icons/Icon";
import { SectionHeading } from "@/components/SectionHeading";
import type { IconName } from "@/lib/icons";
import { VideoShowcase } from "@/components/craft/VideoShowcase";
import { BRAND, EDUCATION } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Craft in Motion",
  description:
    "A cinematic study of culinary precision, technique, and the disciplined craft of Chef Kamohelo Mthombeni.",
};

const SKILL_CARDS: ReadonlyArray<{
  title: string;
  description: string;
  meta: readonly [string, string];
  icon: IconName;
}> = [
  {
    title: "Knife Precision",
    description:
      "The foundation of all culinary work — where safety meets speed, and consistency becomes instinct.",
    meta: ["Classical Technique", "Deliberate Practice"],
    icon: "knife",
  },
  {
    title: "Vegetable Craft",
    description:
      "Transforming humble ingredients into consistent, beautiful components through precise cuts and texture.",
    meta: ["Seasonal Focus", "Meticulous"],
    icon: "carrot",
  },
  {
    title: "Ingredient Respect",
    description:
      "Handling each component with intention — understanding its story, potential, and perfect application.",
    meta: ["Farm-to-Table", "Ethical Focus"],
    icon: "heart",
  },
];

export default function CraftPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-dark py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <FadeIn>
            <p className="sub-label text-brand-gold">A Cinematic Journey</p>
            <h1 className="brand-caps mt-6 text-4xl font-light text-brand-cream md:text-5xl lg:text-6xl">
              The <span className="text-brand-gold">Art</span> of Precision
            </h1>
            <div className="gold-rule-wide mt-8" />
            <p className="mx-auto mt-8 max-w-2xl font-body text-lg font-light text-brand-cream-muted md:text-xl">
              Where discipline meets creativity, and every movement tells a story of mastery.
            </p>
            <a href="#video" className="btn-secondary mt-10 inline-flex items-center gap-2">
              <Icon name="play" size={16} />
              Witness the Craft
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Video */}
      <section id="video" className="section-dark border-t border-white/5 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <SectionHeading
              eyebrow="Craft in Motion"
              title="Precision on Film"
              description="A silent study of skill, patience, and the meticulous art of culinary precision."
              dark
            />
          </FadeIn>
          <FadeIn delay={100}>
            <VideoShowcase />
            <div className="mt-8 flex flex-wrap justify-center gap-6 font-body text-xs text-brand-text-muted">
              <span>Designed for silent viewing</span>
              <span>·</span>
              <span>Click to expand fullscreen</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Skills */}
      <section className="section-light py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <SectionHeading
              eyebrow="Technique"
              title="The Language of Skill"
              description="Each technique is a vocabulary of its own — learned through repetition, perfected through patience."
            />
          </FadeIn>
          <div className="grid gap-6 md:grid-cols-3">
            {SKILL_CARDS.map((skill, i) => (
              <FadeIn key={skill.title} delay={i * 80}>
                <article className="card-light group h-full p-8 transition-shadow duration-500 hover:shadow-md">
                  <IconBox name={skill.icon} />
                  <h3 className="brand-caps text-sm text-brand-cream">{skill.title}</h3>
                  <p className="mt-3 font-body text-sm font-light leading-relaxed text-brand-cream-muted">
                    {skill.description}
                  </p>
                  <div className="mt-6 flex justify-between border-t border-white/10 pt-4 font-body text-xs text-brand-text-muted">
                    <span>{skill.meta[0]}</span>
                    <span>{skill.meta[1]}</span>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-20">
            <div className="mx-auto grid max-w-4xl items-center gap-10 md:grid-cols-2">
              <div className="relative flex justify-center">
                <div className="h-56 w-56 overflow-hidden rounded-full border-2 border-brand-gold md:h-64 md:w-64">
                  <Image
                    src="/assets/profile/profile-image.jpeg"
                    alt={BRAND.chef}
                    width={256}
                    height={256}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <blockquote className="border-l-2 border-brand-gold pl-6">
                <p className="font-body text-xl font-light italic leading-relaxed text-brand-cream md:text-2xl">
                  Mastery is not a destination, but a relationship with repetition — where hands learn what
                  words cannot teach.
                </p>
                <p className="mt-6 font-body text-sm font-light text-brand-cream-muted">
                  Every skill shown is the result of deliberate practice and formal training at the
                  International Hotel School.
                </p>
              </blockquote>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-dark py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <FadeIn>
            <SectionHeading
              eyebrow="Philosophy"
              title="Philosophy of Presence"
              description="The space between ingredients, intention, and execution — where true craft lives."
              dark
            />
          </FadeIn>
          <div className="grid gap-12 md:grid-cols-2">
            <FadeIn>
              <IconBox name="kitchen" variant="dark" className="mb-6" />
              <h3 className="brand-caps text-sm text-brand-cream">The Quiet Kitchen</h3>
              <p className="mt-4 font-body text-sm font-light leading-relaxed text-brand-cream-muted">
                In professional kitchens, noise is distraction. The most skilled chefs work with focused
                silence — every movement intentional, every placement considered.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="font-body text-sm text-brand-cream-muted">
                  <span className="text-brand-gold">Rhythm Over Speed</span> — efficiency comes from flow,
                  not haste.
                </li>
                <li className="font-body text-sm text-brand-cream-muted">
                  <span className="text-brand-gold">Visual Consistency</span> — the eye judges before the
                  palate.
                </li>
              </ul>
            </FadeIn>
            <FadeIn delay={100}>
              <IconBox name="knife" variant="dark" className="mb-6" />
              <h3 className="brand-caps text-sm text-brand-cream">Tools as Extensions</h3>
              <p className="mt-4 font-body text-sm font-light leading-relaxed text-brand-cream-muted">
                A chef&apos;s knife is an extension of their hand, their intention, and their respect for
                the ingredient.
              </p>
              <div className="card-dark mt-6 p-6">
                <p className="font-body text-sm font-light italic text-brand-cream-muted">
                  &ldquo;A dull knife is more dangerous than a sharp one. It requires more force, slips more
                  easily, and shows disrespect to both the ingredient and the craft.&rdquo;
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Training */}
      <section className="section-light py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <FadeIn>
            <SectionHeading
              eyebrow="Education"
              title="Crafted Through Formal Training"
              description="True skill begins with disciplined education — precision, discipline, and foundational technique."
            />
          </FadeIn>
          <FadeIn>
            <div className="card-light p-8 md:p-12">
              <div className="flex flex-col items-center gap-8 md:flex-row">
                <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full border-2 border-brand-gold/30 bg-brand-surface/40 p-4">
                  <Image
                    src="/assets/education/ihs-logo.webp"
                    alt={`${EDUCATION.institution} logo`}
                    width={120}
                    height={120}
                    className="h-auto w-full object-contain"
                  />
                </div>
                <div className="text-center md:text-left">
                  <span className="sub-label text-brand-gold">Formal Education</span>
                  <h3 className="brand-caps mt-3 text-lg text-brand-cream">
                    {EDUCATION.institution}
                  </h3>
                  <p className="mt-3 font-body text-sm font-light text-brand-cream-muted">
                    {EDUCATION.qualification}
                  </p>
                  <p className="mt-4 font-body text-sm text-brand-text-muted">{EDUCATION.dates} · South Africa</p>
                  <a
                    href={EDUCATION.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary mt-6 inline-flex"
                  >
                    Discover International Hotel School
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="section-light border-t border-white/10 py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <SectionHeading title="Skill Meets Story" />
            <p className="mx-auto -mt-6 max-w-xl font-body text-base font-light text-brand-cream-muted">
              Every technique shown translates to exceptional dining experiences — where precision becomes
              pleasure.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="btn-primary-solid inline-flex items-center gap-2">
                <Icon name="chef-hat" size={16} />
                Book a Culinary Experience
              </Link>
              <Link href="/portfolio" className="btn-primary">
                Return to Portfolio
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
