import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  cliente:Cliente=new Cliente();
  titulo:string="Agregar cliente";

  constructor(private clienteService:ClienteService, 
    private router:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.cargarCliente();
  }

  public cargarCliente():void{    //funcion para colocar los datos del cliente en el formulario al actualizar (debe invocarse en ngOnInit)
    this.activatedRoute.params.subscribe(params=>{  //mira los parametros de la url y con el parametro obtiene el cliente de la clase service
      let rut = params['rut']
      if(rut){
        this.clienteService.getCliente(rut).subscribe((cliente)=>this.cliente=cliente) //al obtener el cliente de la clase service, lo guarda en el atributo de esta clase cliente y desde ngOnInit invoca esta funcion para cargar los datos en el formulario
      }
    })
  }

  public create():void{
    this.clienteService.create(this.cliente)
      .subscribe(cliente => {     //para acceder directo al cliente se hizo una conversion manual en cliente.service de response a cliente, en update se hizo de la otra manera
        this.router.navigate(['/clientes'])   //redirije a /clientes                            //subscribe ejecuta una accion luego de crear el cliente, en este caso redirije a la lista de clientes
        //swal.fire('Nuevo Cliente', `Cliente ${cliente.nombre} creado con Exito`, 'success')    
    }
    );
  }
  
  public update():void{
    this.clienteService.update(this.cliente)
    .subscribe(json=>{   //el objeto que retorna el backend al crear un cliente es de tipo json, en donde vienen dos objetos uno es el cliente y el otro el mensaje de exito
      this.router.navigate(['/clientes'])
      //swal.fire('Cliente Actualizado', `Cliente ${json.cliente.nombre} Actualizado con Exito`, 'success')  
    })
  }

}
