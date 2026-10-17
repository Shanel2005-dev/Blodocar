import {
  ArrowRight,
  ArrowUpRight,
  CarFront,
  ClipboardCheck,
  FileText,
  Handshake,
  ShieldCheck,
  Wrench,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteContent } from '../../content/siteContent'
import HeroSection from '../sections/HeroSection'
import Button from '../ui/Button'
import SectionHeading from '../ui/SectionHeading'

const activityIcons = [ShieldCheck, Wrench, ClipboardCheck, CarFront, Handshake]

function HomePage() {
  const { activities, about, contact } = siteContent

  return (
    <>
      <HeroSection />

      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {[
            { icon: Wrench, title: 'Diagnostic professionnel' },
            { icon: ShieldCheck, title: 'B-Score basé sur le contrôle' },
            { icon: FileText, title: 'Rapport détaillé du véhicule' },
          ].map(({ icon: Icon, title }) => (
            <div
              className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6"
              key={title}
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-night text-orange-300">
                <Icon aria-hidden="true" size={23} />
              </span>
              <p className="font-semibold leading-6 text-brand-night">{title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="overflow-hidden bg-brand-night px-5 py-20 text-white sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-300">
              La plateforme BlodoCar
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Les informations du diagnostic, même à distance
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
              Un réparateur certifié diagnostique le véhicule à Cotonou. Vous
              recevez les résultats du contrôle et un rapport détaillé pour
              prendre votre décision, où que vous soyez.
            </p>
            <Link
              className="mt-8 inline-flex items-center gap-2 font-semibold text-orange-300 transition hover:text-orange-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-300"
              to="/plateforme"
            >
              Découvrir la plateforme
              <ArrowUpRight aria-hidden="true" size={18} />
            </Link>
          </div>

          <div
            aria-label="Les éléments communiqués après le contrôle du véhicule"
            className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/20 sm:p-8"
            role="group"
          >
            <div className="flex items-center gap-3 border-b border-white/10 pb-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-orange-strong text-white">
                <ClipboardCheck aria-hidden="true" size={22} />
              </span>
              <div>
                <p className="font-bold text-white">Résultats du contrôle</p>
                <p className="mt-1 text-sm text-slate-300">
                  Diagnostic réalisé par un réparateur certifié
                </p>
              </div>
            </div>
            <ul className="mt-2 divide-y divide-white/10">
              {[
                {
                  icon: ShieldCheck,
                  title: 'B-Score',
                  detail: 'Basé sur les résultats du contrôle',
                },
                {
                  icon: FileText,
                  title: 'Rapport détaillé',
                  detail: 'Les informations du véhicule réunies dans un rapport',
                },
                {
                  icon: ArrowUpRight,
                  title: 'Accès à distance',
                  detail: 'Les informations utiles pour prendre votre décision',
                },
              ].map(({ icon: Icon, title, detail }) => (
                <li className="flex items-center gap-4 py-5" key={title}>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-orange-300">
                    <Icon aria-hidden="true" size={19} />
                  </span>
                  <span>
                    <span className="block font-semibold text-white">
                      {title}
                    </span>
                    <span className="mt-1 block text-sm leading-6 text-slate-300">
                      {detail}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            description={activities.introduction}
            id="home-services-title"
            label="Un accompagnement concret"
            title="Acheter, vendre ou rechercher un véhicule"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {activities.items.map((activity, index) => {
              const Icon = activityIcons[index] ?? CarFront

              return (
                <article
                  className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8"
                  key={activity.title}
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-brand-orange-strong">
                    <Icon aria-hidden="true" size={27} strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-6 text-xl font-bold leading-snug text-brand-night">
                    {activity.title}
                  </h3>
                  <p className="mt-3 flex-1 leading-7 text-slate-600">
                    {activity.description}
                  </p>
                  {activity.points && (
                    <ul className="mt-5 space-y-2 border-t border-slate-100 pt-5">
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
                </article>
              )
            })}
          </div>
          <Link
            className="mt-8 inline-flex items-center gap-2 font-semibold text-brand-orange-strong transition hover:text-brand-orange-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-orange-strong"
            to="/services"
          >
            Voir le détail des services
            <ArrowRight aria-hidden="true" size={18} />
          </Link>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-orange-strong">
              {about.label}
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-brand-night sm:text-4xl">
              {about.title}
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              {about.introduction}
            </p>
            <Link
              className="mt-7 inline-flex items-center gap-2 font-semibold text-brand-orange-strong transition hover:text-brand-orange-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-orange-strong"
              to="/a-propos"
            >
              En savoir plus sur BlodoCar
              <ArrowUpRight aria-hidden="true" size={18} />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {about.values.items.map((value) => (
              <article
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                key={value.title}
              >
                <h3 className="text-lg font-bold text-brand-night">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-night px-5 py-16 text-white sm:px-8 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-300">
              {contact.zoneOfIntervention}
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              Vous avez trouvé un véhicule ?
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              {siteContent.hero.subtitle}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              className="rounded-xl"
              to="/contact"
            >
              Contacter BlodoCar
              <ArrowRight aria-hidden="true" size={18} />
            </Button>
            <a
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/25 px-6 py-3 font-semibold text-white transition hover:border-white/60 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300"
              href={contact.phone.href}
            >
              {contact.phone.value}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
