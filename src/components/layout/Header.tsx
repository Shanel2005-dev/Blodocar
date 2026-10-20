import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { siteContent } from '../../content/siteContent'
import Button from '../ui/Button'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { header, brand } = siteContent

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-3 focus:font-semibold focus:text-brand-night focus:shadow-lg"
        href="#main-content"
        onClick={closeMenu}
      >
        {header.skipLink}
      </a>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white shadow-[0_4px_24px_rgba(15,23,42,0.04)]">
        <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link
            aria-label={brand.name}
            className="inline-flex shrink-0 items-center rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-orange"
            to={brand.homeHref}
            onClick={closeMenu}
          >
            <img
              alt={brand.logoAlt}
              className="h-11 w-auto"
              height={127}
              src={brand.logoSrc}
              width={259}
            />
          </Link>

          <button
            aria-controls="primary-navigation"
            aria-expanded={isMenuOpen}
            aria-label={
              isMenuOpen ? header.menuCloseLabel : header.menuOpenLabel
            }
            className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-brand-night bg-brand-night text-white shadow-md transition hover:border-brand-blue hover:bg-brand-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange lg:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            type="button"
          >
            {isMenuOpen ? (
              <X aria-hidden="true" size={26} strokeWidth={2.5} />
            ) : (
              <Menu aria-hidden="true" size={26} strokeWidth={2.5} />
            )}
          </button>

          <nav
            aria-label={header.navigationLabel}
            className={`${isMenuOpen ? 'flex' : 'hidden'} absolute inset-x-0 top-full flex-col gap-1 border-b border-slate-200 bg-white px-5 pb-5 pt-3 shadow-lg shadow-slate-900/5 sm:px-8 lg:static lg:flex lg:flex-row lg:items-center lg:gap-1 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}
            id="primary-navigation"
          >
            {header.nav.map((item) => (
              <NavLink
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange lg:rounded-lg lg:px-3 lg:py-2 ${
                    isActive
                      ? 'bg-brand-orange/10 text-brand-blue'
                      : 'text-slate-700 hover:bg-brand-orange/10 hover:text-brand-blue'
                  }`
                }
                end
                to={item.href}
                key={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            ))}
            <Button
              className="mt-2 min-h-12 rounded-xl px-5 py-3 text-sm shadow-sm lg:ml-3 lg:mt-0 lg:rounded-full"
              to={header.contactHref}
              variant="primary"
              onClick={closeMenu}
            >
              {header.contactCta}
            </Button>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
