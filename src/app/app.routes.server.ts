import { RenderMode, ServerRoute } from '@angular/ssr';

/**
 * The whole site is generated as static HTML at build time, so search engines and
 * AI crawlers (which often don't run JavaScript) can read every section.
 */
export const serverRoutes: ServerRoute[] = [{ path: '**', renderMode: RenderMode.Prerender }];
