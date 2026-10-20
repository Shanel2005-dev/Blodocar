import { useEffect } from 'react'
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import HomePage from './components/pages/HomePage'
import AboutSection from './components/sections/AboutSection'
import ActivitiesSection from './components/sections/ActivitiesSection'
import ContactSection from './components/sections/ContactSection'
import ObjectivesSection from './components/sections/ObjectivesSection'
import PlatformSection from './components/sections/PlatformSection'
import TeamSection from './components/sections/TeamSection'
import { siteContent } from './content/siteContent'

const pageMetadata: Record<string, { title: string; description: string }> = {
  '/a-propos': {
    title: 'À propos de BlodoCar',
    description: siteContent.about.introduction,
  },
  '/services': {
    title: 'Nos solutions automobiles',
    description: siteContent.activities.introduction,
  },
  '/plateforme': {
    title: 'La plateforme BlodoCar',
    description: siteContent.platform.description,
  },
  '/objectifs': {
    title: 'Nos objectifs',
    description: siteContent.objectives.introduction,
  },
  '/equipe': {
    title: 'Notre équipe',
    description: siteContent.team.title,
  },
  '/contact': {
    title: 'Contacter BlodoCar',
    description: `Contacter BlodoCar à ${siteContent.contact.zoneOfIntervention}.`,
  },
}

function PageMetadata() {
  const { metadata } = siteContent
  const { pathname } = useLocation()

  useEffect(() => {
    const page = pageMetadata[pathname]
    document.title = page ? `${page.title} | BlodoCar` : metadata.title

    const description = document.head.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    )
    const openGraphTitle = document.head.querySelector<HTMLMetaElement>(
      'meta[property="og:title"]',
    )
    const openGraphDescription = document.head.querySelector<HTMLMetaElement>(
      'meta[property="og:description"]',
    )

    if (!description || !openGraphTitle || !openGraphDescription) {
      throw new Error('Les métadonnées SEO requises sont absentes du document.')
    }

    description.content = page?.description ?? metadata.description
    openGraphTitle.content = document.title
    openGraphDescription.content =
      page?.description ?? metadata.openGraphDescription
  }, [metadata, pathname])

  return null
}

function NotFoundPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-32 text-center sm:px-8">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-blue">
        Page introuvable
      </p>
      <h1 className="mt-4 text-3xl font-bold text-brand-night">
        Cette page n’existe pas.
      </h1>
      <Link
        className="mt-7 inline-flex font-semibold text-brand-blue underline underline-offset-4"
        to="/"
      >
        Retour à l’accueil
      </Link>
    </section>
  )
}

function PageScrollReset() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

function AppContent() {
  return (
    <div className="min-h-screen bg-white text-brand-night">
      <PageMetadata />
      <PageScrollReset />
      <Header />
      <main className="pt-20" id="main-content" tabIndex={-1}>
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route
            element={
              <>
                <h1 className="sr-only">{siteContent.about.title}</h1>
                <AboutSection />
              </>
            }
            path="/a-propos"
          />
          <Route
            element={
              <>
                <h1 className="sr-only">{siteContent.activities.title}</h1>
                <ActivitiesSection />
              </>
            }
            path="/services"
          />
          <Route
            element={
              <>
                <h1 className="sr-only">{siteContent.platform.title}</h1>
                <PlatformSection />
              </>
            }
            path="/plateforme"
          />
          <Route
            element={
              <>
                <h1 className="sr-only">{siteContent.objectives.title}</h1>
                <ObjectivesSection />
              </>
            }
            path="/objectifs"
          />
          <Route
            element={
              <>
                <h1 className="sr-only">{siteContent.team.title}</h1>
                <TeamSection />
              </>
            }
            path="/equipe"
          />
          <Route
            element={
              <>
                <h1 className="sr-only">{siteContent.contact.title}</h1>
                <ContactSection />
              </>
            }
            path="/contact"
          />
          <Route element={<NotFoundPage />} path="*" />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
