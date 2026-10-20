import { ArrowUpRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteContent } from '../../content/siteContent'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

function ObjectivesSection() {
  const { objectives } = siteContent

  return (
    <section
      aria-labelledby="objectives-title"
      className="scroll-mt-20 bg-white px-5 py-20 sm:px-8 sm:py-28"
      id="objectives"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <Reveal>
            <SectionHeading
              description={objectives.introduction}
              id="objectives-title"
              label={objectives.label}
              title={objectives.title}
              wide
            />
          </Reveal>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start">
          <ul className="grid gap-3 sm:grid-cols-2">
            {objectives.items.map((item) => (
              <Reveal key={item}>
                <li className="flex min-h-20 items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 p-5 text-brand-night">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-orange/10 text-brand-blue">
                    <Check aria-hidden="true" size={18} />
                  </span>
                  <span className="font-medium leading-6">{item}</span>
                </li>
              </Reveal>
            ))}
          </ul>

          {objectives.metrics.length > 0 && (
            <Reveal>
              <dl className="grid gap-3 sm:grid-cols-2 lg:min-w-72 lg:grid-cols-1">
                {objectives.metrics.map((metric) => (
                  <div
                    className="rounded-xl bg-brand-night px-6 py-5 text-white"
                    key={metric.label}
                  >
                    <dt className="text-sm text-slate-300">{metric.label}</dt>
                    <dd className="mt-2 text-3xl font-bold tracking-tight">
                      {metric.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          )}
        </div>
        <p className="mt-8 max-w-3xl border-l-2 border-brand-orange pl-5 text-lg font-semibold leading-8 text-brand-night">
          {objectives.ambition}
        </p>
        <Link
          className="mt-8 inline-flex items-center gap-2 font-semibold text-brand-blue underline decoration-brand-orange/40 underline-offset-4 transition hover:text-brand-night focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue"
          to="/contact"
        >
          {siteContent.header.contactCta}
          <ArrowUpRight aria-hidden="true" size={18} />
        </Link>
      </div>
    </section>
  )
}

export default ObjectivesSection
