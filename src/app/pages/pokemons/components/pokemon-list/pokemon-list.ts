import { ChangeDetectionStrategy, Component,input } from '@angular/core';
import { PokemonCard } from "../pokemon-card/pokemon-card";
import { SimplePokemeon } from '../../interfaces/simple-pokemeon.interface';

@Component({
  selector: 'pokemon-list',
  imports: [PokemonCard],
  templateUrl: './pokemon-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonList {

  public pokemons=input.required<SimplePokemeon[]>();

}
