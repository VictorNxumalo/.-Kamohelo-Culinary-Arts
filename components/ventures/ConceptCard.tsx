import Link from "next/link";
import type { CulinaryConcept } from "@/lib/ventures";

type ConceptCardProps = {
  concept: CulinaryConcept;
  detailed?: boolean;
};

export function ConceptCard({ concept, detailed = false }: ConceptCardProps) {
  if (detailed) {
    return (
      <article
        id={concept.id}
        className="card-dark scroll-mt-28 p-8 md:p-10"
      >
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <span className="sub-label text-brand-gold">{concept.statusLabel}</span>
            <h3 className="brand-caps mt-3 text-xl text-brand-cream md:text-2xl">
              {concept.name}
            </h3>
            <p className="mt-2 font-body text-sm text-brand-gold">{concept.cuisine}</p>
          </div>
          <span className="border border-white/10 px-3 py-1 font-body text-[10px] uppercase tracking-wide text-brand-cream-muted">
            {concept.type === "ghost-kitchen" ? "Ghost Kitchen" : "Restaurant"}
          </span>
        </div>

        <p className="mt-6 font-body text-sm font-light leading-relaxed text-brand-cream-muted">
          {concept.brandStory}
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div>
            <h4 className="sub-label text-brand-cream-muted">Target Market</h4>
            <p className="mt-2 font-body text-sm font-light text-brand-cream-muted">
              {concept.targetMarket}
            </p>
          </div>
          <div>
            <h4 className="sub-label text-brand-cream-muted">Signature Dishes</h4>
            <ul className="mt-2 space-y-1">
              {concept.signatureDishes.map((dish) => (
                <li key={dish} className="font-body text-sm font-light text-brand-cream-muted">
                  {dish}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {concept.developmentPlans && (
          <p className="mt-6 border-t border-white/10 pt-6 font-body text-xs text-brand-text-muted">
            {concept.developmentPlans}
          </p>
        )}
      </article>
    );
  }

  return (
    <Link href={`/concepts#${concept.id}`} className="card-dark group block p-6 transition-colors hover:border-brand-gold/30">
      <span className="sub-label text-brand-gold">{concept.statusLabel}</span>
      <h3 className="brand-caps mt-3 text-base text-brand-cream group-hover:text-brand-gold">
        {concept.name}
      </h3>
      <p className="mt-2 font-body text-sm font-light text-brand-cream-muted">
        {concept.cuisine}
      </p>
    </Link>
  );
}
