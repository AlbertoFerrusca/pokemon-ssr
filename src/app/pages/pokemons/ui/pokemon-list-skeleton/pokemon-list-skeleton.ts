import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PokemonCard } from "../../components/pokemon-card/pokemon-card";

@Component({
  selector: 'pokemon-list-skeleton',
  standalone:true,
  imports: [],
  templateUrl: './pokemon-list-skeleton.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListSkeleton {}
