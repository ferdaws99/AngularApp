import { NgModule,LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{registerLocaleData} from '@angular/common';
import * as fr from '@angular/common/locales/fr'
import { AppComponent } from './app.component';
import { MyGalComponent } from './my-gal/my-gal.component';

@NgModule({
  declarations: [
    AppComponent,
    MyGalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide:LOCALE_ID,useValue:'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    registerLocaleData(fr.default)
  }
}
