import { Routes } from '@angular/router';

export const routes: Routes = [

{
path: '',
loadComponent: () => import('./pages/about-pages/about-pages'),
},
{
  path: 'pokemons',
  loadComponent:()=>import ('./pages/pokemon-page/pokemon-page'),
},

{
  path: 'pokemons/:id',
  loadComponent:()=>import ('./pages/pokemons-page/pokemon-page-component'),
},

{
  path: 'about',
  loadComponent:()=>import ('./pages/about-pages/about-pages'),
},
{
  path: 'pricing',
  loadComponent:()=>import ('./pages/pricing-page/pricing-pages'),
},
{
  path: 'contact',
  loadComponent:()=>import ('./pages/contact/contact-pages'),
},
{
  path: '**',
  redirectTo:'about',
},


];
