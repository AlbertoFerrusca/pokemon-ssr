import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Meta,Title } from '@angular/platform-browser';

@Component({
  selector:'page-pricing',
  imports: [],
  templateUrl: './pricing-pages.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PricingPages implements OnInit{

  private title =inject(Title);
  private meta= inject(Meta);
  //private platform=inject(PLATFORM_ID);
  ngOnInit(): void {
    // if (isPlatformBrowser(this.platform)){
    //  document.title='pricing Page'
    // }

    this.title.setTitle('Pricing Page');
    this.meta.updateTag({name:'descripcion',content:'Este es mi pricing page'});
    this.meta.updateTag({name:'og:title',content:'pricing Page'});
    this.meta.updateTag({name:'keywords',content:'Hola, Alberto Ferrusca Gonzalez'});
  }
}
