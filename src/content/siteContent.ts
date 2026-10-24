const logoHeader = new URL(
  '../assets/image/BlodoCar_logo_transparent.png',
  import.meta.url,
).href
const logoFooter = new URL(
  '../assets/image/BlodoCar_logo_uniforme_blanc.png',
  import.meta.url,
).href
const termsDocument = new URL(
  "../assets/image/Conditions Générales d'Utilisation – BlodoCar.docx.pdf",
  import.meta.url,
).href
const privacyDocument = new URL(
  '../assets/image/Politique de Confidentialité – BlodoCar.docx.pdf',
  import.meta.url,
).href

export type SiteLink = {
  label: string
  href: string
}

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
    logoLightSrc: string
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
    hero: {
      label: string
      titleLead: string
      titleAccent: string
      subtitle: string
      image: { src: string; alt: string }
    }
    pillars: { label: string; title: string; text: string }[]
    ecosystemCard: {
      label: string
      title: string
      description: string
      image: string
      href: string
    }
    banner: { title: string; accent: string }
    label: string
    title: string
    introduction: string
    mission: { title: string; text: string }
    vision: { title: string; text: string }
    ecosystem: {
      title: string
      items: { title: string; description: string }[]
    }
    values: {
      title: string
      items: { title: string; description: string }[]
    }
  }
  journey: {
    title: string
    description: string
    stages: { title: string; description: string }[]
  }
  activities: {
    label: string
    title: string
    introduction: string
    items: {
      title: string
      description: string
      points?: string[]
      action: SiteLink
    }[]
  }
  platform: {
    label: string
    title: string
    description: string
    applications: {
      name: string
      audience: string
      description: string
    }[]
    scoreSummary: string
    links: SiteLink[]
  }
  objectives: {
    label: string
    title: string
    introduction: string
    items: string[]
    ambition: string
    metrics: { label: string; value: string }[]
  }
  team: {
    label: string
    title: string
    introduction: string
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
    email: SiteLink & { value: string }
    phone: SiteLink & { value: string }
    zoneLabel: string
    zoneOfIntervention: string
    socialLinks: SiteLink[]
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
    legalNotice: string
    legalFields: { label: string; value: string }[]
    legalDocuments: SiteLink[]
    copyright: string
  }
}

export const siteContent: SiteContent = {
  metadata: {
    title: 'BlodoCar | La confiance automobile en Afrique de l’Ouest',
    description:
      'De l’achat à la revente, BlodoCar vous aide à mieux connaître, acheter, entretenir, réparer et valoriser votre véhicule.',
    openGraphTitle: 'BlodoCar | La confiance automobile en Afrique de l’Ouest',
    openGraphDescription:
      'De l’achat à la revente, BlodoCar vous aide à mieux connaître, acheter, entretenir, réparer et valoriser votre véhicule.',
    openGraphImage: '/og-image.png',
    openGraphImageAlt: 'Visuel BlodoCar en bleu nuit et orange',
    locale: 'fr_BJ',
  },
  brand: {
    name: 'BlodoCar',
    tagline: 'Roulez en toute sérénité.',
    homeHref: '/',
    logoSrc: logoHeader,
    logoLightSrc: logoFooter,
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
    eyebrow: 'Née au Bénin · Pensée pour la sous-région',
    title: 'Roulez en toute sérénité.',
    subtitle:
      'BlodoCar vous accompagne à chaque étape de la vie de votre véhicule. Née au Bénin, la solution a vocation à accompagner à terme les automobilistes dans toute la sous-région ouest-africaine, dont le Togo.',
    image: {
      src: '/hero-image.jpg',
      alt: 'Deux personnes interviennent sur le moteur d’un véhicule.',
    },
    primaryCta: { label: 'Découvrir BlodoCar', href: '/a-propos' },
    secondaryCta: {
      label: 'Essayer le B-Score',
      href: 'https://bscore-flax.vercel.app/',
    },
  },
  about: {
    hero: {
      label: 'À propos',
      titleLead: 'Plus qu’une plateforme,',
      titleAccent: 'une vision pour l’Afrique de l’Ouest.',
      subtitle:
        'BlodoCar est né d’une ambition simple : rendre chaque étape de la vie de votre véhicule plus transparente, plus simple et plus sûre.',
      image: {
        src: '/about-image.jpeg',
        alt: 'Un mécanicien BlodoCar tient une clé dans son atelier.',
      },
    },
    pillars: [
      {
        label: 'Notre vision',
        title:
          'Construire une infrastructure de confiance automobile en Afrique de l’Ouest.',
        text: 'Faire de BlodoCar la référence en matière de transparence, de fiabilité et d’accessibilité pour tous les acteurs de l’écosystème automobile.',
      },
      {
        label: 'Notre mission',
        title:
          'Simplifier la vie des automobilistes et valoriser toute la chaîne de valeur.',
        text: 'Grâce à des solutions innovantes et fiables, nous connectons les particuliers et les professionnels autour d’un même objectif : une mobilité plus sûre et plus accessible.',
      },
    ],
    ecosystemCard: {
      label: 'Notre écosystème',
      title: 'Des solutions complètes pour vos véhicules.',
      description:
        'B-Score, B-Garage, historique véhicule et BlodoCar Market.',
      image: '/cars-card.jpg',
      href: '/plateforme',
    },
    banner: {
      title: 'Ensemble, construisons une mobilité',
      accent: 'plus transparente et plus sûre en Afrique de l’Ouest.',
    },
    label: 'Notre entreprise',
    title: 'Réinventer la confiance automobile en Afrique de l’Ouest.',
    introduction:
      'Le marché automobile évolue, mais l’accès à une information fiable reste un défi. BlodoCar est né au Bénin avec une ambition régionale : rendre chaque étape de la vie d’un véhicule plus transparente, plus simple et plus sûre. Notre point de départ est le Bénin; à long terme, nous voulons déployer progressivement nos solutions dans l’ensemble de la sous-région ouest-africaine, dont le Togo.',
    mission: {
      title: 'Notre mission',
      text: 'Construire l’infrastructure de confiance automobile de référence en Afrique de l’Ouest.',
    },
    vision: {
      title: 'Notre ambition',
      text: 'Faire de la confiance un standard de l’automobile en Afrique de l’Ouest.',
    },
    ecosystem: {
      title: 'Notre écosystème',
      items: [
        {
          title: 'B-Score',
          description: 'pour mieux connaître et évaluer un véhicule.',
        },
        {
          title: 'B-Garage',
          description:
            'pour trouver et valoriser des réparateurs de confiance.',
        },
        {
          title: 'Historique véhicule',
          description: 'pour garder une trace de la vie du véhicule.',
        },
        {
          title: 'BlodoCar Market',
          description: 'pour acheter et vendre avec davantage de transparence.',
        },
      ],
    },
    values: {
      title: 'Nos valeurs',
      items: [
        {
          title: 'Transparence',
          description: 'Des informations claires et vérifiées.',
        },
        {
          title: 'Fiabilité',
          description: 'Des solutions sur lesquelles vous pouvez compter.',
        },
        {
          title: 'Mérite',
          description: 'La qualité de service avant tout.',
        },
        {
          title: 'Proximité',
          description: 'Toujours plus près de vous.',
        },
      ],
    },
  },
  journey: {
    title: 'Votre véhicule. Tout au long de son parcours.',
    description:
      'De l’intention d’achat à la revente, BlodoCar vous aide à mieux connaître, acheter, entretenir, réparer et valoriser votre véhicule.',
    stages: [
      {
        title: 'Acheter',
        description:
          'Faites-vous accompagner pour trouver et évaluer votre prochain véhicule en toute confiance.',
      },
      {
        title: 'Vérifier',
        description:
          'Obtenez un diagnostic et un B-Score pour prendre une décision mieux informée.',
      },
      {
        title: 'Entretenir & réparer',
        description:
          'Trouvez des professionnels près de chez vous et gardez une trace des interventions.',
      },
      {
        title: 'Suivre',
        description: 'Construisez l’historique numérique de votre véhicule.',
      },
      {
        title: 'Revendre',
        description:
          'Valorisez votre véhicule grâce à son historique et ses informations vérifiées.',
      },
    ],
  },
  activities: {
    label: 'Nos services',
    title: 'Tout ce dont votre véhicule a besoin, au même endroit.',
    introduction:
      'De l’achat à la revente, BlodoCar vous accompagne à chaque étape du cycle de vie de votre véhicule.',
    items: [
      {
        title: 'Acheter en confiance',
        description:
          'Faites-vous accompagner et orienter pour trouver votre prochain véhicule et prendre une décision mieux informée.',
        action: {
          label: 'Trouver un véhicule',
          href: 'https://bscore-flax.vercel.app/marketplace',
        },
        points: [
          'Auto-diagnostic gratuit pour vous orienter dans votre choix',
          'Véhicules avec B-Score',
          'Diagnostic certifié pour confirmer votre choix',
          'BlodoCar Market',
        ],
      },
      {
        title: 'Entretenir & réparer',
        description:
          'Prenez soin de votre véhicule avec des professionnels de confiance issus du réseau BlodoCar.',
        action: { label: 'Contacter BlodoCar', href: '/contact' },
        points: [
          'Réparateurs certifiés BlodoCar, formés et évalués',
          'Un réseau de proximité, près de chez vous',
          'Devis transparents',
          'Suivi des interventions et carnet numérique',
        ],
      },
      {
        title: 'Gérer & valoriser',
        description:
          'Gardez le contrôle de votre véhicule et préparez mieux sa revente.',
        action: { label: 'Découvrir nos solutions', href: '/plateforme' },
        points: [
          'Historique du véhicule',
          'Suivi du kilométrage',
          'Gestion de flotte',
          'Valorisation du véhicule',
        ],
      },
      {
        title: 'Pour les professionnels',
        description: 'Des outils pour accompagner votre activité automobile.',
        action: {
          label: 'Découvrir nos solutions professionnelles',
          href: 'https://bscore-flax.vercel.app/pro',
        },
        points: [
          'Concessionnaires, garages, entreprises, assureurs et banques',
          'B-Score, BlodoCar Market et B-Garage',
          'BLODO Fleet et données véhicule',
        ],
      },
    ],
  },
  platform: {
    label: 'Plateforme et applications',
    title: 'Un outil pour chaque acteur automobile',
    description:
      'Trois applications accompagnent les propriétaires, les réparateurs et les acheteurs à chaque étape de la vie d’un véhicule.',
    applications: [
      {
        name: 'BlodoCar',
        audience: 'Propriétaires, concessionnaires et entreprises à flottes',
        description:
          'Suivez vos véhicules, demandez des devis et trouvez un réparateur.',
      },
      {
        name: 'B-Garage',
        audience: 'Réparateurs BlodoCar et garages partenaires',
        description:
          'Recevez des missions, réalisez des diagnostics et faites évoluer votre niveau.',
      },
      {
        name: 'B-Score (web)',
        audience: 'Acheteurs, concessionnaires et partenaires',
        description:
          'Consultez les scores, commandez un diagnostic et accédez à BlodoCar Market.',
      },
    ],
    scoreSummary:
      'Le B-Score est une note sur 100 fondée sur le diagnostic technique, l’historique des réparations, les vérifications administratives (douane, vol, rappels constructeur) et l’historique du véhicule lorsqu’il est disponible.',
    links: [
      { label: 'Accéder à B-Score', href: 'https://bscore-flax.vercel.app/' },
      { label: 'Devenir réparateur partenaire', href: '/contact' },
      {
        label: 'Espace concessionnaires et vendeurs',
        href: 'https://bscore-flax.vercel.app/pro',
      },
    ],
  },
  objectives: {
    label: 'Nos objectifs',
    title: 'Construire un marché automobile plus transparent et plus fiable.',
    introduction: 'Les priorités de BlodoCar pour faire évoluer le marché.',
    items: [
      'Restaurer la confiance : rendre l’achat et la vente de véhicules d’occasion plus transparents.',
      'Réduire les mauvaises surprises : mieux informer pour limiter les défauts cachés et les dépenses imprévues.',
      'Valoriser les bons professionnels : former, évaluer et valoriser les réparateurs qui font la différence.',
      'Digitaliser l’histoire du véhicule : créer un historique fiable et accessible tout au long de sa vie.',
      'Devenir une référence régionale : partir du Bénin et étendre progressivement BlodoCar à l’ensemble de la sous-région ouest-africaine, dont le Togo et les pays de l’UEMOA.',
    ],
    ambition:
      'À long terme, partir du Bénin et déployer progressivement BlodoCar dans toute la sous-région ouest-africaine, le Togo faisant partie des marchés concernés, afin de faire de la confiance un standard de l’automobile.',
    metrics: [],
  },
  team: {
    label: 'Notre équipe',
    title: 'Les personnes derrière BlodoCar',
    introduction:
      'Une équipe mêlant expertise technique, terrain automobile et gestion de projet, basée à Cotonou.',
    members: [
      {
        name: 'Zoulkarnaïni Yinde Boukari',
        role: 'CEO & co-fondateur',
        bio: '',
        validated: false,
        initials: 'ZB',
        photo: '',
        linkedin: { label: 'LinkedIn', href: '' },
      },
      {
        name: 'Bilel Houngan',
        role: 'CTO & co-fondateur, développeur full stack',
        bio: '',
        validated: false,
        initials: 'BH',
        photo: '',
        linkedin: { label: 'LinkedIn', href: '' },
      },
      {
        name: 'Ezéchiel Bara',
        role: 'Co-fondateur, Co-COO, maintenance automobile',
        bio: '',
        validated: false,
        initials: 'EB',
        photo: '',
        linkedin: { label: 'LinkedIn', href: '' },
      },
      {
        name: 'Juste Kocou',
        role: 'Co-fondateur, Co-COO, génie électrique et informatique',
        bio: '',
        validated: false,
        initials: 'JK',
        photo: '',
        linkedin: { label: 'LinkedIn', href: '' },
      },
      {
        name: 'Chanel Akouehou',
        role: 'Développeur',
        bio: '',
        validated: false,
        initials: 'CA',
        photo: '',
        linkedin: { label: 'LinkedIn', href: '' },
      },
    ],
  },
  contact: {
    label: 'Parlons ensemble',
    title: 'Nous contacter',
    introduction: '',
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
    zoneLabel: 'Zone d’intervention',
    zoneOfIntervention: 'Cotonou, Bénin',
    socialLinks: [
      {
        label: 'Publication BlodoCar sur LinkedIn',
        href: 'https://www.linkedin.com/posts/blodocar-bscore-automobile-share-7516477099176607744-AeCr/',
      },
    ],
  },
  footer: {
    calloutEyebrow: 'Un achat en vue ?',
    calloutTitle: 'Décidez avec les bonnes informations.',
    calloutDescription:
      'Née au Bénin, BlodoCar développe des solutions pour accompagner les automobilistes dans toute la sous-région.',
    calloutCta: { label: 'Découvrir nos services', href: '/services' },
    servicesTitle: 'Nos services',
    navigationTitle: 'Explorer',
    contactTitle: 'Nous joindre',
    backToTop: 'Retour en haut de page',
    legalSummary: 'Informations juridiques',
    legalTitle: 'Informations disponibles',
    legalNotice:
      'Les deux documents fournis sont des projets d’octobre 2026 à faire valider par un avocat béninois. Ils ne précisent pas la forme juridique, l’adresse postale complète, le responsable de publication ni l’hébergeur.',
    legalFields: [
      { label: 'Organisation', value: 'BlodoCar' },
      { label: 'Localisation', value: 'Cotonou, Bénin' },
      { label: 'E-mail', value: 'blodo.info@gmail.com' },
      { label: 'Téléphone', value: '+229 01 62 83 88 88' },
    ],
    legalDocuments: [
      {
        label: 'Conditions générales d’utilisation (projet)',
        href: termsDocument,
      },
      { label: 'Politique de confidentialité (projet)', href: privacyDocument },
    ],
    copyright: '© BlodoCar. Tous droits réservés.',
  },
}