import {
  ArrowUpRight,
  AtSign,
  Link as LinkIcon,
  MapPin,
  Phone,
} from 'lucide-react'
import { siteContent } from '../../content/siteContent'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

function ContactSection() {
  const { contact } = siteContent
  const linkedInLink = contact.socialLinks.find(
    (link) => link.label === 'Publication BlodoCar sur LinkedIn',
  )
  return (
    <section
      aria-labelledby="contact-title"
      className="scroll-mt-20 bg-slate-50 px-5 py-20 sm:px-8 sm:py-28"
      id="contact"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            description={contact.introduction || undefined}
            id="contact-title"
            label={contact.label}
            title={contact.title}
          />
        </Reveal>

        <Reveal>
          <div className="mt-12 grid overflow-hidden rounded-3xl bg-brand-night shadow-xl shadow-slate-900/10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative isolate flex flex-col items-start justify-center overflow-hidden p-8 text-white sm:p-12 lg:p-14">
              <div
                aria-hidden="true"
                className="absolute -right-20 -top-24 -z-10 h-72 w-72 rounded-full border-[44px] border-white/5"
              />
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-orange">
                {contact.zoneOfIntervention}
              </p>
              <h3 className="mt-5 max-w-lg text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Un véhicule en vue ?
              </h3>
              <p className="mt-4 max-w-lg leading-7 text-slate-300">
                {siteContent.activities.introduction}
              </p>
              <a
                className="mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-brand-orange px-5 py-3 font-bold text-brand-night transition hover:bg-brand-blue hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                href={contact.phone.href}
              >
                <Phone aria-hidden="true" size={19} />
                Appeler BlodoCar
                <ArrowUpRight aria-hidden="true" size={18} />
              </a>
            </div>

            <div className="bg-white p-8 sm:p-12 lg:p-14">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-blue">
                Coordonnées
              </p>
              <div className="mt-7 divide-y divide-slate-200">
                <a
                  className="group flex items-center gap-4 py-5 first:pt-0"
                  href={contact.phone.href}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-100 text-brand-night transition group-hover:bg-brand-orange/10 group-hover:text-brand-blue">
                    <Phone aria-hidden="true" size={19} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm text-slate-500">
                      {contact.phone.label}
                    </span>
                    <span className="mt-1 block font-semibold text-brand-night">
                      {contact.phone.value}
                    </span>
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="text-slate-400 transition group-hover:text-brand-blue"
                    size={18}
                  />
                </a>

                <a
                  className="group flex items-center gap-4 py-5"
                  href={contact.email.href}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-100 text-brand-night transition group-hover:bg-brand-orange/10 group-hover:text-brand-blue">
                    <AtSign aria-hidden="true" size={19} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm text-slate-500">
                      {contact.email.label}
                    </span>
                    <span className="mt-1 block break-words font-semibold text-brand-night">
                      {contact.email.value}
                    </span>
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="text-slate-400 transition group-hover:text-brand-blue"
                    size={18}
                  />
                </a>

                <div className="flex items-center gap-4 py-5 pb-0">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-100 text-brand-night">
                    <MapPin aria-hidden="true" size={19} />
                  </span>
                  <span>
                    <span className="block text-sm text-slate-500">
                      {contact.zoneLabel}
                    </span>
                    <span className="mt-1 block font-semibold text-brand-night">
                      {contact.zoneOfIntervention}
                    </span>
                  </span>
                </div>
                {linkedInLink && (
                  <a
                    className="group flex items-center gap-4 py-5 pb-0"
                    href={linkedInLink.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-100 text-brand-night transition group-hover:bg-brand-orange/10 group-hover:text-brand-blue">
                      <LinkIcon aria-hidden="true" size={19} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm text-slate-500">
                        LinkedIn
                      </span>
                      <span className="mt-1 block font-semibold text-brand-night">
                        Voir la publication de BlodoCar
                      </span>
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="text-slate-400 transition group-hover:text-brand-blue"
                      size={18}
                    />
                  </a>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default ContactSection
