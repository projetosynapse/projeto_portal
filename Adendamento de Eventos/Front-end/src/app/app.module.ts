import { CalendarioComponent } from './calendario/calendario.component';
import { TabelaAdmComponent } from './tabela-adm/tabela-adm.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRountingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CadAdmComponent } from './cad-adm/cad-adm.component';
import { CadEventosComponent } from './cad-eventos/cad-eventos.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { RouteReuseStrategy } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    TabelaAdmComponent,
    CalendarioComponent,
    CadAdmComponent,
    CadEventosComponent
  ],
  imports: [
    BrowserModule,
    AppRountingModule,
    IonicModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy}, FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
