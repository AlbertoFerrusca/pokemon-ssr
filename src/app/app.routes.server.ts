import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'pokemons/:id',
    //path: 'pokemons/:name',
    renderMode: RenderMode.Prerender,
    //renderMode: RenderMode.Server,
    async getPrerenderParams() {
       return Array.from(
        {length:151},
        (_,i)=>({
         id: String(i + 1),

        })
       );
    }
  },
  {
    path:'pokemons/page/:page',
    //renderMode:RenderMode.Server,
    renderMode:RenderMode.Prerender,
    async getPrerenderParams() {
     return Array.from(
         {length:10},
         (_,i)=>({
         page:String(i + 1),
      })
    ); 
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
