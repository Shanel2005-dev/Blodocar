import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Compass,
  ShieldCheck,
  Smartphone,
  Users,
  Wrench,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteContent } from '../../content/siteContent'
import Reveal from '../ui/Reveal'

const themes = {
  orange: {
    background: 'linear-gradient(135deg, #FFF3EA 0%, #FFFFFF 100%)',
    circle: 'bg-brand-orange',
    accent: 'text-brand-orange',
    Icon: Compass,
  },
  green: {
    background: 'linear-gradient(135deg, #EAF7EE 0%, #FFFFFF 100%)',
    circle: 'bg-[#0C7829]',
    accent: 'text-[#0C7829]',
    Icon: Wrench,
  },
  blue: {
    background: 'linear-gradient(135deg, #E9F0FB 0%, #FFFFFF 100%)',
    circle: 'bg-brand-night',
    accent: 'text-brand-blue',
    Icon: ShieldCheck,
  },
}

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-brand-night">
      <span aria-hidden="true" className="h-0.5 w-8 bg-brand-orange" />
      {children}
    </p>
  )
}

function ActionLink({
  className,
  href,
  label,
  withArrow,
}: {
  className: string
  href: string
  label: string
  withArrow?: 'right' | 'up'
}) {
  const Arrow = withArrow === 'up' ? ArrowUpRight : ArrowRight
  const content = (
    <>
      {label}
      {withArrow && <Arrow aria-hidden="true" size={17} />}
    </>
  )

  return href.startsWith('/') ? (
    <Link className={className} to={href}>
      {content}
    </Link>
  ) : (
    <a className={className} href={href} rel="noreferrer" target="_blank">
      {content}
    </a>
  )
}

function PlatformSection() {
  const { platform } = siteContent
  const { hero, intro, cards, banner } = platform

  return (
    <section
      aria-labelledby="platform-title"
      className="bg-white"
      id="platform"
    >
      {/* 1. Bandeau d'en-tête */}
      <div className="relative isolate overflow-hidden bg-white">
        <div className="relative z-10 mx-auto flex max-w-7xl px-5 py-14 sm:px-8 lg:min-h-[26rem] lg:items-center lg:py-16">
          <Reveal>
            <div className="max-w-xl lg:max-w-[42%]">
              <Eyebrow>{hero.label}</Eyebrow>
              <h1
                className="mt-5 text-4xl font-bold leading-[1.1] text-brand-night sm:text-5xl"
                id="platform-title"
              >
                {hero.titleLead}{' '}
                <span className="text-brand-orange">{hero.titleAccent}</span>
              </h1>
              <p className="mt-6 max-w-md text-base leading-7 text-slate-600 sm:text-lg">
                {hero.subtitle}
              </p>
            </div>
          </Reveal>
        </div>

        <div className="relative h-56 sm:h-72 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[62%]">
          <img
            alt={hero.image.alt}
            className="h-full w-full object-cover object-[70%_50%] lg:object-right"
            src={hero.image.src}
          />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-16 pt-12 sm:px-8 sm:pb-20">
        {/* 2. Titre de section */}
        <Reveal>
          <div className="max-w-2xl">
            <Eyebrow>{intro.label}</Eyebrow>
            <h2 className="mt-4 text-2xl font-bold leading-snug text-brand-night sm:text-3xl">
              {intro.title}
            </h2>
            <p className="mt-3 leading-7 text-slate-600">{intro.description}</p>
          </div>
        </Reveal>

        {/* 3. Les trois applications */}
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {cards.map((card) => {
            const theme = themes[card.theme]
            const Icon = theme.Icon

            return (
              <Reveal className="h-full" key={card.name}>
                <article
                  className="grid h-full grid-cols-[1fr_auto] gap-4 rounded-2xl border border-slate-200/70 p-6"
                  style={{ backgroundImage: theme.background }}
                >
                  <div className="flex flex-col">
                    <div className="flex items-start gap-3">
                      <span
                        className={`inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-white ${theme.circle}`}
                      >
                        <Icon aria-hidden="true" size={26} strokeWidth={1.8} />
                      </span>
                      <div>
                        <h3 className="text-2xl font-bold text-brand-night">
                          {card.name}
                        </h3>
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {card.audience}
                    </p>
                    <ul className="mt-5 flex-1 space-y-3">
                      {card.points.map((point) => (
                        <li
                          className="flex items-start gap-3 text-sm font-medium text-slate-700"
                          key={point}
                        >
                          <Check
                            aria-hidden="true"
                            className={`mt-0.5 shrink-0 ${theme.accent}`}
                            size={18}
                            strokeWidth={2.5}
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <ActionLink
                      className={`mt-6 inline-flex w-fit items-center gap-2 text-sm font-bold ${theme.accent} hover:underline`}
                      href={card.action.href}
                      label={card.action.label}
                      withArrow="right"
                    />
                  </div>
                  <img
                    alt={card.phoneAlt}
                    className="mt-14 h-auto w-24 self-center drop-shadow-xl xl:w-28"
                    loading="lazy"
                    src={card.phoneImage}
                  />
                </article>
              </Reveal>
            )
          })}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-slate-500">
          {platform.scoreSummary}
        </p>

        {/* 4. Bandeau final */}
        <Reveal>
          <div className="relative mt-10 overflow-hidden rounded-2xl bg-brand-night">
            <div className="relative z-10 flex flex-col gap-6 px-6 py-7 sm:px-10 lg:flex-row lg:items-center lg:gap-8 lg:pr-36">
              <div className="flex flex-1 flex-col gap-4 sm:flex-row sm:items-center">
                <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
                  <Smartphone aria-hidden="true" size={26} strokeWidth={1.6} />
                </span>
                <div>
                  <p className="text-lg font-bold text-white">
                    {banner.scoreTitle}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-300">
                    {banner.scoreText}
                  </p>
                </div>
                <ActionLink
                  className="inline-flex min-h-11 w-fit items-center gap-2 rounded-lg border border-white/30 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-brand-night sm:ml-auto"
                  href={banner.scoreCta.href}
                  label={banner.scoreCta.label}
                  withArrow="up"
                />
              </div>

              <span
                aria-hidden="true"
                className="hidden h-14 w-px shrink-0 bg-white/20 lg:block"
              />

              <div className="flex flex-1 items-center gap-4">
                <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center text-white">
                  <Users aria-hidden="true" size={38} strokeWidth={1.4} />
                </span>
                <div className="flex-1">
                  <p className="font-bold text-white">{banner.partnerTitle}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-300">
                    {banner.partnerText}
                  </p>
                </div>
                <Link
                  aria-label={banner.partnerCta.label}
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/40 text-white transition hover:bg-white hover:text-brand-night focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  to={banner.partnerCta.href}
                >
                  <ArrowRight aria-hidden="true" size={19} />
                </Link>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="absolute inset-y-0 right-0 w-24 sm:w-32"
              style={{
                backgroundColor: '#0C7829',
                clipPath: 'polygon(45% 100%, 100% 0, 100% 100%)',
              }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-y-0 right-0 w-24 sm:w-32"
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

export default PlatformSection