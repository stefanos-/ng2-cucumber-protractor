import { provideRouter, RouterConfig } from '@angular/router';

import { DossiersComponent, DossierRoutes } from './dossiers/index';
import { ReferenceSubstancesComponent, ReferenceSustancesRoutes } from './reference-substances/index';

const routes: RouterConfig = [
  ...DossierRoutes,
  ...ReferenceSustancesRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];