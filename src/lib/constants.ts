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
  calendly: 'https://zeeg.me/sergejgoerzen/30min',
}

export const SITE: Site = {
  TITLE: 'Sergej Görzen | Senior Software Engineer',
  DESCRIPTION:
    'Senior Software Engineer für komplexe Systeme, Architektur und technische Produktumsetzung mit Fokus auf C#/.NET, Modernisierung und Delivery.',
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
  PHONE: '',
  VAT_ID: '',
  SMALL_BUSINESS: true,
}

export const WORK: Page = {
  TITLE: 'Berufserfahrung',
  DESCRIPTION: 'Stationen, Rollen und technische Verantwortung.',
}

export const PROJECTS: Page = {
  TITLE: 'Projektbeispiele',
  DESCRIPTION: 'Ausgewählte Mandate zu Architektur, Modernisierung und Delivery.',
}

export const SERVICES = [
  {
    title: 'Systemanalyse & Tech-Assessment',
    description:
      'Ich analysiere gewachsene Systeme, identifiziere Engpässe und mache technische Risiken transparent.',
    bullets: [
      'Codebase-, Architektur- und Schnittstellenanalyse',
      'Priorisierte Handlungsempfehlungen statt pauschaler Rewrite-Empfehlungen',
      'Klare Entscheidungsgrundlagen für Produkt, Tech und Management',
    ],
  },
  {
    title: 'Architektur & Modernisierung',
    description:
      'Ich strukturiere komplexe .NET- und Integrationslandschaften so, dass Weiterentwicklung wieder planbar wird.',
    bullets: [
      'Refactoring- und Migrationsstrategie für Bestandssysteme',
      'Domaintaugliche Architektur- und Schnittstellenschnitte',
      'Performance-, Stabilitaets- und Wartbarkeitsverbesserungen im laufenden Betrieb',
    ],
  },
  {
    title: 'Technische Produktumsetzung & Delivery',
    description:
      'Ich übernehme Verantwortung von der technischen Konzeption bis zur belastbaren Lieferung.',
    bullets: [
      'Hands-on Umsetzung in C#/.NET, APIs und Integrationen',
      'Technische Führung, Reviews und Enablement im Team',
      'Planbare Lieferfähigkeit mit klaren Prioritäten und sauberer Übergabe',
    ],
  },
]

export const CASE_STUDIES = [
  {
    title: 'Modernisierung eines gewachsenen Backend-Systems (.NET)',
    client: 'Mittelständisches Produktunternehmen',
    challenge:
      'Uneinheitliche Architektur, steigende Delivery-Zyklen und hohe Regressionsrisiken bei Änderungen.',
    approach:
      'Architektur-Review, schrittweise Entkopplung kritischer Module, Einführung klarer Schnittstellen und testbarer Domänengrenzen.',
    result:
      'Schnellere Releases, weniger Seiteneffekte bei Features und deutlich besser planbare Weiterentwicklung.',
    focus: 'Architektur, Refactoring, Delivery',
  },
  {
    title: 'Technische Stabilisierung eines Integrationsprojekts',
    client: 'B2B-Produktteam mit mehreren Drittsystemen',
    challenge:
      'Instabile Datenflüsse zwischen APIs, hoher manueller Aufwand im Betrieb und unklare Verantwortlichkeiten.',
    approach:
      'Analyse der Integrationskette, robuste Fehlerpfade, Monitoring-Grundlagen und klare technische Verantwortungsgrenzen.',
    result:
      'Deutlich stabilerer Betrieb, verkürzte Reaktionszeiten bei Vorfällen und bessere Transparenz für das Team.',
    focus: 'Integrationen, Betriebsstabilitaet, Ownership',
  },
  {
    title: 'XR-Modul als differenzierendes Produktfeature',
    client: 'Produktteam mit bestehender Web-/Mobile-Anwendung',
    challenge:
      'XR-Funktionalität sollte integriert werden, ohne das Kernprodukt technologisch zu zerlegen.',
    approach:
      'Unity/XR-Modul gezielt an bestehende Produkt- und Backend-Schnittstellen angebunden, mit Fokus auf Betrieb und Wartbarkeit.',
    result:
      'Innovatives Feature mit realem Produktnutzen, ohne separate Schattenplattform aufzubauen.',
    focus: 'XR als differenzierender Baustein',
  },
]

export const STUDIES = [
  {
    title: 'Dr. rer. nat. Informatik (Promotion)',
    institution: 'RWTH Aachen University',
    link: 'https://learntech.rwth-aachen.de',
    date: '2021 - vsl. Apr. 2026',
    details: [
      'Fokus: Learning Technologies, XR (AR/VR) und Learning Analytics',
      'Produktnahe Forschungssoftware, Frameworkdesign und Evaluation',
    ],
  },
  {
    title: 'M. Sc. Informatik',
    institution: 'RWTH Aachen University',
    link: 'https://www.rwth-aachen.de',
    date: '2017 - 2021',
    details: [
      'Schwerpunkte: XR/EdTech, Computergrafik, Software Engineering',
    ],
  },
  {
    title: 'B. Sc. Informatik',
    institution: 'TH Köln (Campus Gummersbach)',
    link: 'https://www.th-koeln.de',
    date: '2012 - 2017',
    details: [
      'Schwerpunkte: Software Engineering, Webentwicklung, Algorithmen',
    ],
  },
]

export const EXPERIENCE = [
  {
    company: 'Freiberuflich',
    location: 'Remote',
    position: 'Senior Software Engineer / externer CTO',
    start: 'Apr 2024',
    link: 'https://goerzen.consulting',
    end: 'heute',
    tasks: [
      'Analyse und Modernisierung gewachsener Systeme mit Fokus auf C#/.NET, Architektur und Delivery.',
      'CTO-nahe Verantwortung in Mandaten: technische Entscheidungen, Priorisierung, Risiko- und Qualitätsmanagement.',
      'Hands-on Umsetzung in Backend-, Integrations- und Plattformthemen bis zur stabilen Produktivlieferung.',
    ],
  },
  {
    company: 'RWTH Aachen University',
    location: 'Aachen',
    position: 'Wissenschaftlicher Mitarbeiter & Doktorand',
    start: 'Apr 2021',
    link: 'https://learntech.rwth-aachen.de',
    end: 'heute',
    tasks: [
      'Entwicklung produktnaher Software in XR- und Analytics-Kontexten.',
      'Lehre, Mentoring und technische Qualitätssicherung in Entwicklungsprojekten.',
      'Teamkoordination, Reviews und Strukturierung von Umsetzungsarbeiten.',
    ],
  },
  {
    company: 'MINTANO UG',
    location: 'Düsseldorf',
    position: 'Lead Developer',
    start: 'Apr 2020',
    link: 'https://mintano.com/',
    end: 'März 2021',
    tasks: [
      'Technische Leitung in Kunden- und Produktprojekten.',
      'Koordination von Team/Freelancern und Qualitätssicherung bis zur Auslieferung.',
      'Abstimmung mit Stakeholdern zu Scope, Prioritäten und Umsetzungsentscheidungen.',
    ],
  },
  {
    company: 'MINTANO UG',
    location: 'Düsseldorf',
    position: 'Softwareentwickler',
    start: 'Sep 2017',
    link: 'https://mintano.com/',
    end: 'März 2020',
    tasks: [
      'Entwicklung interaktiver Web-Produkte und Services.',
      'API-Design und Implementierung, u. a. mit .NET Core und AWS.',
      'Mitarbeit an Architektur- und Umsetzungsentscheidungen.',
    ],
  },
  {
    company: 'XOVI GmbH',
    location: 'Köln',
    position: 'Anwendungsentwickler (Teilzeit)',
    start: 'März 2012',
    link: 'https://www.xovi.de/',
    end: 'Jul 2014',
    tasks: [
      'Entwicklung einer Web-Anwendung in C# inkl. Datenmodellierung und API-Integration.',
      'Backend-Anteile (PHP) und MySQL-Design in produktnahen Szenarien.',
    ],
  },
]
