import { Eye, HeartHandshake, Target } from 'lucide-react'
import {
  isContentPlaceholder,
  siteContent,
} from '../../content/siteContent'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

function AboutSection() {
  const { about } = siteContent

  return (
    <section
      aria-labelledby="about-title"
      className="scroll-mt-20 bg-white px-5 py-20 sm:px-8 sm:py-28"
      id="about"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            description={about.introduction}
            id="about-title"
            label={about.label}
            title={about.title}
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {[about.mission, about.vision]
            .filter((item) => !isContentPlaceholder(item.text))
            .map((item) => {
              const Icon = item.title === about.mission.title ? Target : Eye

              return (
                <Reveal className="h-full" key={item.title}>
                  <article className="h-full rounded-2xl border border-slate-200 bg-slate-50 p-7 sm:p-9">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-night text-white">
                      <Icon aria-hidden="true" size={23} />
                    </span>
                    <h3 className="mt-6 text-xl font-bold text-brand-night">
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                  </article>
                </Reveal>
              )
            })}
          <Reveal>
            <article className="h-full rounded-2xl bg-brand-night p-7 text-white sm:p-9">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-orange-300">
                <HeartHandshake aria-hidden="true" size={23} />
              </span>
              <h3 className="mt-6 text-xl font-bold">{about.values.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {about.values.items.map((value) => (
                  <li
                    className="w-full rounded-xl border border-white/20 px-4 py-3"
                    key={value.title}
                  >
                    <h4 className="font-semibold text-white">{value.title}</h4>
                    <p className="mt-1 text-sm leading-6 text-slate-200">
                      {value.description}
                    </p>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
