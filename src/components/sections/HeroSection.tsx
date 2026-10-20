import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { siteContent } from '../../content/siteContent'
import Button from '../ui/Button'

function HeroSection() {
  const { hero } = siteContent

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[calc(100svh-4rem)] scroll-mt-24 items-center overflow-hidden bg-brand-night pt-16"
      id="home"
    >
      <img
        alt={hero.image.alt}
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center lg:object-top"
        height={132}
        src={hero.image.src}
        width={236}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-brand-night/75 via-brand-night/55 to-brand-night/25"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_78%_45%,rgba(255,79,0,0.2),transparent_42%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 -z-10 h-96 w-96 rounded-full border border-white/10 sm:-right-24 sm:h-[34rem] sm:w-[34rem]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 top-32 -z-10 h-72 w-72 rounded-full border border-brand-orange/30 sm:-right-12 sm:h-[26rem] sm:w-[26rem]"
      />
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold tracking-wide text-slate-100">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-brand-orange"
            />
            {hero.eyebrow}
          </p>
          <h1
            className="mx-auto max-w-6xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-7xl"
            id="hero-title"
          >
            {hero.title}
          </h1>
          <div
            aria-hidden="true"
            className="mx-auto mt-7 h-1 w-20 rounded-full bg-brand-orange"
          />
          <p className="mx-auto mt-6 max-w-6xl text-lg leading-8 text-slate-300 sm:text-xl">
            {hero.subtitle}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button className="px-6 py-3" to={hero.primaryCta.href}>
              {hero.primaryCta.label}
              <ArrowDown aria-hidden="true" size={18} />
            </Button>
            <a
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/30 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-white/60 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
              href={hero.secondaryCta.href}
              rel="noreferrer"
              target="_blank"
            >
              {hero.secondaryCta.label}
              <ArrowUpRight aria-hidden="true" size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
