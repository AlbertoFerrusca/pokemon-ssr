import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Title,Meta } from '@angular/platform-browser';

@Component({
  selector:'about-pages',
  imports: [],
  templateUrl: './about-pages.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AboutPages implements OnInit{

  private title =inject(Title);
  private meta= inject(Meta);
  ngOnInit(): void {
    this.title.setTitle('About Page');
    this.meta.updateTag({name:'descripcion',content:'Este es mi about page'});
    this.meta.updateTag({name:'og:title',content:'About Page'});
    this.meta.updateTag({name:'keywords',content:'Hola, Alberto Ferrusca Gonzalez'});
  }


}
