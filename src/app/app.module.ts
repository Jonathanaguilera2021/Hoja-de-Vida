import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HvComponent } from './hv/hv.component';
import { DatosPersonalesComponent } from './datos-personales/datos-personales.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { SocialComponent } from './social/social.component';
import { ReposComponent } from './repos/repos.component';
import { FooterComponent } from './footer/footer.component';
import { PresentacionComponent } from './presentacion/presentacion.component';

@NgModule({
  declarations: [
    AppComponent,
    HvComponent,
    DatosPersonalesComponent,
    EstudiosComponent,
    ExperienciaComponent,
    SocialComponent,
    ReposComponent,
    FooterComponent,
    PresentacionComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
