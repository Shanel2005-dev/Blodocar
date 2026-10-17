export type SiteLink = {
  label: string
  href: string
}

export const isContentPlaceholder = (value: string) =>
  value.includes('[À compléter]')

export type SiteContent = {
  metadata: {
    title: string
    description: string
    openGraphTitle: string
    openGraphDescription: string
    openGraphImage: string
    openGraphImageAlt: string
    locale: string
  }
  brand: {
    name: string
    tagline: string
    homeHref: string
    logoSrc: string
    logoAlt: string
  }
  header: {
    skipLink: string
    navigationLabel: string
    menuOpenLabel: string
    menuCloseLabel: string
    contactCta: string
    contactHref: string
    nav: SiteLink[]
  }
  hero: {
    eyebrow: string
    prototypeNotice: string
    title: string
    subtitle: string
    image: {
      src: string
      alt: string
    }
    primaryCta: SiteLink
    secondaryCta: SiteLink
  }
  about: {
    label: string
    title: string
    introduction: string
    mission: { title: string; text: string }
    vision: { title: string; text: string }
    values: {
      title: string
      items: { title: string; description: string }[]
    }
  }
  activities: {
    label: string
    title: string
    introduction: string
    items: { title: string; description: string; points?: string[] }[]
  }
  platform: {
    label: string
    title: string
    description: string
    pendingLabel: string
    links: SiteLink[]
  }
  objectives: {
    label: string
    title: string
    introduction: string
    items: string[]
    metrics: { label: string; value: string }[]
  }
  team: {
    label: string
    title: string
    introduction: string
    emptyState: string
    members: {
      name: string
      role: string
      bio: string
      validated: boolean
      initials: string
      photo: string
      linkedin: SiteLink
    }[]
  }
  contact: {
    label: string
    title: string
    introduction: string
    pendingLabel: string
    email: SiteLink & { value: string }
    phone: SiteLink & { value: string }
    whatsapp: SiteLink & { value: string }
    zoneLabel: string
    zoneOfIntervention: string
    addressLabel: string
    address: string
    hoursLabel: string
    hours: string
    socialLinks: SiteLink[]
    socialEmptyState: string
  }
  footer: {
    calloutEyebrow: string
    calloutTitle: string
    calloutDescription: string
    calloutCta: SiteLink
    servicesTitle: string
    navigationTitle: string
    contactTitle: string
    backToTop: string
    legalSummary: string
    legalTitle: string
    legalFields: { label: string; value: string }[]
    copyright: string
  }
}

export const siteContent: SiteContent = {
  metadata: {
    title: "BlodoCar | Diagnostic de véhicules d'occasion à Cotonou",
    description:
      "BlodoCar vous accompagne pour acheter ou vendre un véhicule d'occasion à Cotonou : diagnostic par un réparateur certifié, B-Score et rapport détaillé, même à distance.",
    openGraphTitle: "BlodoCar | Diagnostic de véhicules d'occasion à Cotonou",
    openGraphDescription:
      "BlodoCar vous accompagne pour acheter ou vendre un véhicule d'occasion à Cotonou : diagnostic par un réparateur certifié, B-Score et rapport détaillé, même à distance.",
    openGraphImage: '/og-image.png',
    openGraphImageAlt: 'Visuel provisoire de BlodoCar',
    locale: 'fr_BJ',
  },
  brand: {
    name: 'BlodoCar',
    tagline: 'Startup béninoise du secteur automobile',
    homeHref: '/',
    logoSrc: '/blodocar-logo.png',
    logoAlt: 'BlodoCar',
  },
  header: {
    skipLink: 'Aller au contenu',
    navigationLabel: 'Navigation principale',
    menuOpenLabel: 'Ouvrir le menu',
    menuCloseLabel: 'Fermer le menu',
    contactCta: 'Nous contacter',
    contactHref: '/contact',
    nav: [
      { label: 'Accueil', href: '/' },
      { label: 'À propos', href: '/a-propos' },
      { label: 'Nos domaines', href: '/services' },
      { label: 'Plateforme et applications', href: '/plateforme' },
      { label: 'Nos objectifs', href: '/objectifs' },
      { label: 'Notre équipe', href: '/equipe' },
    ],
  },
  hero: {
    eyebrow: 'Startup béninoise · Automobile',
    prototypeNotice: 'Prototype : contenus provisoires',
    title: "Achetez votre véhicule d'occasion en toute confiance",
    subtitle:
      'BlodoCar est vos yeux sur place à Cotonou : un réparateur certifié diagnostique le véhicule et vous recevez le rapport à distance.',
    image: {
      src: '/hero-image.jpg',
      alt: 'Deux personnes interviennent sur le moteur d’un véhicule.',
    },
    primaryCta: { label: 'Découvrir nos domaines', href: '/services' },
    secondaryCta: { label: 'Accéder à la plateforme', href: '/plateforme' },
  },
  about: {
    label: 'Notre entreprise',
    title: 'Qui nous sommes',
    introduction:
      "BlodoCar est une startup béninoise qui développe des solutions de confiance pour l'achat, la vente et le suivi des véhicules d'occasion au Bénin et en Afrique de l'Ouest.",
    mission: {
      title: 'Notre mission',
      text: "Rendre le marché du véhicule d'occasion plus transparent grâce à des inspections certifiées, un score de santé lisible et des outils accessibles aux acheteurs, vendeurs et professionnels.",
    },
    vision: { title: 'Notre vision', text: '[À compléter]' },
    values: {
      title: 'Nos valeurs',
      items: [
        {
          title: 'Confiance',
          description:
            "Une information claire sur l'état réel du véhicule avant toute décision.",
        },
        {
          title: 'Sérénité',
          description: 'Acheter ou vendre sans stress, même à distance.',
        },
        {
          title: 'Proximité',
          description:
            'Une présence sur place, à Cotonou, pour vous représenter.',
        },
      ],
    },
  },
  activities: {
    label: 'Notre accompagnement',
    title: 'Nos domaines d’activité',
    introduction:
      "Du contrôle certifié à la mise en relation avec des professionnels, BlodoCar apporte des repères concrets à chaque étape de l'achat ou de la vente.",
    items: [
      {
        title: 'B-Score : le passeport santé du véhicule',
        description:
          "Chaque véhicule inspecté reçoit un score de santé sur 100. Scannez son QR code ou recherchez-le par VIN ou immatriculation pour consulter gratuitement son score et ses alertes principales.",
        points: [
          'Rapport d’expertise détaillé : 2 000 FCFA',
          '36 points contrôlés, photos et état des principaux organes',
          'Vérifications administratives, douanières et Interpol',
        ],
      },
      {
        title: 'Inspection d’urgence et diagnostic mobile',
        description:
          "Vous avez repéré une voiture ? Un mécanicien expert BlodoCar peut se déplacer auprès du vendeur pour l'inspecter avant votre achat.",
        points: [
          'Contrôle de 36 points et essai routier',
          'Diagnostic électronique avec valise OBD-II',
          'Rapport avec photos et attribution du B-Score',
        ],
      },
      {
        title: 'Auto-diagnostic acheteur gratuit',
        description:
          "Un parcours mobile guide l'acheteur pendant sa visite, même sans connaissances mécaniques, pour repérer les signes qui méritent attention.",
        points: [
          '27 questions réparties en 8 étapes',
          'Contrôles visuels, bruits, fumée, voyants et freinage',
          'Score indicatif et alertes de sécurité immédiates',
        ],
      },
      {
        title: 'Marketplace certifiée et espace concessionnaires',
        description:
          "Trouvez des véhicules d'occasion avec leur B-Score affiché, ou valorisez votre parc en partageant des informations vérifiées avec vos clients.",
        points: [
          'Véhicules présentés avec leur score de santé',
          'Affiches commerciales avec QR code du B-Score',
          'Un rapport digital pour éclairer la décision d’achat',
        ],
      },
      {
        title: 'Réseau B-Angel',
        description:
          'B-Angel met en réseau des garages et mécaniciens partenaires pour réaliser les inspections et accompagner les automobilistes.',
        points: [
          'Outils dédiés aux mécaniciens et ateliers partenaires',
          'Digitalisation des devis de réparation',
          'Rémunération pour chaque expertise réalisée',
        ],
      },
    ],
  },
  platform: {
    label: 'Plateforme et applications',
    title: 'Retrouvez BlodoCar en ligne',
    description:
      'BlodoCar dispose déjà de sa plateforme officielle et de ses applications mobiles. Ce site présente l’entreprise : pour utiliser nos services, rendez-vous sur la plateforme.',
    pendingLabel: '[Lien à compléter]',
    links: [
      {
        label: 'Espace concessionnaires et vendeurs',
        href: 'https://bscore-flax.vercel.app/pro',
      },
      { label: 'Google Play', href: '[À compléter]' },
      { label: 'App Store', href: '[À compléter]' },
    ],
  },
  objectives: {
    label: 'Notre ambition',
    title: 'Nos objectifs',
    introduction:
      "Ce que BlodoCar veut apporter au marché du véhicule d'occasion.",
    items: [
      "Offrir un diagnostic clair de l'état d'un véhicule avant chaque achat",
      'Permettre d’acheter en confiance, même à distance',
      'Donner aux vendeurs un rapport digital qui rassure leurs acheteurs',
    ],
    metrics: [],
  },
  team: {
    label: 'Notre équipe',
    title: 'Les personnes derrière BlodoCar',
    introduction: '[À compléter]',
    emptyState: '[À compléter]',
    members: [
      {
        name: 'Zoulkarnaïni Yinde Boukari',
        role: 'CEO et co-fondateur',
        bio: 'Porte la vision de BlodoCar : stratégie, partenariats et développement de l’entreprise.',
        validated: false,
        initials: 'ZB',
        photo: '',
        linkedin: { label: 'LinkedIn', href: '[À compléter]' },
      },
      {
        name: 'Bilel Houngan',
        role: 'CTO et co-fondateur',
        bio: 'Conçoit et sécurise la plateforme technologique de BlodoCar et dirige l’équipe technique.',
        validated: false,
        initials: 'BH',
        photo: '',
        linkedin: { label: 'LinkedIn', href: '[À compléter]' },
      },
      {
        name: 'Ezéchiel Bara',
        role: 'Co-COO et co-fondateur',
        bio: 'Veille à la qualité technique du réseau de réparateurs et au bon déroulement des opérations sur le terrain.',
        validated: false,
        initials: 'EB',
        photo: '',
        linkedin: { label: 'LinkedIn', href: '[À compléter]' },
      },
      {
        name: 'Juste Kocou',
        role: 'Co-COO et co-fondateur',
        bio: 'Assure l’outillage, le support technique sur le terrain et la communication de BlodoCar.',
        validated: false,
        initials: 'JK',
        photo: '',
        linkedin: { label: 'LinkedIn', href: '[À compléter]' },
      },
      {
        name: 'Chanel Akouehou',
        role: 'Développeur',
        bio: 'Participe au développement et à la maintenance des applications et de la plateforme.',
        validated: false,
        initials: 'CA',
        photo: '',
        linkedin: { label: 'LinkedIn', href: '[À compléter]' },
      },
    ],
  },
  contact: {
    label: 'Parlons ensemble',
    title: 'Nous contacter',
    introduction: '[À compléter]',
    pendingLabel: '[À compléter]',
    email: {
      label: 'E-mail',
      value: 'blodo.info@gmail.com',
      href: 'mailto:blodo.info@gmail.com',
    },
    phone: {
      label: 'Téléphone',
      value: '+229 01 62 83 88 88',
      href: 'tel:+2290162838888',
    },
    // À confirmer : le numéro est-il aussi le WhatsApp ?
    whatsapp: {
      label: 'WhatsApp',
      value: '+229 01 62 83 88 88',
      href: 'https://wa.me/2290162838888',
    },
    zoneLabel: 'Zone d’intervention',
    zoneOfIntervention: 'Cotonou, Bénin',
    addressLabel: 'Adresse',
    address: '[À compléter]',
    hoursLabel: 'Horaires',
    hours: '[À compléter]',
    socialLinks: [
      { label: 'Facebook', href: '[À compléter]' },
      { label: 'Instagram', href: '[À compléter]' },
      {
        label: 'Publication BlodoCar sur LinkedIn',
        href: 'https://www.linkedin.com/posts/blodocar-bscore-automobile-share-7516477099176607744-AeCr/',
      },
      { label: 'TikTok', href: '[À compléter]' },
      { label: 'YouTube', href: '[À compléter]' },
    ],
    socialEmptyState: 'Réseaux sociaux officiels : [À compléter]',
  },
  footer: {
    calloutEyebrow: 'Un achat en vue ?',
    calloutTitle: 'Décidez avec les bonnes informations.',
    calloutDescription:
      'Faites-vous accompagner pour le diagnostic d’un véhicule à Cotonou, même à distance.',
    calloutCta: { label: 'Découvrir nos services', href: '/services' },
    servicesTitle: 'Nos services',
    navigationTitle: 'Explorer',
    contactTitle: 'Nous joindre',
    backToTop: 'Retour en haut de page',
    legalSummary: 'Mentions légales',
    legalTitle: 'Informations légales',
    legalFields: [
      { label: 'Éditeur', value: '[À compléter]' },
      { label: 'Adresse', value: '[À compléter]' },
      { label: 'E-mail', value: 'blodo.info@gmail.com' },
      { label: 'Responsable de publication', value: '[À compléter]' },
      { label: 'Hébergement', value: '[À compléter]' },
    ],
    copyright: '© BlodoCar. Tous droits réservés.',
  },
}
