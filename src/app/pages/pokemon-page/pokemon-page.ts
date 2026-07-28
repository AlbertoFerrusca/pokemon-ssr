import { ApplicationRef, ChangeDetectionStrategy, Component, computed,
  inject, OnDestroy, OnInit, signal} from '@angular/core';
import {PokemonList} from '../../pages/pokemons/components/pokemon-list/pokemon-list';
import { PokemonListSkeleton } from "../pokemons/ui/pokemon-list-skeleton/pokemon-list-skeleton";
import { PokemonService } from '../pokemons/services/pokemon';
import { SimplePokemeon } from '../pokemons/interfaces/simple-pokemeon.interface';
import { ActivatedRoute, Router } from '@angular/router';
import {toSignal} from '@angular/core/rxjs-interop'
import { map,tap } from 'rxjs';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'pokemon-page',
  standalone:true,
  imports: [PokemonList, PokemonListSkeleton],
  templateUrl: './pokemon-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

//export default class PokemonPage implements OnInit, OnDestroy{

export default class PokemonPage implements OnInit{


 /*public isLoading=signal(true);
 public appRef=inject(ApplicationRef);
 private $appState=this.appRef.isStable.subscribe(isStable=>{
  console.log(isStable);
 })

 ngOnDestroy(): void {
   this.$appState.unsubscribe();
}*/

//public isLoading=signal(true);

private pokemonsService=inject(PokemonService);
public pokemons_Service=signal<SimplePokemeon[]>([]);
private route=inject(ActivatedRoute);
private router= inject(Router);
private title=inject(Title);
public currentPage=toSignal<number>(
  this.route.queryParamMap.pipe(
    map(param=>param.get('page')?? '1' ),
    map(page=>(isNaN(+page) ? 1: +page)),
    map(page=>Math.max(1,page))
  )
);


  ngOnInit(): void {
  /* setTimeout(()=>{
      this.isLoading.set(false);
    },5000);*/
   this.loadPokemons();
  }


public loadPokemons(nextPage=0){

const pageToLoad=this.currentPage()!+nextPage;
this.pokemonsService.loadPage(pageToLoad).
pipe(
  tap(()=>this.router.navigate([],{queryParams:{page:pageToLoad}})),
  tap(()=>this.title.setTitle(`Pokemos SSR -page ${pageToLoad}`))
).
subscribe(poks=>{
  this.pokemons_Service.set(poks);
})

}

}
