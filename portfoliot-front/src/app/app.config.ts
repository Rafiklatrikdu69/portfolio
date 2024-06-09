import { ApplicationConfig } from '@angular/core';
import { provideRouter, PreloadAllModules,  withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: 
  [
    provideRouter(
      routes,
      withPreloading(PreloadAllModules)
  ), 
    provideClientHydration(),
    provideHttpClient(),
  ]
};
