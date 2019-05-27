import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'
import { RevisionService } from '../revision.service';
import { Revision } from '../revision';


@Component({
  selector: 'app-revision-form',
  templateUrl: './revision-form.component.html',
  styleUrls: ['./revision-form.component.css']
})
export class RevisionFormComponent implements OnInit {

  titulo:string="Agregar revisión";
  revision:Revision=new Revision();
  

  constructor(private revisionService:RevisionService, 
    private router:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.cargarRevision();
  }

  public cargarRevision():void{    //funcion para colocar los datos del cliente en el formulario al actualizar (debe invocarse en ngOnInit)
    this.activatedRoute.params.subscribe(params=>{  //mira los parametros de la url y con el parametro obtiene el cliente de la clase service
      let idRevision = params['idRevision']
      if(idRevision){
        this.revisionService.getRevision(idRevision).subscribe((revision)=>this.revision=revision) //al obtener el cliente de la clase service, lo guarda en el atributo de esta clase cliente y desde ngOnInit invoca esta funcion para cargar los datos en el formulario
      }
    })
  }

  public create():void{
    this.revisionService.create(this.revision)
      .subscribe(revision => {     //para acceder directo al cliente se hizo una conversion manual en cliente.service de response a cliente, en update se hizo de la otra manera
        this.router.navigate(['/revisiones'])   //redirije a /clientes                            //subscribe ejecuta una accion luego de crear el cliente, en este caso redirije a la lista de clientes
        //swal.fire('Nuevo Cliente', `Cliente ${cliente.nombre} creado con Exito`, 'success')    
    }
    );
  }
  
  public update():void{
    this.revisionService.update(this.revision)
    .subscribe(json=>{   //el objeto que retorna el backend al crear un cliente es de tipo json, en donde vienen dos objetos uno es el cliente y el otro el mensaje de exito
      this.router.navigate(['/revisiones'])
      //swal.fire('Cliente Actualizado', `Cliente ${json.cliente.nombre} Actualizado con Exito`, 'success')  
    })
  }


}
