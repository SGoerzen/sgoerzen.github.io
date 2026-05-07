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
    'Ausgewählte wissenschaftliche Publikationen und Beiträge von Sergej Görzen mit Kurzbeschreibungen.',
}

export const PUBLICATIONS: PublicationEntry[] = [
  {
    title: 'Open Educational Resources and Virtual Reality: An Inventory',
    authors: 'Görzen, Sergej; Heinemann, Birte; Heim, Marlene; Schroeder, Ulrik',
    year: 2022,
    venue: 'Proceedings of DELFI Workshops 2022',
    link: 'https://doi.org/10.18420/DELFI2022-WS-73',
    abstract:
      'Inventarisiert verfügbare Open Educational Resources für VR-Lernszenarien und zeigt Potenziale sowie Lücken für didaktisch belastbare Wiederverwendung.',
  },
  {
    title:
      'Ein Konzept zur Unterstützung der Entwicklung von Virtual Reality Lernszenarien durch die Einbindung von Learning Analytics und Open Educational Resources',
    authors: 'Görzen, Sergej; Heinemann, Birte; Schroeder, Ulrik',
    year: 2022,
    venue: 'DELFI 2022',
    abstract:
      'Stellt ein Konzept vor, mit dem LA-Daten und OER systematisch in den Entwicklungsprozess von VR-Lernszenarien eingebunden werden.',
  },
  {
    title:
      'Ein Konzept zur Evaluierung eines Ökosystems für die Integration von Learning Analytics in Virtual Reality',
    authors: 'Görzen, Sergej; Heinemann, Birte; Schroeder, Ulrik',
    year: 2023,
    venue: 'DELFI 2023',
    abstract:
      'Beschreibt ein Evaluierungskonzept für ein technisches und didaktisches Ökosystem zur Integration von Learning Analytics in VR-Anwendungen.',
  },
  {
    title: 'Towards the Automatization of Integrating Learning Analytics into Virtual Reality Using xAPI',
    authors: 'Görzen, Sergej; Heinemann, Birte; Schroeder, Ulrik',
    year: 2024,
    venue: 'LAK24 Companion Proceedings',
    abstract:
      'Diskutiert eine teilweise automatisierte Pipeline zur xAPI-basierten Instrumentierung von VR-Lernszenarien.',
  },
  {
    title: 'Herausforderungen der Entwicklung von skalierbaren Bildungstechnologien',
    authors: 'Görzen, Sergej; Heinemann, Birte; Sokol, Volodymyr; Schroeder, Ulrik',
    year: 2023,
    venue: 'Workshops der 21. Fachtagung Bildungstechnologien (DELFI)',
    link: 'https://doi.org/10.18420/WSDELFI2023-30',
    abstract:
      'Analysiert typische Architektur- und Prozessprobleme beim Aufbau skalierbarer Bildungssoftware und leitet technische Handlungsempfehlungen ab.',
  },
  {
    title: 'xAPI Made Easy: A Learning Analytics Infrastructure for Interdisciplinary Projects',
    authors: 'Heinemann, Birte; Ehlenz, Matthias; Görzen, Sergej; Schroeder, Ulrik',
    year: 2022,
    venue: 'International Journal of Online and Biomedical Engineering (iJOE)',
    link: 'https://doi.org/10.3991/ijoe.v18i14.33391',
    abstract:
      'Präsentiert eine pragmatische Infrastruktur, um xAPI in interdisziplinären Projekten schnell einsetzbar zu machen.',
  },
  {
    title:
      'A Learning Analytics Dashboard to Investigate the Influence of Interaction in a VR Learning Application',
    authors:
      'Heinemann, Birte; Görzen, Sergej; Dragolijic, Ana; Meiendresch, Lars; Troll, Marc; Schroeder, Ulrik',
    year: 2024,
    venue: 'LAK24 Companion Proceedings',
    abstract:
      'Stellt ein Dashboard vor, mit dem Interaktions- und Immersionsvarianten in einer VR-Lernanwendung vergleichbar ausgewertet werden können.',
  },
  {
    title: 'Ansätze um der Darstellungsflüchtigkeit in Virtual Reality entgegenzuwirken',
    authors: 'Heinemann, Birte; Görzen, Sergej; Gotzen, Daniel; Schroeder, Ulrik',
    year: 2023,
    venue: 'DELFI 2023',
    abstract:
      'Untersucht Maßnahmen gegen die Flüchtigkeit visueller Information in VR und deren Einfluss auf Lernprozesse.',
  },
  {
    title: 'RePiX VR - Learning Environment for the Rendering Pipeline in Virtual Reality',
    authors: 'Heinemann, Birte; Görzen, Sergej; Schroeder, Ulrik',
    year: 2022,
    venue: 'Eurographics 2022 - Education Papers',
    abstract:
      'Beschreibt RePiX VR als Lernumgebung, um die Rendering-Pipeline interaktiv und räumlich erfahrbar zu machen.',
  },
  {
    title: 'Systematic Design of Effective Learning Scenarios for Virtual Reality',
    authors: 'Heinemann, Birte; Görzen, Sergej; Schroeder, Ulrik',
    year: 2022,
    venue: 'ICALT 2022',
    abstract:
      'Formuliert ein systematisches Vorgehen zur Gestaltung didaktisch wirksamer VR-Lernszenarien.',
  },
  {
    title: 'Teaching the Basics of Computer Graphics in Virtual Reality',
    authors: 'Heinemann, Birte; Görzen, Sergej; Schroeder, Ulrik',
    year: 2023,
    venue: 'Computers & Graphics, 112, 1-12',
    link: 'https://doi.org/10.1016/j.cag.2023.03.001',
    abstract:
      'Evaluiert ein VR-Lernszenario zur Vermittlung von Grundlagen der Computergrafik und berichtet Effekte auf Verständnis und Lernmotivation.',
  },
  {
    title:
      "Dataset, Experimental Guide, Learning Analytics (Jupyter Notebook) zu 'Teaching the Basics of Computer Graphics in Virtual Reality'",
    authors: 'Heinemann, Birte; Görzen, Sergej; Schroeder, Ulrik',
    year: 2023,
    venue: 'Research Data / Supplementary Material',
    abstract:
      'Stellt Datensatz, Auswertungsnotebook und Studienleitfaden für Reproduzierbarkeit und Nachnutzung bereit.',
  },
  {
    title: 'Faszination Computergrafik - Die Rendering Pipeline interaktiv in VR erleben',
    authors: 'Heinemann, Birte; Görzen, Sergej; Schroeder, Ulrik',
    year: 2023,
    venue: 'Beitrag / Outreach',
    abstract:
      'Überträgt Inhalte der Rendering-Pipeline in ein interaktives VR-Format für Lehre und Wissenschaftskommunikation.',
  },
  {
    title: 'A Combined Approach of Process Mining and Rule-Based AI for Study Planning and Monitoring in Higher Education',
    authors:
      'Witt, Clemens; Marx, Erik; Görzen, Sergej; Leonhardt, Thiemo; Judel, Sven; Schroeder, Ulrik',
    year: 2023,
    venue: 'Springer, Higher Education Learning Methodologies and Technologies Online',
    link: 'https://doi.org/10.1007/978-3-031-29885-1_5',
    abstract:
      'Kombiniert Process Mining mit regelbasierter KI zur datenbasierten Studienverlaufsanalyse und Unterstützungslogik.',
  },
  {
    title: 'Towards using the xAPI specification for Learning Analytics in Virtual Reality',
    authors: 'Görzen, Sergej; Heinemann, Birte; Schroeder, Ulrik',
    year: 2024,
    venue: 'LAK Workshops 2024',
    link: 'https://ceur-ws.org/Vol-3885/paper20.pdf',
    abstract:
      'Diskutiert Designentscheidungen und Stolpersteine bei der xAPI-basierten Erfassung von Ereignissen in VR-Lernumgebungen.',
  },
  {
    title: 'Evaluation of a framework for the integrating of Learning Analytics in Virtual Reality',
    authors: 'Görzen, Sergej; Heinemann, Birte; Schroeder, Ulrik',
    year: 2024,
    venue: 'Proceedings of DELFI Workshops 2024',
    abstract:
      'Bewertet ein Framework zur Integration von Learning Analytics in VR hinsichtlich Nutzbarkeit, Übertragbarkeit und Implementierungsaufwand.',
  },
  {
    title: 'A generalized and modular pattern for a systematic integration of Learning Analytics in eXtended Reality',
    authors: 'Görzen, Sergej; Heinemann, Birte; Schroeder, Ulrik',
    year: 2025,
    venue: 'Research contribution',
    abstract:
      'Schlägt ein modulares Integrationsmuster vor, um XR-Anwendungen konsistent für Learning Analytics zu instrumentieren.',
  },
  {
    title: 'LiMoxAPI - Supporting XR developers with a Live Monitoring Tool for xAPI',
    authors: 'Görzen, Sergej; Heinemann, Birte; Schroeder, Ulrik',
    year: 2025,
    venue: 'Research contribution / Tool paper',
    abstract:
      'Präsentiert ein Monitoring-Tool, das XR-Entwickler:innen bei der Live-Prüfung und Fehlersuche von xAPI-Statements unterstützt.',
  },
  {
    title: 'LAK-WS 2025: Joint Proceedings of LAK 2025 Workshops',
    authors: 'Leonhardt, Thiemo; Witt, Clemens; Hauke, Jan; Görzen, Sergej; ... (Editors)',
    year: 2025,
    venue: 'CEUR Workshop Proceedings',
    link: 'https://ceur-ws.org/Vol-3875/',
    abstract:
      'Sammelband der LAK-Workshops 2025 mit Beiträgen zu Learning Analytics, Methoden, Infrastruktur und Anwendungsszenarien.',
  },
  {
    title: 'Weiterentwicklung eines Dashboards zur digitalen Betreuung wissenschaftlicher Schreibprozesse',
    authors: 'Jurke, H.; Arnold, K.; Görzen, Sergej; ...',
    year: 2023,
    venue: 'Tagungsbandbeitrag',
    abstract:
      'Beschreibt die Weiterentwicklung eines Dashboards zur Begleitung und Unterstützung wissenschaftlicher Schreibprozesse.',
  },
  {
    title:
      "Overview of Open Educational VR applications for the paper 'Open Educational Resources and Virtual Reality: An inventory'",
    authors: 'Görzen, Sergej; Heinemann, Birte; Heim, Marlene; Schroeder, Ulrik',
    year: 2022,
    venue: 'Multimedia',
    abstract:
      'Ergänzendes Material mit kuratiertem Überblick über Open-Educational-VR-Anwendungen.',
  },
]

export const SUPERVISED_WORKS: SupervisedWorkEntry[] = [
  
]
