import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';
import { config } from './app/app.config.server';

/** Used only at build time to prerender index.html (see angular.json `outputMode: static`). */
const bootstrap = (context: BootstrapContext) => bootstrapApplication(AppComponent, config, context);

export default bootstrap;
