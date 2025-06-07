import { ServerRoute, RenderMode } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'daily-routine/:day',
    renderMode: RenderMode.Prerender,   
    getPrerenderParams: async () => {
      return [
        { day: 'Lunes' },
        { day: 'Martes' },
        { day: 'Miércoles' },
        { day: 'Jueves' },
        { day: 'Viernes' },
        { day: 'Sábado' }
      ];
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];

