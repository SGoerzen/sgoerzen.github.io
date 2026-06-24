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
  AUTHOR: 'Dr. des. Sergej Görzen',
}

export const IMPRESSUM = {
  TITLE: 'Impressum',
  DESCRIPTION: 'Anbieterkennzeichnung und rechtliche Hinweise.',
  NAME: 'Dr. des. Sergej Görzen',
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
    title: 'Technische Produktkonzeption',
    description:
      'Ich übersetze anspruchsvolle Produktideen in eine belastbare technische Grundlage, bevor Umsetzung teuer oder beliebig wird.',
    bullets: [
      'Technischer Zuschnitt für Produkte mit .NET, Web, XR oder mehreren Systemen',
      'Machbarkeit, Architektur und sinnvolle Umsetzungsreihenfolge früh geklärt',
      'Klare Entscheidungsgrundlagen für Produkt, Tech und Stakeholder',
    ],
  },
  {
    title: 'Speziallösungen & Systemintegration',
    description:
      'Ich realisiere Software, wenn mehrere Technologien, Plattformen oder Spezialanforderungen zu einem funktionierenden Produkt zusammenfinden müssen.',
    bullets: [
      'Integration von .NET, Web, Unity, Mobile, AR/VR und externen Diensten',
      'Schnittstellen, Datenflüsse und technische Übergänge sauber aufgesetzt',
      'Nicht nur Prototypen, sondern tragfähige Lösungen für den realen Einsatz',
    ],
  },
  {
    title: 'Umsetzung, Delivery & Weiterentwicklung',
    description:
      'Ich begleite anspruchsvolle Softwarevorhaben von der technischen Konzeption bis zur belastbaren Lieferung und Weiterentwicklung.',
    bullets: [
      'Hands-on Umsetzung in C#/.NET, APIs, Frontends und produktnahen Spezialthemen',
      'Technische Führung, Reviews und strukturierte Priorisierung im Projekt',
      'Bei Bedarf auch Architekturarbeit und Modernisierung in gewachsenen Systemen',
    ],
  },
]

export const LEGACY_PROJECTS = [
  {
    year: '2016',
    title: 'Road.de Autosuchmaschine',
    context: 'Work',
    source: 'Jekyll-Archiv',
    period: '2012 - 2013',
    stack: ['WPF', 'PHP', 'C#', '.NET', 'Konsolenanwendung', 'Mobile.de API', 'HTML', 'CSS'],
    homepage: 'https://web.archive.org/web/20131229060051/http://www.road.de/',
    image: '/project-images/road-de.png',
    description:
      'Frühes Projekt aus dem Archiv. Die Detailbeschreibung liegt im Altbestand nur in Metadatenform vor.',
  },
  {
    year: '2017',
    title: 'Kfz-Schadenmanagement Plattform (Studienprojekt)',
    context: 'Study',
    source: 'Jekyll-Archiv',
    period: '2017 - 2017',
    stack: ['C#', '.NET', 'Web'],
    image: '/project-images/legacy-projects.svg',
    description:
      'Archivprojekt mit Studienkontext. Technische Details werden nachträglich manuell ergänzt.',
  },
  {
    year: '2017',
    title: 'Energieversorger Enterprise-Projekt (Studienprojekt)',
    context: 'Study',
    source: 'Jekyll-Archiv',
    period: '2017 - 2017',
    stack: ['Web', 'Integrationen', 'Datenverarbeitung'],
    image: '/project-images/legacy-projects.svg',
    description:
      'Archivprojekt im Umfeld eines großen Energieversorgers; im Altbestand sind nur Basisdaten vorhanden.',
  },
  {
    year: '2017',
    title: 'Diverse Homepages',
    context: 'Work',
    source: 'Jekyll-Archiv',
    period: '2014 - 2017',
    stack: ['HTML', 'CSS', 'JavaScript', 'CMS'],
    image: '/project-images/legacy-projects.svg',
    description:
      'Sammlung mehrerer Webprojekte aus dem Kundenumfeld. Konkrete Einzelbeschreibungen werden händisch gepflegt.',
  },
  {
    year: '2017',
    title: 'Bachelorarbeit',
    context: 'Study',
    source: 'Jekyll-Archiv',
    period: '2017 - 2017',
    stack: ['Forschung', 'Software Engineering', 'Dokumentation'],
    image: '/project-images/BA.png',
    description:
      'Akademisches Projekt mit Praxisbezug; technische Details werden aus den Unterlagen ergänzt.',
  },
  {
    year: '2018',
    title: 'LowPoly Hunter',
    context: 'Study, Master Studies, Game Development, Level Generation, Physics Programming',
    source: 'Jekyll-Archiv',
    period: '2018 - 2019',
    stack: ['C++', 'OpenGL', 'GLSL', 'Game Development', 'Physics Programming', 'Level Generation'],
    image: '/project-images/low-poly-game.jpg',
    description:
      'Projekt im Bereich interaktive 3D-/Game-Entwicklung als Teil des früheren Portfolios.',
  },
  {
    year: '2019',
    title: 'Printlayout Editor',
    context: 'Work',
    source: 'Jekyll-Archiv',
    period: '2019 - 2020',
    stack: ['JavaScript', 'Canvas', 'UI Engineering'],
    image: '/project-images/legacy-projects.svg',
    description:
      'Editor-Projekt mit Fokus auf Layout-Workflows; im Altarchiv sind bisher nur Metadaten vorhanden.',
  },
  {
    year: '2019',
    title: 'Spritesheet Editor',
    context: 'Freetime',
    source: 'Jekyll-Archiv',
    period: '2019 - 2019',
    stack: ['JavaScript', 'Canvas', 'Tooling'],
    image: '/project-images/legacy-projects.svg',
    description:
      'Tooling-Projekt aus dem Freizeit-/Experimentierkontext mit Fokus auf Asset-Workflows.',
  },
  {
    year: '2019',
    title: 'Mosaik mit KonvaJS',
    context: 'Work',
    source: 'Jekyll-Archiv',
    period: '2019 - 2020',
    stack: ['JavaScript', 'KonvaJS', 'Canvas'],
    image: '/project-images/legacy-projects.svg',
    description:
      'Canvas-basiertes Projekt mit KonvaJS aus dem historischen Portfolio-Bestand.',
  },
]

export const OMILAXR_REPOS = [
  {
    name: 'xAPI4Unity',
    url: 'https://gitlab.com/learntech-rwth/omilaxr-ecosystem/xapi-4-unity',
    period: '2023 - xxxx',
    stack: ['Unity', 'C#', 'xAPI'],
    image: '/project-images/omilaxr.svg',
    description:
      'Unity-Paket zur Umwandlung von xAPI-Definitionen in C#-Klassen innerhalb von Unity-Projekten.',
  },
  {
    name: 'LiMoxAPI',
    url: 'https://gitlab.com/learntech-rwth/omilaxr-ecosystem/limoxapi',
    period: '2022 - xxxx',
    stack: ['TypeScript', 'Web', 'xAPI'],
    image: '/project-images/omilaxr.svg',
    description:
      'Live Monitoring Tool for xAPI; dient zur Auswertung und Überwachung von xAPI-bezogenen Datenflüssen.',
  },
  {
    name: 'ReCoPa',
    url: 'https://gitlab.com/learntech-rwth/omilaxr-ecosystem/reco-pa',
    period: '2021 - xxxx',
    stack: ['XR', 'Learning Analytics', 'Recommendation'],
    image: '/project-images/omilaxr.svg',
    description:
      'Repository für einen recommendation-/context-orientierten Baustein innerhalb des OmiLAXR-Ökosystems.',
  },
  {
    name: 'OmiLAXR Website',
    url: 'https://gitlab.com/learntech-rwth/omilaxr-ecosystem/omilaxr-website',
    period: '2021 - xxxx',
    stack: ['Web', 'Documentation'],
    image: '/project-images/omilaxr.svg',
    description:
      'Website- und Dokumentations-Repository für das OmiLAXR-Framework und seine Module.',
  },
  {
    name: 'XR OER Inventory',
    url: 'https://gitlab.com/learntech-rwth/omilaxr-ecosystem/xr-oer-inventory',
    period: '2022 - xxxx',
    stack: ['XR', 'Inventory', 'Web'],
    image: '/project-images/omilaxr.svg',
    description:
      'Inventar-/Katalog-Repository für XR-bezogene OER-Ressourcen im Ecosystem-Kontext.',
  },
  {
    name: 'Adapter Systems',
    url: 'https://gitlab.com/learntech-rwth/omilaxr-ecosystem/adapter-systems',
    period: '2021 - xxxx',
    stack: ['Integration', 'Adapters', 'XR'],
    image: '/project-images/omilaxr.svg',
    description:
      'Adapter-Systeme für die Anbindung und Übersetzung zwischen unterschiedlichen Systembestandteilen.',
  },
  {
    name: 'Assistance System',
    url: 'https://gitlab.com/learntech-rwth/omilaxr-ecosystem/assistance-system',
    period: '2021 - xxxx',
    stack: ['XR', 'Guidance', 'Application Logic'],
    image: '/project-images/omilaxr.svg',
    description:
      'Assistenzsystem-Baustein im OmiLAXR-Umfeld; dient als anwendungsnahes Modul innerhalb des Ecosystems.',
  },
  {
    name: 'OmiLAXR Godot Framework and Modules',
    url: 'https://gitlab.com/learntech-rwth/omilaxr-ecosystem/omilaxr-godot-framework-and-modules',
    period: '2021 - xxxx',
    stack: ['Godot', 'XR', 'Modules'],
    image: '/project-images/omilaxr.svg',
    description:
      'Framework- und Modulansatz für Godot-basierte Umsetzungen im OmiLAXR-Kontext.',
  },
  {
    name: 'OmiLAXRv2 Framework and Modules',
    url: 'https://gitlab.com/learntech-rwth/omilaxr-ecosystem/omilaxrv2-framework-and-modules',
    period: '2023 - xxxx',
    stack: ['XR', 'Framework', 'Modules'],
    image: '/project-images/omilaxr.svg',
    description:
      'Weiterentwicklung des Framework-Konzepts (Version 2) mit modularer Struktur.',
  },
  {
    name: 'OmiVAXR Modules and Visualization Modules',
    url: 'https://gitlab.com/learntech-rwth/omilaxr-ecosystem/omivaxr-modules-and-visualization-modules',
    period: '2022 - xxxx',
    stack: ['Visualization', 'XR', 'Modules'],
    image: '/project-images/omilaxr.svg',
    description:
      'Repository für Visualisierungs- und Modulbausteine im XR-/Analytics-Umfeld.',
  },
  {
    name: 'Research',
    url: 'https://gitlab.com/learntech-rwth/omilaxr-ecosystem/research',
    period: '2021 - xxxx',
    stack: ['Research', 'XR', 'Learning Analytics'],
    image: '/project-images/omilaxr.svg',
    description:
      'Sammelrepository für forschungsnahe Komponenten und Experimente des Ecosystems.',
  },
  {
    name: 'SceneManager',
    url: 'https://gitlab.com/learntech-rwth/omilaxr-ecosystem/scenemanager',
    period: '2021 - xxxx',
    stack: ['Unity', 'Scene Management', 'XR'],
    image: '/project-images/omilaxr.svg',
    description:
      'Baustein für Szenen- und Ablaufsteuerung in XR-/Unity-nahen Projekten.',
  },
  {
    name: 'Starter Dashboard',
    url: 'https://gitlab.com/learntech-rwth/omilaxr-ecosystem/starter-dashboard',
    period: '2022 - xxxx',
    stack: ['Dashboard', 'Web', 'Analytics'],
    image: '/project-images/omilaxr.svg',
    description:
      'Start-/Übersichts-Dashboard für den Einstieg in das OmiLAXR-Ökosystem.',
  },
]

export const CV_PROJECTS = [
  {
    title: 'AR Service App – Indoor-Navigation mit VPS',
    period: '2024 - 2025',
    stack: ['Flutter', 'Unity', 'C#', 'AR', 'iOS', 'Immersal', 'Supabase', '.NET MAUI'],
    image: '/project-images/cv-projects.svg',
    description:
      'Integration von Indoor-AR in eine laufende iOS-App: Native Unity-Module mit Immersal VPS, Flutter-Unity-Kommunikation, Supabase-Backend und produktionsreife Auslieferung – ohne Rebuild der bestehenden App-Architektur.',
    details:
      'Enthielt Authoring-Tooling (Unity Editor Extensions, Web-Admin-Panel), .NET MAUI Utility zur Scan-Frame-Analyse, iOS-Releases (TestFlight) und Bewertung von VPS-SDKs (Immersal, Vuforia, MultiSet).',
  },
  {
    title: 'CTO-nahe Modernisierungsmandate im Mittelstand',
    period: '2024 - xxxx',
    stack: ['C#', '.NET', 'Architektur', 'Refactoring', 'Delivery Management'],
    image: '/project-images/cv-projects.svg',
    description:
      'Externe CTO-Mandate im Mittelstand: Bestandsanalyse, Architekturentscheidungen und Abbau kritischer technischer Schulden. Jeweils von der Erstanalyse bis zur stabilen Lieferung – ohne laufende Agentur im Hintergrund.',
    details:
      'Enthielt Priorisierung technischer Schulden, Entscheidungsvorlagen für Stakeholder und hands-on Umsetzung kritischer Maßnahmen.',
  },
  {
    title: 'Virtual Photo Booth – WebAR-Fotoerlebnis',
    period: '2020 - 2025',
    stack: ['TypeScript', 'Three.js', 'WebGL', 'Vue 3', 'Nuxt 3', 'React', 'DeepAR', 'AWS', 'Node.js'],
    image: '/project-images/cv-projects.svg',
    description:
      'Browserbasiertes WebAR-Fotoerlebnis mit Live-WebGL-Mosaik für tausende Bilder, AR-Filtern (DeepAR inkl. Smile-Erkennung via 2D-Landmarks) und interaktiven UI-Workflows. Admin-Panel in Vue/Nuxt, Weiterentwicklung in React.',
    details:
      'Tech Lead und Koordination externer Freelancer sowie eines Nearshore-Partners. Mitgestaltung der neuen Plattformarchitektur (React-Frontend, serviceorientiertes Backend).',
  },
  {
    title: 'BuddyAnalytics – Analyse-Dashboard für Studiengänge',
    period: '2022 - 2025',
    stack: ['TypeScript', 'Angular', 'Python', 'MongoDB', 'Node.js', 'Fastify', 'Docker'],
    image: '/project-images/cv-projects.svg',
    description:
      'Analytics-Dashboard für evidenzbasierte Curriculumentscheidungen im Hochschulkontext. Tech Lead in einem Konsortium aus drei Universitäten – von Anforderungsklärung bis Konferenzpräsentation.',
    details:
      'Anforderungsklärung mit Stakeholdern (Curriculum Designer), Umsetzungsplanung, Reviews und Präsentation der Ergebnisse auf Konferenzen.',
  },
  {
    title: 'SWOFI – Modernisierung eines Lehr-Workflow-Systems',
    period: '2021 - 2025',
    stack: ['TypeScript', 'React', 'Vite', 'Node.js', 'Express.js', 'MongoDB', 'Docker'],
    image: '/project-images/cv-projects.svg',
    description:
      'Modernisierung eines bestehenden Lehrsystems in eine wartbare neue Version (PUG → React/TypeScript). Fokus auf Stabilität, Testbarkeit und Integrationsfähigkeit.',
    details:
      'Evaluation in der Praxis, Präsentation auf Konferenzen, Förderung der Nutzung bei Professorinnen und Doktorandinnen.',
  },
  {
    title: 'API- und Integrationsplattform in .NET/AWS',
    period: '2017 - 2021',
    stack: ['.NET Core', 'C#', 'AWS', 'REST APIs', 'SQL'],
    image: '/project-images/cv-projects.svg',
    description:
      'Aufbau und Weiterentwicklung einer API- und Integrationsplattform für Drittsystem-Anbindungen: belastbares API-Design, saubere Datenpipelines, laufender Delivery-Betrieb ohne Unterbrechung.',
    details:
      'Schwerpunkt auf belastbarem API-Design, Datenflüssen zwischen Drittsystemen und technischer Qualität im laufenden Delivery-Betrieb.',
  },
  {
    title: 'Desktop-Tooling mit Electron',
    period: '2018 - 2020',
    stack: ['Electron', 'TypeScript', 'Node.js', 'UI Engineering'],
    image: '/project-images/cv-projects.svg',
    description:
      'Mitentwicklung eines Desktop-nahen Tools zur Unterstützung operativer Produkt- und Prozessanforderungen.',
    details:
      'Fokus auf robuste Bedienlogik, Integrationsfähigkeit und Wartbarkeit in einem wachsenden Funktionsumfang.',
  },
  {
    title: 'RePiX VR – Interaktive Lernumgebung',
    period: '2020 - 2023',
    stack: ['Unity', 'C#', 'VR', 'Learning Analytics', 'xAPI'],
    image: '/project-images/cv-projects.svg',
    description:
      'VR-Lernumgebung zur interaktiven Vermittlung der Rendering-Pipeline (RWTH Aachen) mit xAPI-Integration und Pilotstudie. Grundlage für mehrere Publikationen und Abschlussarbeiten.',
    details:
      'Diente als praxisnahes XR-/Learning-Projekt mit Fokus auf didaktische Wirksamkeit, technische Instrumentierung und Forschungstransfer.',
  },
  {
    title: 'LiMoxAPI Monitoring Tool',
    period: '2022 - xxxx',
    stack: ['TypeScript', 'xAPI', 'Web', 'Analytics', 'Developer Tooling'],
    image: '/project-images/cv-projects.svg',
    description:
      'Live-Monitoring-Tool zur Unterstützung von XR-Entwicklern bei Analyse und Fehlerbehebung von xAPI-Statements in Echtzeit.',
    details:
      'Positioniert als Tooling-Baustein im OmiLAXR-Ökosystem zur Transparenz und Qualitätssicherung von Analytics-Datenflüssen.',
  },
  {
    title: 'Web- und CMS-Projekte (TYPO3 / Unternehmensseiten)',
    period: '2014 - 2017',
    stack: ['TYPO3', 'PHP', 'MySQL', 'Frontend', 'SEO'],
    image: '/project-images/cv-projects.svg',
    description:
      'Frühere professionelle Webprojekte inklusive TYPO3-Extensions, Integrationen und responsiver Umsetzung.',
    details:
      'Legte den Grundstein für produktionsnahe Arbeit mit Kundenanforderungen, Qualitätssicherung und wartbaren Strukturen.',
  },
  {
    title: 'Frühe C#-Webanwendung mit Marktplatz-APIs',
    period: '2012 - 2014',
    stack: ['C#', 'PHP', 'MySQL', 'API Integration'],
    image: '/project-images/cv-projects.svg',
    description:
      'Entwicklung einer Webanwendung mit Datenmodellierung und Integration externer Marktplatz-Schnittstellen.',
    details:
      'Frühes Produktentwicklungsprojekt mit Fokus auf Backend-Logik, Datenkonsistenz und API-Anbindung.',
  },
]

export const STUDIES = [
  {
    title: 'Promotion (Dr.-Ing.), Informatik',
    institution: 'RWTH Aachen University',
    link: 'https://learntech.rwth-aachen.de',
    date: 'Apr. 2021 - Juni 2026',
    details: [
      'Promotion im Juni 2026 abgeschlossen; Abschlussnote: magna cum laude. Veröffentlichung und Urkundenaushändigung stehen noch aus; Abschluss: Dr.-Ing.',
      'Fokus: Framework-Entwicklung, komplexe Softwaresysteme, Performance und Big-Data-Verarbeitung sowie Learning Technologies, XR (AR/VR) und Learning Analytics.',
      'Produktnahe Forschungssoftware, Frameworkdesign und Evaluation',
    ],
  },
  {
    title: 'M. Sc. RWTH, Informatik',
    institution: 'RWTH Aachen University',
    link: 'https://www.rwth-aachen.de',
    date: 'Apr. 2017 - Feb. 2021',
    details: [
      'Masterarbeit (Note 1,0): RePiX VR – Konzeption und Umsetzung einer VR-Lernumgebung inkl. xAPI-Integration.',
      'Schwerpunkte: XR/EdTech, VR, Game Development, Computergrafik, Software Engineering',
    ],
  },
  {
    title: 'B. Sc., Informatik',
    institution: 'TH Köln (Campus Gummersbach)',
    link: 'https://www.th-koeln.de',
    date: 'Okt. 2012 - Feb. 2017',
    details: [
      'Bachelorarbeit (Note 1,0): Lernmodul für Boolesche Algebra (interaktives KV-Diagramm, Canvas, Auswertungslogik).',
      'Schwerpunkte: Software Engineering, Webentwicklung, Algorithmen',
    ],
  },
  {
    title: 'Informationstechnischer Assistent (ITA) mit Fachhochschulreife',
    institution: 'Berufskolleg Oberberg (Dieringhausen)',
    link: '',
    date: 'Aug. 2009 - Juni 2012',
    details: [
      'Informatiknahe schulische Ausbildung mit Schwerpunkt auf Programmierung und technischen Grundlagen.',
      'Abschluss: Fachhochschulreife.',
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
    position: 'Wissenschaftlicher Mitarbeiter',
    start: 'Apr 2021',
    link: 'https://learntech.rwth-aachen.de',
    end: 'heute',
    tasks: [
      'Entwicklung produktnaher Software in XR- und Analytics-Kontexten.',
      'Lehre, Mentoring und technische Qualitätssicherung in Entwicklungsprojekten.',
      'Teamkoordination, Reviews und Strukturierung von Umsetzungsarbeiten.',
      'Promotion im Juni 2026 abgeschlossen.',
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
    company: 'apofair',
    location: 'Remote',
    position: 'In-house SEO & IT-Beratung',
    start: 'Nov 2016',
    link: '',
    end: 'Mai 2017',
    tasks: [
      'SEO-Optimierung und Shop-Betreuung.',
      'Koordination mit externer Entwicklungsagentur.',
    ],
  },
  {
    company: 'ir-interactive GmbH',
    location: 'Köln',
    position: 'Web- und Anwendungsentwicklung',
    start: 'Okt 2014',
    link: '',
    end: 'Mai 2016',
    tasks: [
      'Responsive Webentwicklung und Umsetzung von TYPO3-Extensions.',
      'Grundlegendes MySQL-Datenbankdesign in produktionsnahen Projekten.',
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
