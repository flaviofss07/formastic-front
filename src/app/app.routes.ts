import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { EfetivoListaComponent } from './components/efetivo-lista/efetivo-lista.component';
import { EfetivoComponent } from './components/efetivo/efetivo.component';

export const ROUTES: Routes = [
    { path : '', component: HomeComponent},
    { path : 'efetivo', component : EfetivoComponent},
    { path : 'efetivo-lista', component : EfetivoListaComponent}
]

export const routes: ModuleWithProviders = RouterModule.forRoot(ROUTES);