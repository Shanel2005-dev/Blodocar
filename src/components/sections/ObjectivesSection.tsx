import { CarFront, History, Leaf, ShieldCheck, Users } from 'lucide-react'
import { siteContent } from '../../content/siteContent'
import Reveal from '../ui/Reveal'

const cardStyles = [
  { Icon: ShieldCheck, number: 'bg-brand-orange', icon: 'text-brand-orange' },
  { Icon: CarFront, number: 'bg-[#0C7829]', icon: 'text-[#0C7829]' },
  { Icon: Users, number: 'bg-[#1D6FE0]', icon: 'text-[#1D6FE0]' },
  { Icon: History, number: 'bg-brand-orange', icon: 'text-brand-orange' },
  { Icon: Leaf, number: 'bg-[#0C7829]', icon: 'text-[#0C7829]' },
]

const fallbackStyle = cardStyles[0]

function ObjectivesSection() {
  const { objectives, brand } = siteContent
  const { hero, cards, ambitionCard } = objectives

  return (
    <section
      aria-labelledby="objectives-title"
      className="bg-white"
      id="objectives"
    >
      {/* 1. Bandeau d'en-tête */}
      <div className="relative isolate overflow-hidden bg-brand-night">
        <div className="relative z-10 mx-auto flex max-w-7xl px-5 py-14 sm:px-8 lg:min-h-[22rem] lg:items-center lg:py-16">
          <Reveal>
            <div className="max-w-xl lg:max-w-[44%]">
              <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-white">
                <span
                  aria-hidden="true"
                  className="h-0.5 w-8 bg-brand-orange"
                />
                {hero.label}
              </p>
              <h1
                className="mt-5 text-4xl font-bold leading-[1.1] text-white sm:text-5xl"
                id="objectives-title"
              >
                {hero.titleLead}{' '}
                <span className="text-brand-orange">{hero.titleAccent}</span>
              </h1>
              <p className="mt-6 max-w-md text-base leading-7 text-slate-200 sm:text-lg">
                {hero.subtitle}
              </p>
            </div>
          </Reveal>
        </div>

        <div className="relative h-56 sm:h-72 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[62%]">
          <img
            alt={hero.image.alt}
            className="h-full w-full object-cover object-[60%_50%] lg:object-right"
            src={hero.image.src}
          />
          {/* Fondu bleu nuit sur le bord gauche de la photo (supprimez ce bloc pour l'enlever) */}
          <div
            aria-hidden="true"
            className="absolute inset-0 hidden lg:block"
            style={{
              backgroundImage:
                'linear-gradient(to right, #04245F 0%, rgba(4,36,95,0) 28%)',
            }}
          />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        {/* 2. Les cinq objectifs */}
        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {cards.map((card, index) => {
            const { Icon, number, icon } =
              cardStyles[index] ?? fallbackStyle

            return (
              <Reveal className="h-full" key={card.title}>
                <li className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold text-white ${number}`}
                    >
                      {index + 1}
                    </span>
                    <Icon
                      aria-hidden="true"
                      className={icon}
                      size={34}
                      strokeWidth={1.5}
                    />
                  </div>
                  <h2 className="mt-5 text-lg font-bold leading-snug text-brand-night">
                    {card.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
                    {card.text}
                  </p>
                  <img
                    alt={card.imageAlt}
                    className="mt-5 h-36 w-full rounded-xl object-cover"
                    loading="lazy"
                    src={card.image}
                  />
                </li>
              </Reveal>
            )
          })}
        </ol>

        {/* 3. Bandeau « Notre ambition » */}
        <Reveal>
          <div className="mt-10 flex flex-col gap-6 rounded-2xl bg-[#EEF4FC] px-6 py-8 sm:px-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-5 sm:gap-6">
              <img
                alt={brand.logoAlt}
                className="h-14 w-auto shrink-0 sm:h-16"
                height={378}
                src={brand.logoSrc}
                width={900}
              />
              <span
                aria-hidden="true"
                className="h-14 w-0.5 shrink-0 bg-brand-orange"
              />
              <div>
                <p className="text-sm text-slate-600">{ambitionCard.label}</p>
                <p className="mt-1 text-xl font-bold leading-snug text-brand-night sm:text-2xl">
                  {ambitionCard.title}{' '}
                  <span className="text-brand-orange">
                    {ambitionCard.accent}
                  </span>
                </p>
              </div>
            </div>
            <p className="flex items-center gap-4 text-sm text-slate-600">
              <span
                aria-hidden="true"
                className="h-0.5 w-12 shrink-0 bg-brand-orange"
              />
              {ambitionCard.tagline}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default ObjectivesSection