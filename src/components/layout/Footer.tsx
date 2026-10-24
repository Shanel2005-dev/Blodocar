import {
  ArrowRight,
  ArrowUpRight,
  ArrowUp,
  FileText,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteContent } from '../../content/siteContent'

function Footer() {
  const { footer, brand, header, contact, activities } = siteContent

  return (
    <footer className="relative isolate mt-12 overflow-x-clip border-t-4 border-brand-orange bg-brand-night text-white sm:mt-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-48 -z-10 h-[28rem] w-[28rem] translate-x-1/3 rounded-full border border-white/[0.07]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-8 top-72 -z-10 h-72 w-72 translate-x-1/3 rounded-full border border-brand-orange/20"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-6 border-b border-white/15 py-8 sm:py-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div className="max-w-3xl">
            <p className="flex items-center gap-3 text-sm font-bold uppercase text-brand-orange">
              <span aria-hidden="true" className="h-px w-9 bg-brand-orange" />
              {footer.calloutEyebrow}
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl">
              {footer.calloutTitle}
            </h2>
            <p className="mt-3 max-w-xl leading-7 text-slate-300">
              {footer.calloutDescription}
            </p>
          </div>
          <Link
            className="inline-flex min-h-14 items-center justify-between gap-5 rounded-lg bg-[#D9500F] px-5 py-3 font-bold text-white transition hover:bg-white hover:text-brand-night focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-orange"
            to={footer.calloutCta.href}
          >
            {footer.calloutCta.label}
            <ArrowRight aria-hidden="true" size={19} />
          </Link>
        </div>

        <div className="grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_0.9fr_1.2fr] lg:gap-8 lg:py-12">
          <div>
            <Link
              aria-label={brand.name}
              className="inline-flex rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-300"
              to={brand.homeHref}
            >
              <img
                alt={brand.logoAlt}
                className="h-14 w-auto"
                height={378}
                src={brand.logoLightSrc}
                width={900}
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-7 text-slate-300">
              {brand.tagline}
            </p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-2 text-xs font-medium text-slate-200">
              <MapPin
                aria-hidden="true"
                className="text-orange-300"
                size={15}
              />
              {contact.zoneOfIntervention}
            </p>
          </div>

          <nav aria-label={footer.servicesTitle}>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
              {footer.servicesTitle}
            </h2>
            <ul className="mt-4 space-y-3">
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
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
              {footer.navigationTitle}
            </h2>
            <ul className="mt-4 space-y-3">
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
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
              {footer.contactTitle}
            </h2>
            <div className="mt-4 space-y-2">
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
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/15 py-4 sm:flex-row sm:items-center sm:justify-between">
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
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {footer.legalNotice}
                </p>
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
                <ul className="mt-4 space-y-3 border-t border-white/10 pt-4">
                  {footer.legalDocuments.map((document) => (
                    <li key={document.href}>
                      <a
                        className="inline-flex items-center gap-2 font-medium text-orange-300 underline decoration-orange-300/50 underline-offset-4 hover:text-white"
                        href={document.href}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <FileText aria-hidden="true" size={16} />
                        {document.label}
                        <ArrowUpRight aria-hidden="true" size={15} />
                      </a>
                    </li>
                  ))}
                </ul>
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