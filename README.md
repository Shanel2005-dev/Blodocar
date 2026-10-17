# BlodoCar

Site vitrine responsive de BlodoCar, startup béninoise active dans la vente et
l’achat de véhicules d’occasion, les services automobiles et le transit.

## Prérequis

- Node.js 20.19+ ou 22.12+
- npm

## Installation et développement

```bash
npm install
npm run dev
```

Vite affiche l’adresse locale du site dans le terminal.

## Vérifications et build

```bash
npm run lint
npm run format:check
npm run build
npm run preview
```

Le build de production est généré dans `dist/`.

## Modifier le contenu

Les textes, libellés accessibles, coordonnées et liens du site sont centralisés
dans [`src/content/siteContent.ts`](./src/content/siteContent.ts). Les valeurs
inconnues sont signalées par `[À compléter]` ; remplacez-les avec les
informations validées par l’équipe. Les chiffres clés ne s’affichent que lorsque
la liste `objectives.metrics` contient des données.

Les couleurs principales et la police se règlent dans
[`tailwind.config.ts`](./tailwind.config.ts). La description SEO, le titre et les
balises de partage se trouvent dans [`index.html`](./index.html). Remplacez
également `public/og-image.png` et `public/favicon.svg` par les visuels officiels
lorsqu’ils seront disponibles.

## Déploiement sur Vercel

1. Importer le dépôt dans Vercel.
2. Choisir **Vite** comme framework ; conserver `npm run build` comme commande
   de build et `dist` comme répertoire de sortie.
3. Définir le domaine validé par l’équipe, puis le reporter dans
   `public/robots.txt` et `public/sitemap.xml`.
4. Déployer et vérifier les liens, les coordonnées et l’aperçu de partage.

Le site est statique et ne requiert pas de serveur. Les liens de contact
utilisent directement e-mail et WhatsApp ; aucun formulaire ne transmet de
données à un service distant.
