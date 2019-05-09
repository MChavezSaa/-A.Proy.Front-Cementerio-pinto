import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router'  //necesario para implementar rutas 

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderClienteComponent } from './header/header-cliente/header-cliente.component';
import { HeaderEmpleadoComponent } from './header/header-empleado/header-empleado.component';
import { ContentComponent } from './content/content.component';
import { ContentClienteComponent } from './content/content-cliente/content-cliente.component';
import { ContentEmpleadoComponent } from './content/content-empleado/content-empleado.component';
import { RevisionesComponent } from './content/content-empleado/revisiones/revisiones.component';
import { VehiculosComponent } from './content/content-empleado/vehiculos/vehiculos.component';
import { ClientesComponent } from './content/content-empleado/clientes/clientes.component';

const routes:Routes=[
  {path:'',redirectTo:'/empleados',pathMatch:'full'},   //como pagina de inicio se debe dejar la vista para los clientes
  {path:'inicio',component:ContentClienteComponent},
  {path:'empleados',component:ContentEmpleadoComponent},
  {path:'revisiones',component:RevisionesComponent},
  {path:'vehiculos',component:VehiculosComponent},
  {path:'clientes',component:ClientesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeaderClienteComponent,
    HeaderEmpleadoComponent,
    ContentComponent,
    ContentClienteComponent,
    ContentEmpleadoComponent,
    RevisionesComponent,
    VehiculosComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)     //se le entrega nuestro arreglo con las rutas definidas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
