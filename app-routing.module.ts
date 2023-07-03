import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from '../app/header/header.component';
import { FotComponent } from '../app/fot/fot.component';
import { NoticiasComponent } from '../app/noticias/noticias.component'
import { WASComponent } from '../app/was/was.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
