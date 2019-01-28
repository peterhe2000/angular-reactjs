import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactRendererComponent } from './angular/react-renderer.component';
import { NgHeroComponent } from './angular/ng-hero.component';
import {ReactOwcRendererComponent} from './angular/react-owc-renderer.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactRendererComponent,
    ReactOwcRendererComponent,
    NgHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
