import { RouterConfig } from '@angular/router';

import { DossiersComponent } from './index';

export const DossierRoutes: RouterConfig = [
    { 
      path: '', 
      terminal: true, 
      redirectTo: '/dossiers' 
    },
    { 
      path: 'dossiers', 
      component: DossiersComponent
    }
];