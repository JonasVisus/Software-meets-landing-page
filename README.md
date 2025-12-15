# Software Landing Page

Eine moderne SaaS Software Landing Page Website, entwickelt mit Next.js 14, TypeScript, Tailwind CSS und DaisyUI.

## 🚀 Features

- **Moderne Tech-Stack**: Next.js 14 mit App Router, TypeScript, Tailwind CSS, DaisyUI
- **Responsives Design**: Optimiert für alle Bildschirmgrößen
- **SEO-optimiert**: Meta-Tags, strukturierte URLs, semantisches HTML
- **Wiederverwendbare Komponenten**: Modulare SaaS-Landing-Page-Sektionen
- **Dynamische Routes**: Automatische Generierung von Case-Unterseiten
- **Performance**: Statische Generierung für schnelle Ladezeiten
- **DaisyUI Komponenten**: Optimierte UI-Komponenten mit weniger Code

## 📁 Projektstruktur

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Homepage (Hub)
│   ├── layout.tsx         # Root Layout
│   ├── kontakt/           # Kontaktseite
│   └── cases/[slug]/      # Dynamische Case-Seiten
├── components/
│   ├── ui/               # Basis UI-Komponenten
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── SectionHeader.tsx
│   ├── sections/         # Landing-Page Sektionen
│   │   ├── HeroSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── BenefitsSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── FAQSection.tsx
│   │   └── CTASection.tsx
│   └── layout/           # Layout-Komponenten
│       ├── Header.tsx
│       └── Footer.tsx
├── data/
│   └── cases.ts          # Case-Daten (Linde, Walbusch, etc.)
└── types/
    └── index.ts          # TypeScript Definitionen
```

## 🛠️ Installation

```bash
# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev

# Production Build
npm run build

# Production Server starten
npm start
```

## 📝 Neuen Case hinzufügen

1. Öffne `src/data/cases.ts`
2. Füge einen neuen Case nach dem bestehenden Schema hinzu:

```typescript
export const neuerCase: CaseData = {
  slug: 'neuer-case-slug',
  name: 'Produktname',
  company: 'Firmenname',
  // ... weitere Felder nach CaseData-Schema
};
```

3. Füge den Case zu `allCases` und `hubProducts` hinzu
4. Die Seite ist automatisch unter `/cases/neuer-case-slug` verfügbar

## 🎨 Anpassung

### Farben & DaisyUI Theme
Das Custom Theme "softwaresolutions" ist in `tailwind.config.js` definiert:
- `primary`: #0284c7 (Blau)
- `secondary`: #64748b (Grau)
- `accent`: #38bdf8 (Hellblau)
- `neutral`: #0f172a (Dunkel)

DaisyUI Komponenten die verwendet werden:
- `btn`, `btn-primary`, `btn-secondary`, `btn-outline`
- `card`, `card-body`, `card-title`
- `input`, `select`, `textarea`, `form-control`
- `collapse`, `join` (für FAQ-Akkordeons)
- `navbar`, `menu`, `dropdown`

### Komponenten
Alle Sektionen sind modular aufgebaut und können einfach angepasst werden.

## 📦 Deployment

Das Projekt ist optimiert für:
- **Vercel** (empfohlen für Next.js)
- **Netlify**
- **Docker**

## 🔍 SEO Hinweise

- Keyword-Recherche vor Benennung neuer Cases durchführen
- Meta-Daten in `generateMetadata()` pro Case definieren
- Semantische HTML-Elemente verwenden
- Alt-Texte für alle Bilder hinzufügen

## 📄 Lizenz

Proprietär - Alle Rechte vorbehalten
