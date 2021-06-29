import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import {MatPaginatorModule} from '@angular/material/paginator';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgxPaginationModule } from 'ngx-pagination';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PagoComponent } from './pago/pago.component';
import { ProductosComponent } from './productos/productos.component';
import { NavbartiendaComponent } from './navbartienda/navbartienda.component';
import { FootertiendaComponent } from './footertienda/footertienda.component';
import { PaginatePipe } from './pipes/paginate.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormulariopedidoComponent } from './formulariopedido/formulariopedido.component';


const routes: Routes = [{
    path:'',
    component: LoginComponent
},
{
    path:'productos',
    component: ProductosComponent
},
{
    path:'pago',
    component: PagoComponent
}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagoComponent,
    ProductosComponent,
    NavbartiendaComponent,
    FootertiendaComponent,
    PaginatePipe,
    FormulariopedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [RouterModule.forRoot(routes)],
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
