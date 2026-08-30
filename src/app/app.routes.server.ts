import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    //path: 'pokemons/:id',
    path: 'pokemons/:name',
    //renderMode: RenderMode.Prerender,
    renderMode: RenderMode.Server,
    /*async getPrerenderParams() {
    return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    ];
    }*/
  },
  {
    path:'pokemons/page/:page',
    renderMode:RenderMode.Server, 
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
