import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { AgentsComponent } from '../app/components/agents/agents.component';
import { MapsComponent } from './components/maps/maps.component';
import { WeaponsComponent } from './components/weapons/weapons.component';
import { AgentInfoComponent } from './components/agent-info/agent-info.component';
import { MapInfoComponent } from './components/map-info/map-info.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'agents', component: AgentsComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'weapons', component: WeaponsComponent },
  { path: 'agent-info/:name', component: AgentInfoComponent },
  { path: 'map-info/:name', component: MapInfoComponent }, 
  { path: '**', redirectTo: '/agents' } // Rota padrão
];

  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
