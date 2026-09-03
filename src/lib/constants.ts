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
  TITLE: 'Dr.-Ing. Sergej Görzen | XR Learning Analytics',
  DESCRIPTION:
    'XR-Lern- und Trainingsszenarien mit Unity, Three.js und WebXR – ergänzt um xAPI, Learning Analytics und Evaluation.',
  AUTHOR: 'Dr.-Ing. Sergej Görzen',
}

export const IMPRESSUM = {
  TITLE: 'Impressum',
  DESCRIPTION: 'Anbieterkennzeichnung und rechtliche Hinweise.',
  NAME: 'Dr.-Ing. Sergej Görzen',
  ADDRESS_LINE1: 'Hähner Weg 6',
  ADDRESS_LINE2: '51580 Reichshof',
  COUNTRY: 'Deutschland',
  EMAIL: 'sergej@goerzen.consulting',
  PHONE: '',
  VAT_ID: '',
}

export const WORK: Page = {
  TITLE: 'Profil',
  DESCRIPTION:
    'Profil von Dr.-Ing. Sergej Görzen: Arbeitsweise, technischer Fokus, Berufserfahrung, akademischer Hintergrund und persönliche Interessen.',
}

export const XR_PROJECTS = [
  {
    slug: 'repix-vr',
    category: 'learning',
    title: 'RePiX VR',
    focus: 'VR · Computer Graphics',
    organization: 'Learning Technologies · RWTH Aachen University',
    image: '/project-images/repix.png',
    imageAlt: 'Collage interaktiver Lernstationen in der VR-Anwendung RePiX',
    summary:
      'Aus meiner Masterarbeit entstand eine begehbare Rendering-Pipeline, in der Lernende Grafikprozesse direkt untersuchen und verändern. Die Weiterentwicklung begleitete ich anschließend in elf Bachelor- und Masterarbeiten fachlich.',
    recognition:
      'Best Educational Paper (Eurographics 2022) · erweiterter Journalartikel in Computers & Graphics (2023) · Best Poster für eine RePiX-basierte Folgearbeit (DELFI 2022)',
    description:
      'RePiX VR macht die Rendering-Pipeline als interaktive Lernumgebung begehbar. Lernende verändern unter anderem Sichtvolumen und Geometrien direkt in VR. Aufbauend auf meiner Masterarbeit betreute ich elf Folgearbeiten zu didaktischem Design, Desktop-Transfer, Learning Analytics, Eye Tracking, Assistenzsystemen, Assessment und einzelnen Rendering-Stufen.',
    resourcesLabel: 'Weitere Arbeiten ansehen (12)',
    resources: [
      {
        label: 'Projektursprung: Technology-enhanced learning of the computer graphics rendering pipeline in virtual reality (Masterarbeit)',
        url: 'https://publications.rwth-aachen.de/record/816378',
      },
      {
        label: 'Didaktische Analyse des Lerninhalts von RePiX VR (Bachelorarbeit)',
        url: 'https://publications.rwth-aachen.de/record/841011',
      },
      {
        label: 'Multimodal Learning Analytics Dashboard for VR Data in Moodle (Bachelorarbeit)',
        url: 'https://publications.rwth-aachen.de/record/849933',
      },
      {
        label: 'Technology-enhanced learning in VR: Light and shadow in computer graphics (Masterarbeit)',
        url: 'https://publications.rwth-aachen.de/record/977487',
      },
      {
        label: 'Theory-based redesign of a VR learning environment for desktop (Bachelorarbeit)',
        url: 'https://publications.rwth-aachen.de/record/963850',
      },
      {
        label: 'Interactive summative assessment in an educational VR application (Masterarbeit)',
        url: 'https://publications.rwth-aachen.de/record/973682',
      },
      {
        label: 'Enhancing learner assistance in RePiX VR (Masterarbeit)',
        url: 'https://publications.rwth-aachen.de/record/975347',
      },
      {
        label: 'Effects of character design on presence experience in VR applications (Masterarbeit)',
        url: 'https://publications.rwth-aachen.de/record/975560',
      },
      {
        label: 'Interactive learning of 3D transformations in virtual reality (Bachelorarbeit)',
        url: 'https://publications.rwth-aachen.de/record/975561',
      },
      {
        label: 'Integrating gaze-based interaction into RePiX using mobile VR (Masterarbeit)',
        url: 'https://publications.rwth-aachen.de/record/977615',
      },
      {
        label: 'Explorative analysis of multimodal data using VR Learning Analytics (Bachelorarbeit)',
        url: 'https://publications.rwth-aachen.de/record/977616',
      },
      {
        label: 'Interactive visualization of rasterization in virtual reality (Bachelorarbeit)',
        url: 'https://publications.rwth-aachen.de/record/977480',
      },
    ],
    tags: ['Unity', 'VR', 'Eye Tracking', 'xAPI'],
  },
  {
    slug: 'teach-r',
    category: 'learning',
    title: 'Teach-R',
    focus: 'VR · Lehrkräftetraining',
    organization: 'Universität Potsdam · RWTH Aachen University',
    url: 'https://www.uni-potsdam.de/de/multimedia/projekte/anwendungen/teach-r',
    image: '/project-images/teach-r.png',
    imageAlt: 'Teach-R im Einsatz mit VR-Brille und einem virtuellen Klassenraum',
    summary: 'Beratung zur Einbindung von Learning Analytics in einen virtuellen Klassenraum für das Lehrkräftetraining.',
    description:
      'Teach-R versetzt angehende Lehrkräfte in einen realitätsnahen virtuellen Klassenraum. Ich habe das Projektteam bei der Integration von OmiLAXR und der strukturierten Erfassung von Interaktionsdaten beraten.',
    tags: ['Unity', 'VR', 'Simulation', 'Training', 'Learning Analytics'],
  },
  {
    slug: 'inside-the-router',
    category: 'learning',
    title: 'Inside the Router',
    focus: 'VR · Informatikdidaktik',
    organization: 'Didaktik der Informatik · TU Dresden',
    url: 'https://ddigames.inf.tu-dresden.de/sites/vr/router/',
    image: '/project-images/inside-the-router.png',
    imageAlt: 'Virtuelle Datenpakete und Netzwerkadressen im Lernspiel Inside the Router',
    summary: 'Beratung zur Erfassung und Auswertung von Interaktionen in einem VR-Lernspiel über Netzwerk-Routing.',
    description:
      'Inside the Router macht Netzwerk-Routing durch den Umgang mit virtuellen Datenpaketen erfahrbar. Ich habe zur Integration von OmiLAXR und zur Modellierung auswertbarer xAPI-Interaktionen beraten.',
    tags: ['Unity', 'VR', 'Game-based Learning', 'Networking', 'xAPI'],
  },
  {
    slug: 'schuelerlarbor',
    category: 'learning',
    title: 'SchülerlARbor Chemie',
    focus: 'AR/MR · Chemiedidaktik',
    organization: 'Didaktik der Chemie · RWTH Aachen University',
    image: '/project-images/chemielarbor.png',
    imageAlt:
      'AR- und MR-Visualisierungen zu Batterie, Elektrochemie und Molekülen im SchülerlARbor Chemie',
    summary:
      'Die MR-Weiterentwicklung entstand im Rahmen einer von mir mitbetreuten Abschlussarbeit. Zusätzlich beriet ich den Lehrstuhl für Didaktik der Chemie zu Learning Analytics und unterstützte die Implementierung der AR-/MR-Lernmodule.',
    description:
      'SchülerlARbor Chemie erweitert das Schülerlabor CheERs! um AR- und Mixed-Reality-Lernmodule. Inhalte zu Lithium-Ionen-Akkus, Piezo-Kristallen und Reaktionsmechanismen werden räumlich erfahrbar und ergänzen das praktische Experimentieren. Ich betreute die Abschlussarbeit zur MR-Weiterentwicklung mit und beriet den Lehrstuhl für Didaktik der Chemie bei der Konzeption von Learning Analytics sowie der technischen Implementierung.',
    resources: [
      {
        label: 'Bachelorarbeit',
        url: 'https://doi.org/10.18154/RWTH-2023-12092',
      },
      {
        label: 'DELFI-Paper 2024',
        url: 'https://doi.org/10.18420/delfi2024_47',
      },
      {
        label: 'Quellcode',
        url: 'https://doi.org/10.17605/OSF.IO/6PZ85',
      },
    ],
    tags: ['Unity', 'AR/MR', 'HoloLens', 'Chemiedidaktik', 'Learning Analytics'],
  },
  {
    slug: 'ar-routen',
    category: 'learning',
    featured: true,
    title: 'Service Route: AR-gestützte Mitarbeiterschulung',
    focus: 'AR · Mitarbeiterschulung & Qualitätssicherung',
    organization: 'Kundenprojekt · Gastronomie',
    image: '/project-images/ServiceRouteAR.png',
    imageAlt:
      'Anonymisierte Ansichten der Service-Route-App mit Routenauswahl, AR-Navigation, Prüfschritten und Abschlussmeldung',
    summary:
      'Ich entwickelte die App einschließlich der AR-basierten Indoor-Navigation. Sie etablierte einen digitalen Qualitätssicherungsprozess für Mitarbeitende: Standortgebundene Routen führen durch Kontrollen, dokumentieren Mängel und beschleunigen deren Behebung. Ergebnis: 40 % kürzere Kontrollrundgänge.',
    note:
      'Abbildung anonymisiert – standortbezogene Informationen wurden aus Vertraulichkeitsgründen unkenntlich gemacht.',
    challenge:
      'Einheitliche Qualitäts- und Hygienestandards sollten in allen Restaurants täglich sichergestellt werden. Das bestehende QS-Prüfsystem war rein checklistengesteuert: Neuen Mitarbeitenden fehlten konkrete Anleitungen, während Prüfschritte nicht verbindlich mit den jeweiligen Orten im Restaurant verknüpft waren.',
    description:
      'Ich entwickelte Service Route als App für einen digitalen Qualitätssicherungsprozess und implementierte die AR-basierte Indoor-Navigation. Routen lassen sich in einem Unity-Editor planen und simulieren; die mit Flutter umgesetzte iOS-App führt Mitarbeitende standortbezogen durch Prüf- und Serviceabläufe und verbindet Navigation, konkrete Arbeitsanweisungen und digitale Dokumentation.',
    outcome:
      'Nachweislich höhere Prozesssicherheit, schnellere interne Audits und erhebliche Zeitersparnis durch den Wegfall der Papierdokumentation.',
    metrics: [
      {
        value: '40 % kürzer',
        label: 'Kontrollrundgänge',
        detail: 'Von 10–15 auf 6–9 Minuten',
      },
      {
        value: '< 8 Stunden',
        label: 'bis zur Mängelbehebung',
        detail: 'Zuvor mehr als 24 Stunden',
      },
      {
        value: '> 300 % mehr',
        label: 'proaktiv erfasste Kleinstmängel',
        detail: 'In den ersten drei Monaten; zuvor nahezu keine Erfassung',
      },
      {
        value: '> 95 %',
        label: 'Quality Score',
        detail: 'Im Mittel pro Schicht über alle erfassten Routen',
      },
    ],
    tags: [
      'AR Training',
      'Onboarding',
      'Qualitätssicherung',
      'Unity as a Library',
      'Flutter',
      'Supabase',
      'Immersal',
      'External CTO',
    ],
  },
  {
    slug: 'omilaxr',
    category: 'technical',
    featured: true,
    title: 'OmiLAXR',
    focus: 'Dissertationsprojekt · XR Learning Analytics',
    organization: 'Learning Technologies · RWTH Aachen University',
    image: '/project-images/OmiLAXR_Pipeline.drawio.png',
    imageAlt:
      'Modulare OmiLAXR-Pipeline von Listenern und Tracking-Komponenten bis zu Datenanbietern und externen Endpunkten',
    summary:
      'Im Rahmen meiner Dissertation entwickelte und evaluierte ich OmiLAXR: ein modulares Framework, das die Integration standardisierter Learning-Analytics-Daten in Unity-XR-Anwendungen vereinfacht und mit xAPI konsistente, auswertbare Daten erzeugt.',
    description:
      'OmiLAXR strukturiert die Datenerfassung in XR-Anwendungen als erweiterbare Pipeline aus Listenern, Filtern, Tracking-Komponenten, Composern, Hooks und Endpunkten. Das Framework verbindet Unity-basierte VR-, AR- und MR-Anwendungen mit xAPI und externen Learning-Record-Stores. Wiederverwendbare Module, C#-Codegenerierung und IDE-Unterstützung reduzieren den Integrationsaufwand und verbessern Konsistenz und Qualität der erhobenen Daten.',
    resources: [
      {
        label: 'OmiLAXR Framework',
        url: 'https://omilaxr.dev/',
      },
      {
        label: 'Dissertation',
        url: 'https://doi.org/10.18154/RWTH-2026-06580',
      },
    ],
    tags: ['Unity', 'C#', 'xAPI', 'Learning Analytics', 'XR', 'Open Source', 'Modulare Architektur'],
  },
  {
    slug: 'virtual-booth',
    category: 'technical',
    title: 'Virtual Booth: AR Photo Booth & Live Mosaic',
    focus: 'SaaS · WebAR · Interaktive Fotoerlebnisse',
    organization: 'Kundenprojekt · Event-Branche',
    summary:
      'Ich verantwortete die Architektur und implementierte die Kernfunktionen einer produktiv eingesetzten Event-SaaS: Node.js-Backend, Vue.js-Frontend, eine AR Photo Booth mit WebGL und DeepAR sowie ein interaktives Three.js-Fotomosaik.',
    description:
      'Als Tech Lead verantwortete ich die Systemarchitektur und implementierte das Node.js-Backend, das Vue.js-Frontend sowie die zentralen visuellen Erlebnisse. Die browserbasierte AR Photo Booth nutzt WebGL und DeepAR für konfigurierbare Hintergrund-, Vordergrund- und Gesichtsfilter. Zusätzlich entwickelte ich mit Three.js ein interaktives Live Mosaic, das die aufgenommenen Fotos zu einer gemeinsamen Echtzeit-Visualisierung zusammenführt. Daraus entstand eine produktiv eingesetzte SaaS-Plattform für Events und Kampagnen.',
    tags: ['SaaS', 'Node.js', 'Vue.js', 'WebGL', 'DeepAR', 'Three.js', 'AR Photo Booth', 'Live Mosaic'],
  },
]

export const SERVICES = [
  {
    title: 'XR Scoping Sprint',
    price: 'ab 4.900 €',
    description:
      'Eine belastbare Entscheidungsgrundlage, bevor Konzept oder Umsetzung beauftragt werden.',
    bullets: [
      'Ziele, Stakeholder, Plattform, Risiken und Erfolgskriterien in einem fokussierten Workshop klären',
      'Machbarkeit, Aufwandsspanne und sinnvolle Umsetzungsreihenfolge bestimmen',
      'Kompakte Entscheidungsgrundlage für Budget, Förderung oder interne Freigabe',
    ],
  },
  {
    title: 'Didaktik & XR-Konzept',
    price: 'ab 9.900 €',
    description:
      'Auf Grundlage des Scopings oder vorhandener Anforderungen entsteht ein umsetzbares XR-Szenario mit Messkonzept.',
    bullets: [
      'Lernziele, Aufgabenlogik, Feedback und Transfer in die Praxis ausarbeiten',
      'Interaktionskonzept, technischer Zuschnitt und Analytics-Events definieren',
      'Auch als technischer Umsetzungspartner für Projektanträge und Verbundvorhaben',
    ],
  },
  {
    title: 'Neuer XR-Pilot / MVP',
    price: 'typ. 39.000–69.000 €',
    description:
      'Umsetzung eines fokussierten XR-Lern- oder Trainingsszenarios auf Basis eines freigegebenen Konzepts.',
    bullets: [
      'Umsetzung mit Unity oder Three.js/WebXR für ein klar begrenztes Szenario',
      'xAPI-/Telemetry-Grundlage, Monitoring und Pilotierung',
      'Report mit Ergebnissen, Risiken und nächster Ausbaustufe',
    ],
  },
  {
    title: 'Analytics Audit für XR-Apps',
    price: 'ab 6.900 €',
    description:
      'Für bestehende XR-Anwendungen, die messbar, evaluierbar oder forschungsfähig werden sollen.',
    bullets: [
      'App, Code, Datenflüsse, Lernziele und Evaluationsfähigkeit prüfen',
      'Messpunkte, Event-Modell und Integrationsrisiken sichtbar machen',
      'Umsetzbarer Plan für xAPI, LRS, Dashboard oder Report',
    ],
  },
  {
    title: 'Analytics-Integration',
    price: 'typ. 14.000–29.000 €',
    description:
      'Technische Integration von Datenpunkten, xAPI-/Telemetry-Pipeline und Monitoring nach Prüfung der vorhandenen App.',
    bullets: [
      'xAPI- oder Telemetry-Events in Unity-, Three.js- oder WebXR-Anwendungen integrieren',
      'Anbindung an LRS, Backend, Dashboard oder bestehende Systeme',
      'Datenqualitätscheck und Übergabe an Team, Forschung oder Training',
    ],
  },
  {
    title: 'Evaluation & Report',
    price: 'ab 12.900 €',
    description:
      'Methodische Begleitung, Auswertung und Ergebnisbericht für XR-Lern- und Trainingsszenarien.',
    bullets: [
      'Evaluationsdesign, Pilotstudie oder Nutzertest vorbereiten',
      'Interaktions-, Lern- oder Trainingsdaten auswerten und visualisieren',
      'Report mit Handlungsempfehlungen für Stakeholder und Weiterentwicklung',
      'Rekrutierung, Incentives und umfangreiche Feldstudien werden separat kalkuliert',
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
    title: 'AR-Service-Routen für Mitarbeiterschulung (iOS)',
    period: '2024 - 2025',
    featured: true,
    role: 'Technische Gesamtverantwortung (CTO)',
    sector: 'Gastronomie',
    stack: ['Flutter', 'Unity', 'C#', 'AR', 'iOS', 'Immersal', 'Supabase', 'PostgreSQL', '.NET MAUI'],
    image: '/project-images/cv-projects.svg',
    description:
      'Kundenprojekt (Projektvolumen ca. 70.000 €): Arbeitsplatznahe Schulung und Onboarding betrieblicher Serviceabläufe mit geführten AR-Routen. Das Unity/C#-Modul mit Immersal VPS wurde als eingebettete Komponente in eine Flutter-App integriert (Unity as a Library). Architektur, Technologieauswahl, Team-Koordination und Delivery bis zur Übergabe.',
    details:
      'Backend über Supabase (PostgreSQL): Auth, Storage, Datenmodell inkl. 2D-Map-Preview (SVG) für die Routenplanung. Digital Twin mit Matterport, 360°-Kamera und Immersal SDK; Unity-Editor für Service-Routen inkl. Routensimulation; .NET-MAUI-App zur Scan-Frame-Analyse; iOS-Releases via TestFlight.',
  },
  {
    title: 'Virtuelle Fotobox (Web & AR)',
    period: '2021 - xxxx',
    featured: true,
    role: 'Tech Lead',
    sector: 'Event-Branche',
    stack: ['TypeScript', 'Vue 3', 'Node.js', 'PostgreSQL', 'Three.js', 'WebGL', 'DeepAR', 'React', 'AWS'],
    image: '/project-images/cv-projects.svg',
    description:
      'Browserbasierte Foto-/AR-Plattform mit interaktiven Effekten und Editor-WebApp zur Konfiguration (Vue 3). Backend eigenständig auf Node.js + PostgreSQL migriert – seit 2021 durchgehend produktiv. Im Einsatz auf Events u. a. von Großunternehmen, politischen Parteien und Musical-/Theaterproduktionen.',
    details:
      '3D-Rendering im Browser (Three.js/WebGL), Face-Tracking mit DeepAR inkl. Smile-Erkennung. Tech Lead und Koordination externer Freelancer sowie eines Nearshore-Partners; Mitgestaltung der neuen Plattformarchitektur (React-Frontend, serviceorientiertes Backend).',
  },
  {
    title: 'BuddyAnalytics – Analyse-Dashboard für Studiengänge',
    period: '2022 - 2025',
    featured: true,
    role: 'Tech Lead (Konsortium aus drei Universitäten)',
    sector: 'Hochschulwesen',
    stack: ['TypeScript', 'Angular', 'Python', 'MongoDB', 'Node.js', 'Fastify', 'Docker'],
    image: '/project-images/cv-projects.svg',
    description:
      'Analytics-Dashboard für evidenzbasierte Curriculumentscheidungen im Hochschulkontext (Verbundprojekt, Projektvolumen 3,9 Mio. €). Tech Lead in einem Konsortium aus drei Universitäten – von Anforderungsklärung bis Konferenzpräsentation.',
    details:
      'Anforderungsklärung mit Stakeholdern (Curriculum Designer), Umsetzungsplanung, Reviews und Präsentation der Ergebnisse auf Konferenzen.',
  },
  {
    title: 'SWOFI – Modernisierung eines Lehr-Workflow-Systems',
    period: '2021 - 2025',
    featured: true,
    role: 'Entwicklung & Modernisierung',
    sector: 'Hochschulwesen',
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
    featured: true,
    role: 'Softwareentwickler (API-Design & Integration)',
    sector: '',
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
    featured: false,
    role: '',
    sector: '',
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
    featured: true,
    role: 'Konzeption & Entwicklung',
    sector: 'Forschung & Lehre (RWTH Aachen)',
    stack: ['Unity', 'C#', 'VR', 'Learning Analytics', 'xAPI'],
    image: '/project-images/cv-projects.svg',
    description:
      'VR-Lernumgebung zur interaktiven Vermittlung der Rendering-Pipeline (RWTH Aachen) mit xAPI-Integration und Pilotstudie. Grundlage für mehrere Publikationen und Abschlussarbeiten.',
    details:
      'Diente als praxisnahes XR-/Learning-Projekt mit Fokus auf didaktische Wirksamkeit, technische Instrumentierung und Forschungstransfer.',
  },
  {
    title: 'xAPI4Unity / OmiLAXR – Open-Source C#-Frameworks',
    period: '2021 - xxxx',
    featured: true,
    role: 'Framework-Konzeption & -Entwicklung (Dissertationsprojekt)',
    sector: 'Open Source / Forschung',
    stack: ['C#', 'Unity', 'xAPI', 'XR', 'Learning Analytics', 'Open Source'],
    image: '/project-images/omilaxr.svg',
    description:
      'Modulare C#-/Unity-Frameworks zur Integration und Auswertung von XR-Daten, u. a. Eye-Tracking-, Herzfrequenz- und Interaktionsdaten. Kern der Dissertation, als Open Source veröffentlicht.',
    details:
      'Anforderungsanalyse über Stakeholder-Interviews, iterative Weiterentwicklung, Developer-Dokumentation und API-Beispiele, Workshops und Onboarding sowie wissenschaftliche Publikationen.',
  },
  {
    title: 'LiMoxAPI Monitoring Tool',
    period: '2022 - xxxx',
    featured: false,
    role: '',
    sector: '',
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
    featured: false,
    role: '',
    sector: '',
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
    featured: false,
    role: '',
    sector: '',
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
      'Abschluss Dr.-Ing. (Juni 2026), Note: magna cum laude.',
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
    position: 'XR-/Software-Berater & Technical Lead',
    start: 'Apr 2024',
    link: 'https://goerzen.consulting',
    end: 'heute',
    tasks: [
      'Konzeption und Umsetzung produktionsnaher XR-, AR- und Softwaresysteme mit Unity, C#/.NET, Flutter und Webtechnologien.',
      'Technische Gesamtverantwortung für eine AR-App zur arbeitsplatznahen Mitarbeiterschulung und zum Onboarding: Architektur, Technologieauswahl, Teamkoordination, Delivery und Übergabe.',
      'Begleitung von Anforderungsanalyse und Scoping über Prototyping und Integration bis Go-live, Evaluation und belastbarem Ergebnisbericht.',
      'Einbindung spezialisierter Freelancer für 3D, Design, Entwicklung oder Datenanalyse, wenn der Projektrahmen zusätzliche Expertise verlangt.',
    ],
  },
  {
    company: 'RWTH Aachen University',
    location: 'Aachen',
    position: 'Wissenschaftlicher Mitarbeiter',
    start: 'Apr 2021',
    link: 'https://learntech.rwth-aachen.de',
    end: 'Sep 2026',
    tasks: [
      'Konzeption, Entwicklung und Evaluation von XR-Lernszenarien sowie des modularen OmiLAXR-Frameworks für xAPI-basiertes Learning Analytics.',
      'Beratung externer Projektteams bei der Integration von XR-Interaktionsdaten und Analytics, unter anderem bei Teach-R und Inside the Router.',
      'Anforderungsanalyse, Stakeholder-Interviews, Prototyping, Pilotstudien und wissenschaftlich belastbare Auswertung.',
      'Technische Koordination, Reviews und Umsetzung in Forschungs- und Verbundprojekten sowie Betreuung studentischer Entwicklungsarbeiten.',
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
      'Technische Leitung einer produktiv eingesetzten Event-Tech-Plattform mit Virtual Booth, WebAR und Live Mosaic.',
      'Interaktive 3D- und Mosaik-Visualisierungen mit Three.js/WebGL sowie Face-Tracking und konfigurierbare AR-Effekte.',
      'Koordination interner und externer Entwickler, Architekturentscheidungen, Qualitätssicherung und Delivery bis zur Auslieferung.',
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
