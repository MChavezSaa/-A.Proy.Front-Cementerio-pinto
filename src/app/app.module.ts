import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router'  //necesario para implementar rutas 
import {HttpClientModule} from '@angular/common/http'; 
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { ClienteHeaderComponent } from './cliente/cliente-header/cliente-header.component';
import { ClienteContentComponent } from './cliente/cliente-content/cliente-content.component';
import { ClienteFooterComponent } from './cliente/cliente-footer/cliente-footer.component';
import { EmpleadoHeaderComponent } from './empleado/empleado-header/empleado-header.component';
import { EmpleadoContentComponent } from './empleado/empleado-content/empleado-content.component';
import { EmpleadoFooterComponent } from './empleado/empleado-footer/empleado-footer.component';
import { ReservaHoraComponent } from './cliente/cliente-content/reserva-hora/reserva-hora.component';
import { ConsideracionesComponent } from './cliente/cliente-content/consideraciones/consideraciones.component';
import { EmpleadoLoginComponent } from './empleado/empleado-login/empleado-login.component';
import { RevisionesComponent } from './empleado/empleado-content/revisiones/revisiones.component';
import { VehiculosComponent } from './empleado/empleado-content/vehiculos/vehiculos.component';
import { ClientesComponent } from './empleado/empleado-content/clientes/clientes.component';
import { ClienteFormComponent } from './empleado/empleado-content/clientes/cliente-form/cliente-form.component';
import { RevisionFormComponent } from './empleado/empleado-content/revisiones/revision-form/revision-form.component';
import { VehiculoFormComponent } from './empleado/empleado-content/vehiculos/vehiculo-form/vehiculo-form.component';
import { ClienteService } from './empleado/empleado-content/clientes/cliente.service';
import { TerrenoComponent } from './cliente/terreno/terreno.component';

const routes:Routes=[
  {path:'',redirectTo:'/inicio',pathMatch:'full'},   //como pagina de inicio se debe dejar la vista para los clientes
  {path:'inicio',component:ClienteComponent,
    children: [
      {
        path:'',
        component:ClienteContentComponent
      },
      {
        path:'reserva',
        component:ReservaHoraComponent
      },
      {
        path:'consideraciones',
        component:ConsideracionesComponent
      },
      {
        path:'terreno',
        component:TerrenoComponent
      }
    ]
  },
  {path:'personal',component:EmpleadoLoginComponent},
  {path:'personal-inicio',component:EmpleadoComponent,
    children:[
      {
        path:"",
        component:EmpleadoContentComponent
      },
      {
        path:'revisiones',
        component:RevisionesComponent
      },
      {
        path:'clientes',
        component:ClientesComponent
      },
      {
        path:'clientes-form',
        component:ClienteFormComponent
      },
      {
        path:'clientes-form/:id',
        component:ClienteFormComponent
      },
      {
        path:'revisiones-form',
        component:RevisionFormComponent
      },
      {
        path:'revisiones-form/:idRevision',
        component:RevisionFormComponent
      },
      {
        path:'vehiculos-form',
        component:VehiculoFormComponent
      },
      {
        path:'vehiculos-form/:id',
        component:VehiculoFormComponent
      },
      {
        path:'vehiculos',
        component:VehiculosComponent
      }
    
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    EmpleadoComponent,
    ClienteHeaderComponent,
    ClienteContentComponent,
    ClienteFooterComponent,
    EmpleadoHeaderComponent,
    EmpleadoContentComponent,
    EmpleadoFooterComponent,
    ReservaHoraComponent,
    ConsideracionesComponent,
    EmpleadoLoginComponent,
    RevisionesComponent,
    VehiculosComponent,
    ClientesComponent,
    ClienteFormComponent,
    RevisionFormComponent,
    VehiculoFormComponent,
    TerrenoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),    //se le entrega nuestro arreglo con las rutas definidas
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
