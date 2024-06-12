import { ApplicationConfig } from '@angular/core';
import { provideRouter, PreloadAllModules,  withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { appEffects, appStore } from '../store/store';

export const appConfig: ApplicationConfig = {
  providers: 
  [
    provideHttpClient(), 
    provideStore(appStore),
    provideEffects(appEffects),
    provideRouter(routes), 
    provideClientHydration(),
    provideHttpClient(),
  ]
};
