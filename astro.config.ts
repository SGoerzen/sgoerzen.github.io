import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'

const configuredSite = process.env.PUBLIC_SITE_URL
const site = (() => {
  if (!configuredSite) return undefined
  try {
    return new URL(configuredSite).toString()
  } catch {
    console.warn(
      `[astro.config] Ignoring invalid PUBLIC_SITE_URL: "${configuredSite}". Expected an absolute URL like "https://example.com".`,
    )
    return undefined
  }
})()

// https://astro.build/config
export default defineConfig({
  // For GitHub Pages: if your repo is named `username.github.io`, use `/`
  // Otherwise, use `/<repository-name>/`
  // This can be overridden by the BASE_URL environment variable during build
  base: process.env.BASE_URL || '/',
  site,
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
})
