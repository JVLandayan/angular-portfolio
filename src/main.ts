import { inject } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';

injectSpeedInsights();
inject();

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
