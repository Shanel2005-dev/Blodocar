import { ArrowUpRight, Download, Globe2 } from 'lucide-react'
import { siteContent } from '../../content/siteContent'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

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
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <SectionHeading
            description={platform.description}
            id="platform-title"
            inverted
            label={platform.label}
            title={platform.title}
          />
          <div className="mt-9 inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-slate-200">
            <Globe2
              aria-hidden="true"
              className="text-brand-orange"
              size={20}
            />
            <span>{siteContent.brand.name}</span>
          </div>
        </Reveal>
        <div>
          <div className="grid gap-4 sm:grid-cols-3">
            {platform.applications.map((application) => (
              <Reveal className="h-full" key={application.name}>
                <article className="h-full rounded-xl border border-white/15 bg-white/[0.06] p-5 text-white">
                  <h3 className="font-semibold">{application.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-orange-200">
                    {application.audience}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {application.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 border-l-2 border-orange-300 pl-4 text-sm leading-6 text-slate-200">
            {platform.scoreSummary}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {platform.links.map((link, index) => {
              const Icon = index === 0 ? Globe2 : Download
              const className =
                'inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-orange-300/70 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300'

              return (
                <a
                  className={className}
                  href={link.href}
                  key={link.label}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Icon
                    aria-hidden="true"
                    className="text-brand-orange"
                    size={18}
                  />
                  {link.label}
                  <ArrowUpRight aria-hidden="true" size={16} />
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
