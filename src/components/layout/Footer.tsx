import {
  ArrowRight,
  ArrowUp,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteContent } from '../../content/siteContent'

function Footer() {
  const { footer, brand, header, contact, activities } = siteContent

  return (
    <footer className="relative isolate mt-20 border-t-4 border-brand-orange bg-brand-night text-white sm:mt-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-48 -z-10 h-[28rem] w-[28rem] translate-x-1/3 rounded-full border border-white/[0.07]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-8 top-72 -z-10 h-72 w-72 translate-x-1/3 rounded-full border border-brand-orange/20"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative -mt-16 overflow-hidden rounded-2xl bg-brand-orange-strong shadow-2xl shadow-black/20 sm:-mt-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-28 h-72 w-72 rounded-full border border-white/15"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-5 -top-16 h-52 w-52 rounded-full border border-white/15"
          />
          <div className="relative grid gap-8 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12 lg:py-11">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-100">
                {footer.calloutEyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                {footer.calloutTitle}
              </h2>
              <p className="mt-3 max-w-xl leading-7 text-orange-50">
                {footer.calloutDescription}
              </p>
            </div>
            <Link
              className="inline-flex min-h-14 items-center justify-between gap-6 rounded-lg bg-white px-5 py-3 font-bold text-brand-night shadow-lg shadow-black/10 transition hover:bg-orange-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              to={footer.calloutCta.href}
            >
              {footer.calloutCta.label}
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-night text-white">
                <ArrowRight aria-hidden="true" size={17} />
              </span>
            </Link>
          </div>
        </div>

        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_0.9fr_1.2fr] lg:gap-10 lg:py-16">
          <div>
            <Link
              aria-label={brand.name}
              className="inline-flex rounded bg-white p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-300"
              to={brand.homeHref}
            >
              <img
                alt={brand.logoAlt}
                className="h-10 w-auto"
                height={341}
                src={brand.logoSrc}
                width={1151}
              />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-300">
              {brand.tagline}
            </p>
            <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-2 text-xs font-medium text-slate-200">
              <MapPin
                aria-hidden="true"
                className="text-orange-300"
                size={15}
              />
              {contact.zoneOfIntervention}
            </p>
          </div>

          <nav aria-label={footer.servicesTitle}>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-orange-300">
              {footer.servicesTitle}
            </h2>
            <ul className="mt-6 space-y-4">
              {activities.items.map((activity) => (
                <li key={activity.title}>
                  <Link
                    className="group inline-flex items-start gap-2 text-sm leading-6 text-slate-300 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-300"
                    to="/services"
                  >
                    <ArrowRight
                      aria-hidden="true"
                      className="mt-1 shrink-0 text-brand-orange transition-transform group-hover:translate-x-1"
                      size={15}
                    />
                    {activity.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={footer.navigationTitle}>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-orange-300">
              {footer.navigationTitle}
            </h2>
            <ul className="mt-6 space-y-4">
              {header.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    className="text-sm text-slate-300 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-300"
                    to={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-orange-300">
              {footer.contactTitle}
            </h2>
            <div className="mt-6 space-y-3">
              <a
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3 text-sm text-slate-200 transition hover:border-brand-orange/60 hover:bg-white/[0.07] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300"
                href={contact.phone.href}
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-orange-300">
                  <Phone aria-hidden="true" size={17} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-slate-400">
                    {contact.phone.label}
                  </span>
                  <span className="mt-0.5 block font-semibold">
                    {contact.phone.value}
                  </span>
                </span>
              </a>
              <a
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3 text-sm text-slate-200 transition hover:border-brand-orange/60 hover:bg-white/[0.07] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300"
                href={contact.email.href}
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-orange-300">
                  <Mail aria-hidden="true" size={17} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-slate-400">
                    {contact.email.label}
                  </span>
                  <span className="mt-0.5 block break-all font-semibold">
                    {contact.email.value}
                  </span>
                </span>
              </a>
              <a
                className="inline-flex items-center gap-2 rounded px-1 py-2 text-sm font-semibold text-orange-300 transition hover:text-orange-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-300"
                href={contact.whatsapp.href}
                rel="noreferrer"
                target="_blank"
              >
                <MessageCircle aria-hidden="true" size={17} />
                {contact.whatsapp.label}
                <ArrowRight aria-hidden="true" size={15} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 border-t border-white/15 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-5 text-slate-400">{footer.copyright}</p>
          <div className="flex flex-wrap items-center gap-6">
            <details className="text-xs text-slate-300">
              <summary className="w-fit cursor-pointer rounded font-medium transition hover:text-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-300">
                {footer.legalSummary}
              </summary>
              <div className="absolute left-5 right-5 z-10 mt-3 max-w-xl rounded-xl border border-white/15 bg-slate-900 p-5 shadow-xl sm:left-auto sm:right-8 lg:right-[max(2rem,calc((100vw-80rem)/2))]">
                <h2 className="font-semibold text-white">
                  {footer.legalTitle}
                </h2>
                <dl className="mt-3 space-y-2">
                  {footer.legalFields.map((field) => (
                    <div key={field.label}>
                      <dt className="inline font-medium text-slate-200">
                        {field.label} :{' '}
                      </dt>
                      <dd className="inline text-slate-300">{field.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </details>
            <Link
              aria-label={footer.backToTop}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-slate-200 transition hover:border-orange-300 hover:text-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-300"
              to={brand.homeHref}
            >
              <ArrowUp aria-hidden="true" size={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
