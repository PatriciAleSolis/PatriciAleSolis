import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { FotComponent } from './fot/fot.component';
import { WASComponent } from './was/was.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NoticiasComponent,
    FotComponent,
    WASComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
