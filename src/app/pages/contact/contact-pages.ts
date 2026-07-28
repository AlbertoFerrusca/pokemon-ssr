import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Meta,Title } from '@angular/platform-browser';

@Component({
  selector:'page-contact',
  imports: [],
  templateUrl: './contact-pages.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ContactPages implements OnInit{

  private title =inject(Title);
  private meta= inject(Meta);
  ngOnInit(): void {
    this.title.setTitle('Contact Page');
    this.meta.updateTag({name:'descripcion',content:'Este es mi contact  page'});
    this.meta.updateTag({name:'og:title',content:'Contac Page'});
    this.meta.updateTag({name:'keywords',content:'Hola, Alberto Ferrusca Gonzalez'});
  }
}
