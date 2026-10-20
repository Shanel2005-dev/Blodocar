import { ArrowUpRight, BadgeCheck, CarFront, Wrench } from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteContent } from '../../content/siteContent'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const applicationIcons = [CarFront, Wrench, BadgeCheck]

function PlatformSection() {
  const { platform } = siteContent

  return (
    <section
      aria-labelledby="platform-title"
      className="relative isolate scroll-mt-20 overflow-hidden bg-brand-night px-5 py-20 sm:px-8 sm:py-28"
      id="platform"
    >
      <div
        aria-hidden="true"
        className="absolute -right-40 -top-40 -z-10 h-[34rem] w-[34rem] rounded-full border-[1px] border-white/10 sm:-right-20"
      />
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 -z-10 h-[26rem] w-[26rem] rounded-full border border-brand-orange/30"
      />
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-6xl text-center">
          <Reveal>
            <SectionHeading
              description={platform.description}
              id="platform-title"
              inverted
              label={platform.label}
              title={platform.title}
              wide
            />
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {platform.applications.map((application, index) => {
            const Icon = applicationIcons[index] ?? BadgeCheck

            return (
              <Reveal className="h-full" key={application.name}>
                <article className="h-full min-h-64 rounded-xl border border-white/15 bg-white/[0.06] p-6 text-white transition-colors hover:border-brand-orange/60 sm:p-7">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-orange text-brand-night">
                      <Icon aria-hidden="true" size={23} />
                    </span>
                    <span className="text-sm font-bold text-white/45">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-7 text-xl font-bold">{application.name}</h3>
                  <p className="mt-3 text-sm font-semibold leading-6 text-brand-orange">
                    {application.audience}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {application.description}
                  </p>
                </article>
              </Reveal>
            )
          })}
        </div>

        <div className="mt-6 grid gap-6 rounded-xl border border-white/15 bg-white/[0.04] p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase text-brand-orange">
              B-Score · note sur 100
            </p>
            <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-200 sm:text-base sm:leading-7">
              {platform.scoreSummary}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:max-w-sm lg:justify-end">
            {platform.links.map((link, index) => {
              const isPrimary = index === 0
              const className = isPrimary
                ? 'inline-flex min-h-11 items-center gap-2 rounded-lg bg-brand-orange px-4 py-2 text-sm font-bold text-brand-night transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange'
                : 'inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-brand-orange hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange'
              const content = (
                <>
                  {link.label}
                  <ArrowUpRight aria-hidden="true" size={16} />
                </>
              )

              return link.href.startsWith('/') ? (
                <Link className={className} key={link.label} to={link.href}>
                  {content}
                </Link>
              ) : (
                <a
                  className={className}
                  href={link.href}
                  key={link.label}
                  rel="noreferrer"
                  target="_blank"
                >
                  {content}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlatformSection
