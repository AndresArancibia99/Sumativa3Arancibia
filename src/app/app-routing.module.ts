import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulariopedidoComponent } from './formulariopedido/formulariopedido.component';

const routes: Routes = [  {path: 'formulariopedido', component: FormulariopedidoComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
