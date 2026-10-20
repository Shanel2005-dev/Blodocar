import {
  ArrowUpRight,
  BadgeCheck,
  CarFront,
  ClipboardCheck,
  Handshake,
  Wrench,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteContent } from '../../content/siteContent'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const activityIcons = [BadgeCheck, Wrench, ClipboardCheck, CarFront, Handshake]

function ActivitiesSection() {
  const { activities } = siteContent

  return (
    <section
      aria-labelledby="activities-title"
      className="scroll-mt-20 bg-slate-50 px-5 py-20 sm:px-8 sm:py-28"
      id="activities"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <Reveal>
            <SectionHeading
              description={activities.introduction}
              id="activities-title"
              label={activities.label}
              title={activities.title}
              wide
            />
          </Reveal>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {activities.items.map((activity, index) => {
            const Icon = activityIcons[index] ?? CarFront

            return (
              <Reveal className="h-full" key={activity.title}>
                <article className="group flex h-full min-h-56 flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-orange/40 hover:shadow-xl hover:shadow-brand-night/5 motion-reduce:transform-none sm:p-6">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-night text-white transition-colors group-hover:bg-brand-orange group-hover:text-brand-night">
                    <Icon aria-hidden="true" size={23} strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-5 text-lg font-bold leading-snug text-brand-night">
                    {activity.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
                    {activity.description}
                  </p>
                  {activity.points && (
                    <ul className="mt-4 space-y-1.5">
                      {activity.points.map((point) => (
                        <li
                          className="flex gap-2 text-sm leading-5 text-slate-600"
                          key={point}
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {activity.action.href.startsWith('/') ? (
                    <Link
                      className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand-blue underline decoration-brand-orange/40 underline-offset-4 hover:text-brand-night"
                      to={activity.action.href}
                    >
                      {activity.action.label}
                      <ArrowUpRight aria-hidden="true" size={16} />
                    </Link>
                  ) : (
                    <a
                      className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand-blue underline decoration-brand-orange/40 underline-offset-4 hover:text-brand-night"
                      href={activity.action.href}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {activity.action.label}
                      <ArrowUpRight aria-hidden="true" size={16} />
                    </a>
                  )}
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ActivitiesSection
