import { ChangeDetectionStrategy, Component, effect, input,computed } from '@angular/core';
import { SimplePokemeon } from '../../interfaces/simple-pokemeon.interface';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'pokemon-card',
  standalone:true,
  imports: [RouterLink],
  templateUrl: './pokemon-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonCard {
  public pokemon=input.required<SimplePokemeon>();
  public readonly pokemonImagen=computed(()=>`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.pokemon().id}.png`)
  //logeffect=effect(()=>{
 //   console.log(`pokemonCard `,this.pokemon());
 // })
}
