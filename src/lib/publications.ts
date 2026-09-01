export type PublicationEntry = {
  title: string
  authors: string
  year: number
  venue: string
  link?: string
  abstract?: string
}

export type SupervisedWorkEntry = {
  title: string
  student: string
  year: number
  degree: 'Bachelorarbeit' | 'Masterarbeit'
  institution: string
  link?: string
  abstract?: string
}

export const PUBLICATIONS_PAGE = {
  TITLE: 'Publikationen / Beiträge',
  DESCRIPTION:
    'Wissenschaftliche Publikationen, Beiträge und betreute Abschlussarbeiten von Dr.-Ing. Sergej Görzen.',
}

export const PUBLICATIONS: PublicationEntry[] = [
  {
    title:
      'Reducing integration complexity of learning analytics in eXtended reality through a modular and standards-based pipeline: Design and evaluation of the OmiLAXR framework',
    authors: 'Görzen, Sergej',
    year: 2026,
    venue: 'Dissertation · RWTH Aachen University',
    link: 'https://doi.org/10.18154/RWTH-2026-06580',
    abstract:
      'Entwickelt und evaluiert OmiLAXR als modulare, standardbasierte Pipeline, um Learning Analytics verlässlich und mit geringerem Integrationsaufwand in XR-Anwendungen einzusetzen.',
  },
  {
    title: 'Learning Analytics Data Visualization in a Virtual Reality Teacher Training Simulation',
    authors:
      'Heinemann, Birte; Görzen, Sergej; Dragoljic, Ana; Hansen, Sven; Hartanto, Jasmin; Meiendresch, Lars Florian; Recker, Jona; Schwarze, Maurice; Troll, Marc; Schroeder, Ulrik',
    year: 2025,
    venue: 'Companion Proceedings of LAK 2025',
    link: 'https://publications.rwth-aachen.de/record/1029078',
    abstract:
      'Beschreibt die Visualisierung von Learning-Analytics-Daten aus einer VR-Simulation für die Lehrkräftebildung und unterstützt die Reflexion komplexer Trainingssituationen.',
  },
  {
    title: 'A generalized and modular pattern for a systematic integration of Learning Analytics in eXtended Reality',
    authors: 'Görzen, Sergej; Heinemann, Birte; Schroeder, Ulrik',
    year: 2025,
    venue: 'Learning Analytics from Virtual Reality Workshop · LAK 2025',
    link: 'https://publications.rwth-aachen.de/record/1010906',
    abstract:
      'Schlägt ein generalisiertes, modulares Integrationsmuster vor, mit dem XR-Anwendungen systematisch für Learning Analytics instrumentiert werden können.',
  },
  {
    title: 'LiMoxAPI - Supporting XR developers with a Live Monitoring Tool for xAPI',
    authors: 'Görzen, Sergej; Thiesen, Georg; Heinemann, Birte; Schroeder, Ulrik',
    year: 2025,
    venue: 'Learning Analytics from Virtual Reality Workshop · LAK 2025',
    link: 'https://publications.rwth-aachen.de/record/1010858',
    abstract:
      'Präsentiert ein Live-Monitoring-Tool, das XR-Entwickler:innen bei der Prüfung und Fehlersuche von xAPI-Statements unterstützt.',
  },
  {
    title: 'LAK-WS 2025: Joint Proceedings of LAK 2025 Workshops',
    authors:
      'Hlosta, Martin; Moser, Ivan; Winer, Amir; Geri, Nitza; Heinemann, Birte; Görzen, Sergej; et al. (Hrsg.)',
    year: 2025,
    venue: 'CEUR Workshop Proceedings, Vol. 3995',
    link: 'https://ceur-ws.org/Vol-3995/',
    abstract:
      'Gemeinsamer Tagungsband der LAK-Workshops 2025 mit Beiträgen zu Learning Analytics, Methoden, Infrastruktur und Anwendungsszenarien.',
  },
  {
    title: 'Towards using the xAPI specification for Learning Analytics in Virtual Reality',
    authors: 'Görzen, Sergej; Heinemann, Birte; Schroeder, Ulrik',
    year: 2024,
    venue: 'Learning Analytics from Virtual Reality Workshop · LAK 2024',
    link: 'https://publications.rwth-aachen.de/record/996055',
    abstract:
      'Diskutiert Designentscheidungen und Herausforderungen bei der xAPI-basierten Erfassung von Ereignissen in VR-Lernumgebungen.',
  },
  {
    title:
      'A Learning Analytics Dashboard to Investigate the Influence of Interaction in a VR Learning Application',
    authors:
      'Heinemann, Birte; Görzen, Sergej; Dragoljic, Ana; Meiendresch, Lars Florian; Troll, Marc; Schroeder, Ulrik',
    year: 2024,
    venue: 'Companion Proceedings of LAK 2024',
    link: 'https://publications.rwth-aachen.de/record/996054',
    abstract:
      'Stellt ein Dashboard vor, mit dem unterschiedliche Interaktions- und Immersionsvarianten in einer VR-Lernanwendung vergleichbar ausgewertet werden können.',
  },
  {
    title: 'Technology-enhanced learning of the computer graphics rendering pipeline in virtual reality',
    authors: 'Görzen, Sergej',
    year: 2024,
    venue: 'Masterarbeit · abgeschlossen 2020, veröffentlicht 2024',
    link: 'https://doi.org/10.18154/RWTH-2021-03146',
    abstract:
      'Untersucht eine VR-Lernumgebung zur interaktiven Vermittlung der Computergrafik-Rendering-Pipeline und bildet die Grundlage für RePiX VR.',
  },
  {
    title: 'Faszination Computergrafik - Die Rendering Pipeline interaktiv in VR erleben',
    authors: 'Heinemann, Birte; Görzen, Sergej; Schroeder, Ulrik',
    year: 2023,
    venue: 'Informatik Spektrum',
    link: 'https://publications.rwth-aachen.de/record/996053',
    abstract:
      'Bereitet die Rendering-Pipeline als interaktives VR-Erlebnis für Lehre und Wissenschaftskommunikation auf.',
  },
  {
    title:
      'Herausforderungen der Entwicklung von skalierbaren Bildungstechnologien: Nuts & Bolts – Die Technik hinter den Kulissen der digitalen Bildungsforschung',
    authors: 'Görzen, Sergej; Heinemann, Birte; Sokol, Volodymyr; Schroeder, Ulrik',
    year: 2023,
    venue: 'Workshops der 21. Fachtagung Bildungstechnologien (DELFI)',
    link: 'https://publications.rwth-aachen.de/record/996026',
    abstract:
      'Analysiert typische Architektur- und Prozessprobleme beim Aufbau skalierbarer Bildungssoftware und leitet technische Handlungsempfehlungen ab.',
  },
  {
    title: 'Ansätze um der Darstellungsflüchtigkeit in Virtual Reality entgegenzuwirken',
    authors: 'Heinemann, Birte; Görzen, Sergej; Gotzen, Daniel; Schroeder, Ulrik',
    year: 2023,
    venue: 'DELFI 2023',
    link: 'https://publications.rwth-aachen.de/record/996014',
    abstract:
      'Untersucht Maßnahmen gegen die Flüchtigkeit visueller Informationen in VR und deren Einfluss auf Lernprozesse.',
  },
  {
    title: 'Weiterentwicklung eines Dashboards zur digitalen Betreuung wissenschaftlicher Schreibprozesse',
    authors: 'Martius, Joshua; Görzen, Sergej; Judel, Sven; Schroeder, Ulrik',
    year: 2023,
    venue: 'Tagungsbandbeitrag',
    link: 'https://publications.rwth-aachen.de/record/971168',
    abstract:
      'Beschreibt die Weiterentwicklung eines Dashboards zur Begleitung und Unterstützung wissenschaftlicher Schreibprozesse.',
  },
  {
    title:
      'Ein Konzept zur Evaluierung eines Ökosystems für die Integration von Learning Analytics in Virtual Reality',
    authors: 'Görzen, Sergej; Heinemann, Birte; Schroeder, Ulrik',
    year: 2023,
    venue: 'Poster · DELFI 2023',
    link: 'https://publications.rwth-aachen.de/record/959873',
    abstract:
      'Beschreibt ein Evaluierungskonzept für ein technisches und didaktisches Ökosystem zur Integration von Learning Analytics in VR-Anwendungen.',
  },
  {
    title: 'Teaching the basics of computer graphics in virtual reality',
    authors: 'Heinemann, Birte; Görzen, Sergej; Schroeder, Ulrik',
    year: 2023,
    venue: 'Computers & Graphics, 112, 1–12',
    link: 'https://doi.org/10.1016/j.cag.2023.03.001',
    abstract:
      'Evaluiert ein VR-Lernszenario zur Vermittlung von Grundlagen der Computergrafik und berichtet Ergebnisse zu Verständnis und Lernerleben.',
  },
  {
    title: 'A Combined Approach of Process Mining and Rule-Based AI for Study Planning and Monitoring in Higher Education',
    authors:
      'Wagner, Miriam; Helal, Hayyan; Röpke, René; Judel, Sven; Doveren, Jens; Görzen, Sergej; Soudmand, Pouya; Lakemeyer, Gerhard; Schroeder, Ulrik; van der Aalst, Wil M. P.',
    year: 2023,
    venue: 'Lecture Notes in Networks and Systems, Vol. 633',
    link: 'https://publications.rwth-aachen.de/record/954737',
    abstract:
      'Kombiniert Process Mining mit regelbasierter KI zur datenbasierten Analyse und Unterstützung von Studienverläufen.',
  },
  {
    title:
      'Dataset, Experimental Guide, Learning Analytics (Jupyter Notebook) to “Teaching the basics of computer graphics in virtual reality”',
    authors: 'Heinemann, Birte; Görzen, Sergej; Schroeder, Ulrik',
    year: 2023,
    venue: 'Forschungsdatensatz und Begleitmaterial',
    link: 'https://doi.org/10.18154/RWTH-2022-10631',
    abstract:
      'Stellt Datensatz, Auswertungsnotebook und Studienleitfaden für Reproduzierbarkeit und Nachnutzung bereit.',
  },
  {
    title:
      'Ein Konzept für die Unterstützung der Entwicklung von Virtual Reality Lernszenarien durch die Einbindung von Learning Analytics und Open Educational Resources',
    authors: 'Görzen, Sergej; Heinemann, Birte; Schroeder, Ulrik',
    year: 2022,
    venue: 'Poster · DELFI 2022',
    link: 'https://publications.rwth-aachen.de/record/960680',
    abstract:
      'Verdichtet das Konzept zur Verbindung von Learning Analytics und offenen Bildungsressourcen in der Entwicklung von VR-Lernszenarien.',
  },
  {
    title: 'Offene Entwicklung nachhaltiger Bildungstechnologien',
    authors: 'Heinemann, Birte; Görzen, Sergej; Röpke, René; Ehlenz, Matthias Siegfried; Schroeder, Ulrik',
    year: 2022,
    venue: 'DELFI 2022',
    link: 'https://publications.rwth-aachen.de/record/955693',
    abstract:
      'Diskutiert offene Entwicklungsprozesse und wiederverwendbare technische Grundlagen für nachhaltige Bildungstechnologien.',
  },
  {
    title: 'Open Educational Resources and Virtual Reality: An inventory',
    authors: 'Görzen, Sergej; Heinemann, Birte; Heim, Marlene; Schroeder, Ulrik',
    year: 2022,
    venue: 'Proceedings of DELFI Workshops 2022',
    link: 'https://doi.org/10.18420/DELFI2022-WS-73',
    abstract:
      'Inventarisiert Open Educational Resources für VR-Lernszenarien und zeigt Potenziale sowie Lücken für die didaktische Wiederverwendung.',
  },
  {
    title: 'xAPI Made Easy: A Learning Analytics Infrastructure for Interdisciplinary Projects',
    authors: 'Heinemann, Birte; Ehlenz, Matthias Siegfried; Görzen, Sergej; Schroeder, Ulrik',
    year: 2022,
    venue: 'International Journal of Online and Biomedical Engineering, 18(14), 99–113',
    link: 'https://doi.org/10.3991/ijoe.v18i14.33391',
    abstract:
      'Präsentiert eine Infrastruktur, mit der xAPI in interdisziplinären Projekten leichter und konsistenter eingesetzt werden kann.',
  },
  {
    title: 'Structured Digital Writing Lab: Workflow, Application and Evaluation',
    authors: 'Uckelmann, Dieter; Judel, Sven; Görzen, Sergej; Greven, Christoph; Schroeder, Ulrik',
    year: 2022,
    venue: 'International Journal of Online and Biomedical Engineering, 18(14), 133–146',
    link: 'https://doi.org/10.3991/ijoe.v18i14.35075',
    abstract:
      'Beschreibt Workflow, Anwendung und Evaluation eines digitalen Schreiblabors zur strukturierten Begleitung wissenschaftlicher Schreibprozesse.',
  },
  {
    title:
      'Ein Konzept zur Unterstützung der Entwicklung von Virtual Reality Lernszenarien durch die Einbindung von Learning Analytics und Open Educational Resources',
    authors: 'Görzen, Sergej; Heinemann, Birte; Schroeder, Ulrik',
    year: 2022,
    venue: 'DELFI 2022',
    link: 'https://publications.rwth-aachen.de/record/853353',
    abstract:
      'Stellt ein Konzept vor, mit dem Learning Analytics und offene Bildungsressourcen systematisch in den Entwicklungsprozess von VR-Lernszenarien eingebunden werden.',
  },
  {
    title: 'Systematic Design for Effective Learning in Virtual Reality',
    authors: 'Heinemann, Birte; Görzen, Sergej; Schroeder, Ulrik',
    year: 2022,
    venue: 'ICALT 2022',
    link: 'https://publications.rwth-aachen.de/record/853349',
    abstract:
      'Formuliert ein systematisches Vorgehen zur Gestaltung didaktisch wirksamer VR-Lernszenarien.',
  },
  {
    title:
      "Overview of Open Educational VR applications for the paper 'Open Educational Resources and Virtual Reality: An inventory'",
    authors: 'Görzen, Sergej; Heinemann, Birte; Heim, Marlene; Schroeder, Ulrik',
    year: 2022,
    venue: 'Multimedia / Forschungsdaten',
    link: 'https://publications.rwth-aachen.de/record/853347',
    abstract:
      'Ergänzendes Material mit einem kuratierten Überblick über offene VR-Lernanwendungen.',
  },
  {
    title: 'RePiX VR: Learning environment for the Rendering Pipeline in Virtual Reality',
    authors: 'Heinemann, Birte; Görzen, Sergej; Schroeder, Ulrik',
    year: 2022,
    venue: 'Eurographics 2022 · Education Papers',
    link: 'https://publications.rwth-aachen.de/record/849797',
    abstract:
      'Beschreibt RePiX VR als Lernumgebung, in der die Computergrafik-Rendering-Pipeline interaktiv und räumlich erfahrbar wird.',
  },
]

export const SUPERVISED_WORKS: SupervisedWorkEntry[] = [
  {
    title: 'Concept and implementation of the OmiLAXR ecosystem for the Godot Engine',
    student: 'Fabian Mohn',
    year: 2026,
    degree: 'Bachelorarbeit',
    institution: 'RWTH Aachen University',
    link: 'https://publications.rwth-aachen.de/record/1035119',
  },
  {
    title: 'Realization of the OmiLAXR framework in WebXR environments',
    student: 'Alben Bekyarov',
    year: 2026,
    degree: 'Bachelorarbeit',
    institution: 'RWTH Aachen University',
    link: 'https://publications.rwth-aachen.de/record/1032163',
  },
  {
    title: 'Evaluation and test-driven integration of SWOFI lecturer interface',
    student: 'Peter Wallmeyer',
    year: 2025,
    degree: 'Bachelorarbeit',
    institution: 'RWTH Aachen University',
    link: 'https://publications.rwth-aachen.de/record/1010921',
  },
  {
    title: 'Enhancing usability and data integrity in LiMoxAPI for LA developers',
    student: 'Lea Sieler',
    year: 2025,
    degree: 'Bachelorarbeit',
    institution: 'RWTH Aachen University',
    link: 'https://publications.rwth-aachen.de/record/1010909',
  },
  {
    title: 'A learning analytics monitoring tool for supporting VR developers',
    student: 'Georg Thiesen',
    year: 2024,
    degree: 'Bachelorarbeit',
    institution: 'RWTH Aachen University',
    link: 'https://publications.rwth-aachen.de/record/1002762',
  },
  {
    title: 'Eine Webanwendung zur Lerndatenerfassung durch Videoannotation mit xAPI',
    student: 'Egzon Ademi',
    year: 2024,
    degree: 'Masterarbeit',
    institution: 'RWTH Aachen University',
    link: 'https://publications.rwth-aachen.de/record/977484',
  },
  {
    title: 'Interactive visualization of rasterization as step of the CG rendering pipeline in virtual reality',
    student: 'Julian Koch',
    year: 2024,
    degree: 'Bachelorarbeit',
    institution: 'RWTH Aachen University',
    link: 'https://publications.rwth-aachen.de/record/977480',
  },
  {
    title: 'Explorative analysis of multimodal data using VR learning analytics',
    student: 'Said Hatid Haschemi',
    year: 2023,
    degree: 'Bachelorarbeit',
    institution: 'RWTH Aachen University',
    link: 'https://publications.rwth-aachen.de/record/977616',
  },
  {
    title: 'Integrating gaze-based interaction into RePiX using mobile VR',
    student: 'Hasan Parves',
    year: 2023,
    degree: 'Masterarbeit',
    institution: 'RWTH Aachen University',
    link: 'https://publications.rwth-aachen.de/record/977615',
  },
  {
    title: 'Improving interdisciplinary research with user-friendly interfaces',
    student: 'Lars Florian Meiendresch',
    year: 2023,
    degree: 'Bachelorarbeit',
    institution: 'RWTH Aachen University',
    link: 'https://publications.rwth-aachen.de/record/975562',
  },
  {
    title: 'Interactive learning of 3D transformations in virtual reality',
    student: 'Ana Dragoljic',
    year: 2023,
    degree: 'Bachelorarbeit',
    institution: 'RWTH Aachen University',
    link: 'https://publications.rwth-aachen.de/record/975561',
  },
  {
    title: 'Effects of character design on presence experience in virtual reality applications',
    student: 'Qasim Sajid',
    year: 2023,
    degree: 'Masterarbeit',
    institution: 'RWTH Aachen University',
    link: 'https://publications.rwth-aachen.de/record/975560',
  },
  {
    title: 'Redesigning "SchülerlARbor Chemie" for Microsoft HoloLens',
    student: 'Felix Meinhardt',
    year: 2023,
    degree: 'Bachelorarbeit',
    institution: 'RWTH Aachen University',
    link: 'https://publications.rwth-aachen.de/record/975559',
  },
  {
    title: 'Enhancing learner assistance in RePiX VR',
    student: 'Sam Luc Caroll Mattiussi',
    year: 2023,
    degree: 'Masterarbeit',
    institution: 'RWTH Aachen University',
    link: 'https://publications.rwth-aachen.de/record/975347',
  },
  {
    title: 'Interactive summative assessment in an educational VR application',
    student: 'Andreas Martin Stiller',
    year: 2023,
    degree: 'Masterarbeit',
    institution: 'RWTH Aachen University',
    link: 'https://publications.rwth-aachen.de/record/973682',
  },
  {
    title: 'Development of a server component for the WebWriter system',
    student: 'Joshua Allius',
    year: 2023,
    degree: 'Bachelorarbeit',
    institution: 'RWTH Aachen University',
    link: 'https://publications.rwth-aachen.de/record/971628',
  },
  {
    title: 'An interface for connecting Educational WebXR Apps and Moodle',
    student: 'Rafail Stankov',
    year: 2023,
    degree: 'Masterarbeit',
    institution: 'RWTH Aachen University',
    link: 'https://publications.rwth-aachen.de/record/963851',
  },
  {
    title: 'Theory-based redesign of a VR learning environment for desktop',
    student: 'Thorben Sußebach',
    year: 2023,
    degree: 'Bachelorarbeit',
    institution: 'RWTH Aachen University',
    link: 'https://publications.rwth-aachen.de/record/963850',
  },
  {
    title: 'Designing an interactive visualization workflow for curriculum analytics',
    student: 'Aleksandar Timanov',
    year: 2023,
    degree: 'Masterarbeit',
    institution: 'RWTH Aachen University',
    link: 'https://publications.rwth-aachen.de/record/953418',
  },
  {
    title: 'Technology-enhanced learning in virtual reality: Light and shadow in computer graphics',
    student: 'Zihao Zhang',
    year: 2022,
    degree: 'Masterarbeit',
    institution: 'RWTH Aachen University',
    link: 'https://publications.rwth-aachen.de/record/977487',
  },
  {
    title: 'Rewatching and analyzing local scenes through interactive windows in extended reality',
    student: 'Daniel Gotzen',
    year: 2022,
    degree: 'Masterarbeit',
    institution: 'RWTH Aachen University',
    link: 'https://publications.rwth-aachen.de/record/856016',
  },
  {
    title: 'An architecture for easy xAPI integration for developers',
    student: 'Fabian Dünzer',
    year: 2022,
    degree: 'Masterarbeit',
    institution: 'RWTH Aachen University',
    link: 'https://publications.rwth-aachen.de/record/849942',
  },
  {
    title: 'The pocket guide for more refugees in computer science',
    student: 'Jamal Rnjbal',
    year: 2022,
    degree: 'Bachelorarbeit',
    institution: 'RWTH Aachen University',
    link: 'https://publications.rwth-aachen.de/record/849938',
  },
  {
    title: 'Multimodal learning analytics dashboard for VR data in Moodle',
    student: 'Ermir Bytyqi',
    year: 2022,
    degree: 'Bachelorarbeit',
    institution: 'RWTH Aachen University',
    link: 'https://publications.rwth-aachen.de/record/849933',
  },
  {
    title: 'Didaktische Analyse des Lerninhalts von RePiX VR',
    student: 'Philipp Koriath',
    year: 2022,
    degree: 'Bachelorarbeit',
    institution: 'RWTH Aachen University',
    link: 'https://publications.rwth-aachen.de/record/841011',
  },
]
