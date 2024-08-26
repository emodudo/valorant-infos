import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AgentsComponent } from './components/agents/agents.component';
import { WeaponsComponent } from './components/weapons/weapons.component';
import { MapsComponent } from './components/maps/maps.component';
import { HomeComponent } from './components/home/home.component';
import { AgentInfoComponent } from './components/agent-info/agent-info.component';
import { MapInfoComponent } from './components/map-info/map-info.component';
import { WeaponInfoComponent } from './components/weapon-info/weapon-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AgentsComponent,
    WeaponsComponent,
    MapsComponent,
    HomeComponent,
    AgentInfoComponent,
    MapInfoComponent,
    WeaponInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
