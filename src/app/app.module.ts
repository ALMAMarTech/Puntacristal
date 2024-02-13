import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingC } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './cabecera/menu/menu.component';
import { FooterComponent } from './cabecera/footer/footer.component';
import { HomeComponent } from './vista/home/home.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {CarouselModule} from "ngx-owl-carousel-o";
import { AvisoDePrivacidadComponent } from './vista/aviso-de-privacidad/aviso-de-privacidad.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    routingC,
    HomeComponent,
    AvisoDePrivacidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
