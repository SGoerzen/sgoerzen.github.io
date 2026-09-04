/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL?: string;
  readonly PUBLIC_TRACKBOXX_SITE_ID?: string;
  readonly PUBLIC_TURNSTILE_SITE_KEY?: string;
}
