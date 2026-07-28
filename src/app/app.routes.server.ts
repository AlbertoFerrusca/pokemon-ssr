import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'pokemons/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
    return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    ];
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
