import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HvComponent } from './hv/hv.component';
import { DatosPersonalesComponent } from './datos-personales/datos-personales.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { SocialComponent } from './social/social.component';
import {ReposComponent} from './repos/repos.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {path:'', redirectTo: '/social', pathMatch:'full'},
  {path:'', redirectTo: '/app-presentacion',pathMatch:'full'},
  {path: 'datos-personales', component: DatosPersonalesComponent},
  {path: 'app-estudios', component: EstudiosComponent},
  {path: 'experiencia', component: ExperienciaComponent},
  {path: 'social', component: SocialComponent},
  {path: 'repos', component:ReposComponent}
  
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
