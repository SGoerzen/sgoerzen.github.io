import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const LINKS = {
  github: 'https://github.com/SGoerzen',
  gitlab: 'https://gitlab.com/sgoerzen',
  linkedin: 'https://www.linkedin.com/in/sergej-goerzen/',
  mail: 'mailto:sergej@goerzen.consulting',
  //instagram: 'https://www.instagram.com/caj_ink/',
  //medium: 'https://ladvace.medium.com/',
  //discord: 'https://discordapp.com/users/163300027618295808',
}

// Global
export const SITE: Site = {
  TITLE: 'Astro Sphere',
  DESCRIPTION:
    'Willkommen auf meiner Webseite.',
  AUTHOR: 'Sergej Görzen',
}

export const IMPRESSUM = {
  TITLE: 'Impressum',
  DESCRIPTION: 'Anbieterkennzeichnung und rechtliche Hinweise.',
  NAME: 'Sergej Görzen',
  ADDRESS_LINE1: 'Hähner Weg 6',
  ADDRESS_LINE2: '51580 Reichshof',
  COUNTRY: 'Deutschland',
  EMAIL: 'sergej@goerzen.consulting',
  PHONE: '', // optional
  VAT_ID: '', // optional (wenn vorhanden)
  SMALL_BUSINESS: true, // §19 UStG (anpassen)
}

// Work Page
export const WORK: Page = {
  TITLE: 'Berufserfahrung',
  DESCRIPTION: 'Meine bisherige Berufserfahrung.',
}

export const PROJECTS: Page = {
  TITLE: 'Projekte',
  DESCRIPTION: 'Meine bisherigen Projekte.',
}

// Study Page
export const STUDIES = [
  {
    title: 'Dr. rer. nat. Informatik (Promotion)',
    institution: 'RWTH Aachen University',
    link: 'https://learntech.rwth-aachen.de',
    date: '2021 – vsl. Apr. 2026',
    details: [
      'Fokus: Learning Technologies, XR (AR/VR) und Learning Analytics',
      'Produktnahe Forschungssoftware, Frameworkdesign & Evaluation',
    ],
  },
  {
    title: 'M. Sc. Informatik',
    institution: 'RWTH Aachen University',
    link: 'https://www.rwth-aachen.de',
    date: '2017 – 2021',
    details: [
      'Schwerpunkte: XR/EdTech, Computergrafik, Software Engineering',
    ],
  },
  {
    title: 'B. Sc. Informatik',
    institution: 'TH Köln (Campus Gummersbach)',
    link: 'https://www.th-koeln.de',
    date: '2012 – 2017',
    details: [
      'Schwerpunkte: Software Engineering, Webentwicklung, Algorithmen',
    ],
  },
  {
    title: 'Staatl. gepr. Informationstechnischer Assistent (ITA) · Fachhochschulreife',
    institution: 'Berufskolleg Oberberg (Dieringhausen)',
    link: '',
    date: '2009 – 2012',
    details: [
      'Informatik-nahe Ausbildung mit Schwerpunkt Programmierung',
    ],
  },
]
export const EXPERIENCE = [
  {
    company: 'Freiberuflich',
    location: 'Remote',
    position: 'IT-Berater & Softwaresystem-Engineer',
    start: 'Apr 2024',
    link: 'https://goerzen.consulting',
    end: 'heute',
    tasks: [
      'XR-Softwareentwicklung (AR/VR/MR) und Produktintegration zwischen Unity/XR, Web, Mobile und Services',
      'CTO-nahe Verantwortung in ausgewählten Mandaten (Technikstrategie, Architektur, Qualitätsstandards, Roadmap-Priorisierung)',
      'End-to-End Delivery: Anforderungen, Konzeption, Implementierung und Übergabe inkl. Dokumentation/Enablement',
      'Hands-on Umsetzung in C#/.NET, Unity, Flutter sowie modernen Web-Stacks (TypeScript, Node.js, Vue/React/Angular)',
    ],
  },
  {
    company: 'RWTH Aachen University',
    location: 'Aachen',
    position: 'Wissenschaftlicher Mitarbeiter & Doktorand (Learning Technologies)',
    start: 'Apr 2021',
    link: 'https://learntech.rwth-aachen.de',
    end: 'heute',
    tasks: [
      'Forschung & Entwicklung in XR (AR/VR) und Learning Analytics; Aufbau produktnaher Software und Tooling',
      'Lehre über mehrere Semester: Vorlesungen, Übungen, Projektbegleitung, Seminare und Praktika',
      'Transfer: Studienkonzeption/-durchführung, Entwickler-Workshops sowie Betreuung von Abschlussarbeiten',
      'Teamleitung: Aufgabenplanung, Mentoring, Code Reviews und Qualitätssicherung',
    ],
  },
  {
    company: 'MINTANO UG (haftungsbeschränkt)',
    location: 'Düsseldorf',
    position: 'Lead Developer',
    start: 'Apr 2020',
    link: 'https://mintano.com/',
    end: 'Mär 2021',
    tasks: [
      'Technische Leitung in Kunden- und Produktprojekten: Planung, Koordination von Team/Freelancern und Qualitätssicherung bis zur Auslieferung',
      'Hands-on Umsetzung in Web-/Mobile-nahen Themen und Stabilisierung von Delivery-Prozessen',
      'Abstimmung mit Stakeholdern zu Scope, Prioritäten und Umsetzungsentscheidungen',
    ],
  },
  {
    company: 'MINTANO UG (haftungsbeschränkt)',
    location: 'Düsseldorf',
    position: 'Softwareentwickler',
    start: 'Sep 2017',
    link: 'https://mintano.com/',
    end: 'Mär 2020',
    tasks: [
      'Entwicklung interaktiver Web-Produkte und zugehöriger Services in internationalen Projektkonstellationen',
      'API-Design/-Implementierung (u. a. .NET Core/AWS) sowie Integration externer Plattform-Schnittstellen',
      'Mitentwicklung von Desktop-Tooling (Electron) und Mitarbeit an Architektur- und Umsetzungsentscheidungen',
    ],
  },
  {
    company: 'apofair (Online-Apotheke)',
    location: 'Nümbrecht',
    position: 'Interner SEO- & IT-Berater (projektbasiert)',
    start: 'Nov 2016',
    link: '',
    end: 'Mai 2017',
    tasks: [
      'SEO-Analyse und Optimierungsvorbereitung für den Online-Shop',
      'Schnittstelle zur externen Entwickleragentur (Anforderungen, Abstimmung, Qualitätssicherung)',
    ],
  },
  {
    company: 'ir-interactive GmbH (ehem. „.netspione“)',
    location: 'Derschlag',
    position: 'Werkstudent Anwendungs- & Webentwicklung',
    start: 'Okt 2014',
    link: 'https://ir-interactive.de/',
    end: 'Mai 2016',
    tasks: [
      'Umsetzung professioneller Websites sowie TYPO3-Entwicklung inkl. Extensions und Datenbankanbindung',
      'Frontend- und Integrationsaufgaben (responsive, SEO-nahe Anforderungen)',
    ],
  },
  {
    company: 'XOVI GmbH',
    location: 'Köln',
    position: 'Anwendungsentwickler (Teilzeit)',
    start: 'Mär 2012',
    link: 'https://www.xovi.de/',
    end: 'Jul 2014',
    tasks: [
      'Entwicklung einer Web-Anwendung in C# inkl. Datenmodellierung sowie Integration externer Marktplatz-APIs',
      'Backend-Anteile (PHP) und MySQL-Design; frühe praktische Erfahrung in produktnaher Entwicklung',
    ],
  },
]
