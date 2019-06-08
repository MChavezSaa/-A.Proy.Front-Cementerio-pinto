import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'
import { RevisionService } from '../revision.service';
import { Revision } from '../revision';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2' ;


@Component({
  selector: 'app-revision-form',
  templateUrl: './revision-form.component.html',
  styleUrls: ['./revision-form.component.css']
})
export class RevisionFormComponent implements OnInit {

  titulo:string="Agregar revisión";
  revision:Revision=new Revision();
  formRevision:FormGroup;
  

  constructor(private revisionService:RevisionService, 
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private formBuilder: FormBuilder) {

      this.formRevision= this.formBuilder.group({
        patente:['',[Validators.required,]],
        nombreCliente:['',[Validators.required]],
        fecha:['',[Validators.required]],
        kilometraje:['',[Validators.required]],
        gases:['',[Validators.required]],
        visuales:['',[Validators.required]],
        alineamiento:['',[Validators.required]],
      })
  }

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
        this.router.navigate(['/personal-inicio/revisiones'])   //redirije a /clientes                            //subscribe ejecuta una accion luego de crear el cliente, en este caso redirije a la lista de clientes
        Swal.fire('Nuevo revision', `Revision del cliente:${revision.nombreCliente} creada con Exito`, 'success')    
    }
    );
  }
  
  public update():void{
    this.revisionService.update(this.revision)
    .subscribe(json=>{   //el objeto que retorna el backend al crear un cliente es de tipo json, en donde vienen dos objetos uno es el cliente y el otro el mensaje de exito
      this.router.navigate(['/personal-inicio/revisiones'])
      Swal.fire('Revision Actualizada', `Revision del cliente ${json.revision.nombreCliente} Actualizada con Exito`, 'success')  
    })
  }

  saveData(){
    console.log(this.formRevision.value);
    this.revision.nombreCliente=this.formRevision.value.nombreCliente;
    this.revision.patente=this.formRevision.value.patente;
    this.revision.fecha=this.formRevision.value.fecha;
    this.revision.gases=this.formRevision.value.gases;
    this.revision.kilometraje=this.formRevision.value.kilometraje;
    this.revision.alineamiento=this.formRevision.value.alineamiento;
    this.revision.visuales=this.formRevision.value.visuales;
    console.log(this.revision);
    this.formRevision.reset();
  }


}
