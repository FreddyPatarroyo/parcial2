import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ItemComponent } from './galeria/item/item.component';
import { ItemServices } from "../app/services/item.services";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GaleriaComponent,
    FormularioComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ItemServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
