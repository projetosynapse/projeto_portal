import { CalendarioComponent } from './calendario/calendario.component';
import { TabelaAdmComponent } from './tabela-adm/tabela-adm.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CadAdmComponent } from './cad-adm/cad-adm.component';
import { CadEventosComponent } from './cad-eventos/cad-eventos.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {path: '',component: HomeComponent},
    {path: 'login',component: LoginComponent},
    {path: 'tabela-adm',component: TabelaAdmComponent},
    {path: 'calendario',component: CalendarioComponent},
    {path: 'cad-adm', component: CadAdmComponent},
    {path: 'cad-eventos', component: CadEventosComponent}
]


@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRountingModule {}
