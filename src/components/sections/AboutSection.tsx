import { ArrowRight, Handshake, MapPin, ShieldCheck, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteContent } from '../../content/siteContent'
import Reveal from '../ui/Reveal'

const valueStyles = [
  { Icon: ShieldCheck, circle: 'bg-brand-orange' },
  { Icon: Handshake, circle: 'bg-brand-night' },
  { Icon: Star, circle: 'bg-[#0C7829]' },
  { Icon: MapPin, circle: 'bg-brand-orange' },
]

const fallbackStyle = { Icon: ShieldCheck, circle: 'bg-brand-orange' }

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-brand-night">
      <span aria-hidden="true" className="h-0.5 w-8 bg-brand-orange" />
      {children}
    </p>
  )
}

function AboutSection() {
  const { about, brand } = siteContent
  const { hero, pillars, ecosystemCard, banner, values } = about

  return (
    <section aria-labelledby="about-title" className="bg-white" id="about">
      {/* 1. Bandeau d'en-tête */}
      <div className="relative isolate overflow-hidden bg-slate-50">
        <div className="relative z-10 mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-24">
          <Reveal>
            <div className="max-w-xl lg:max-w-[46%]">
              <Eyebrow>{hero.label}</Eyebrow>
              <h1
                className="mt-5 text-4xl font-bold leading-[1.1] text-brand-night sm:text-5xl"
                id="about-title"
              >
                {hero.titleLead}{' '}
                <span className="text-brand-orange">{hero.titleAccent}</span>
              </h1>
              <p className="mt-6 max-w-lg text-base leading-7 text-slate-600 sm:text-lg">
                {hero.subtitle}
              </p>
            </div>
          </Reveal>
        </div>

        <div className="relative h-60 sm:h-72 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-1/2">
          <img
            alt={hero.image.alt}
            className="h-full w-full object-cover object-[75%_50%] lg:object-right"
            src={hero.image.src}
          />
        </div>
      </div>

      {/* 2. Vision, mission, valeurs et carte écosystème */}
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-10">
          <div className="space-y-12 lg:col-span-2">
            <div className="grid gap-10 md:grid-cols-2 md:gap-0">
              {pillars.map((pillar, index) => (
                <Reveal key={pillar.label}>
                  <div
                    className={
                      index === 0
                        ? 'md:pr-10'
                        : 'md:border-l md:border-slate-200 md:pl-10'
                    }
                  >
                    <Eyebrow>{pillar.label}</Eyebrow>
                    <h2 className="mt-5 text-2xl font-bold leading-snug text-brand-night">
                      {pillar.title}
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {pillar.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <div>
                <Eyebrow>{values.title}</Eyebrow>
                <ul className="mt-6 grid gap-8 sm:grid-cols-2 xl:grid-cols-4 xl:gap-0">
                  {values.items.map((value, index) => {
                    const { Icon, circle } = valueStyles[index] ?? fallbackStyle

                    return (
                      <li
                        className="xl:border-l xl:border-slate-200 xl:px-5 xl:first:border-l-0 xl:first:pl-0"
                        key={value.title}
                      >
                        <span
                          className={`inline-flex h-16 w-16 items-center justify-center rounded-full text-white ${circle}`}
                        >
                          <Icon aria-hidden="true" size={28} strokeWidth={1.8} />
                        </span>
                        <h3 className="mt-4 text-lg font-bold text-brand-night">
                          {value.title}
                        </h3>
                        {value.description && (
                          <p className="mt-1 text-sm leading-6 text-slate-600">
                            {value.description}
                          </p>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal className="h-full">
            <article className="relative isolate flex h-full min-h-[24rem] flex-col justify-end overflow-hidden rounded-2xl bg-brand-night p-7 text-white sm:p-8">
              {ecosystemCard.image && (
                <img
                  alt=""
                  className="absolute inset-0 -z-20 h-full w-full object-cover"
                  src={ecosystemCard.image}
                />
              )}
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10"
                style={{
                  backgroundImage:
                    'linear-gradient(to top, rgba(4,36,95,0.95) 0%, rgba(4,36,95,0.7) 22%, rgba(4,36,95,0) 55%)',
                }}
              />
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-16 -z-10 h-56 w-56 rounded-full border border-white/10"
              />
              <div
                aria-hidden="true"
                className="absolute -right-6 -top-6 -z-10 h-36 w-36 rounded-full border border-brand-orange/30"
              />

              <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-white">
                <span
                  aria-hidden="true"
                  className="h-0.5 w-8 bg-brand-orange"
                />
                {ecosystemCard.label}
              </p>
              <h2 className="mt-4 text-2xl font-bold leading-snug">
                {ecosystemCard.title}
              </h2>
              <div className="mt-3 flex items-end justify-between gap-4">
                <p className="text-sm leading-6 text-slate-200">
                  {ecosystemCard.description}
                </p>
                <Link
                  aria-label={ecosystemCard.title}
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-orange text-brand-orange transition hover:bg-brand-orange hover:text-brand-night focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  to={ecosystemCard.href}
                >
                  <ArrowRight aria-hidden="true" size={18} />
                </Link>
              </div>
            </article>
          </Reveal>
        </div>

        {/* 3. Bandeau final */}
        <Reveal>
          <div className="relative mt-14 overflow-hidden rounded-2xl bg-brand-night">
            <div className="relative z-10 flex flex-col gap-5 px-6 py-7 sm:flex-row sm:items-center sm:gap-8 sm:px-10 sm:pr-40">
              <img
                alt={brand.logoAlt}
                className="h-12 w-auto shrink-0 self-start sm:self-auto"
                height={378}
                src={brand.logoLightSrc}
                width={900}
              />
              <span
                aria-hidden="true"
                className="hidden h-12 w-px shrink-0 bg-white/20 sm:block"
              />
              <p className="text-base font-bold leading-snug text-white sm:text-lg">
                {banner.title}
                <span className="block text-brand-orange">{banner.accent}</span>
              </p>
            </div>
            <div
              aria-hidden="true"
              className="absolute inset-y-0 right-0 w-28 sm:w-40"
              style={{
                backgroundColor: '#0C7829',
                clipPath: 'polygon(45% 100%, 100% 0, 100% 100%)',
              }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-y-0 right-0 w-28 sm:w-40"
              style={{
                backgroundColor: '#FF4F00',
                clipPath: 'polygon(20% 100%, 80% 0, 100% 0, 45% 100%)',
              }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default AboutSection