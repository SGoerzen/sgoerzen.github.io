type IconProps = {
  className?: string
}

export function GithubIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 1.5a10.5 10.5 0 0 0-3.32 20.46c.53.1.72-.23.72-.5v-1.95c-2.96.64-3.58-1.26-3.58-1.26-.48-1.2-1.18-1.52-1.18-1.52-.96-.66.07-.65.07-.65 1.07.08 1.63 1.08 1.63 1.08.94 1.6 2.47 1.14 3.07.87.1-.67.37-1.14.67-1.4-2.37-.27-4.87-1.17-4.87-5.2 0-1.14.42-2.07 1.08-2.8-.1-.27-.47-1.37.11-2.84 0 0 .89-.28 2.91 1.07a10.2 10.2 0 0 1 5.3 0c2.02-1.35 2.9-1.07 2.9-1.07.59 1.47.22 2.57.11 2.84.67.73 1.08 1.66 1.08 2.8 0 4.04-2.5 4.93-4.88 5.2.38.32.72.95.72 1.91v2.83c0 .28.19.61.73.5A10.5 10.5 0 0 0 12 1.5Z" />
    </svg>
  )
}

export function GitlabIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="m12 22.25 3.68-11.33H8.32L12 22.25Z" />
      <path d="M12 22.25 8.32 10.92H3.17L12 22.25Z" />
      <path d="M3.17 10.92 2.05 14.36a.76.76 0 0 0 .28.85L12 22.25 3.17 10.92Z" />
      <path d="M3.17 10.92h5.15L6.1 4.08a.38.38 0 0 0-.72 0L3.17 10.92Z" />
      <path d="m12 22.25 3.68-11.33h5.15L12 22.25Z" />
      <path d="m20.83 10.92 1.12 3.44a.76.76 0 0 1-.28.85L12 22.25l8.83-11.33Z" />
      <path d="M20.83 10.92h-5.15l2.22-6.84a.38.38 0 0 1 .72 0l2.21 6.84Z" />
    </svg>
  )
}

export function LinkedInIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.56A1.97 1.97 0 0 0 5.24 3 1.98 1.98 0 1 0 7.16 4.94ZM20 12.92c0-3.47-1.85-5.08-4.31-5.08a3.72 3.72 0 0 0-3.33 1.83V8.5H9V20h3.36v-6.04c0-1.6.3-3.14 2.3-3.14 1.97 0 2 1.84 2 3.25V20H20v-7.08Z" />
    </svg>
  )
}
