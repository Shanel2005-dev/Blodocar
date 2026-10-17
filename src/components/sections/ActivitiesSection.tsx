import {
  ArrowUpRight,
  BadgeCheck,
  CarFront,
  ClipboardCheck,
  Handshake,
  Wrench,
} from 'lucide-react'
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
        <Reveal>
          <SectionHeading
            description={activities.introduction}
            id="activities-title"
            label={activities.label}
            title={activities.title}
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {activities.items.map((activity, index) => {
            const Icon = activityIcons[index] ?? CarFront

            return (
              <Reveal className="h-full" key={activity.title}>
                <article className="group flex h-full min-h-64 flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-orange/40 hover:shadow-xl hover:shadow-brand-night/5 motion-reduce:transform-none sm:p-8">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-brand-night text-white transition-colors group-hover:bg-brand-orange-strong">
                    <Icon aria-hidden="true" size={26} strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-8 text-xl font-bold leading-snug text-brand-night">
                    {activity.title}
                  </h3>
                  <p className="mt-3 flex-1 leading-7 text-slate-600">
                    {activity.description}
                  </p>
                  {activity.points && (
                    <ul className="mt-5 space-y-2">
                      {activity.points.map((point) => (
                        <li
                          className="flex gap-2 text-sm leading-6 text-slate-600"
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
                  <ArrowUpRight
                    aria-hidden="true"
                    className="mt-6 text-brand-orange-strong"
                    size={20}
                  />
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
