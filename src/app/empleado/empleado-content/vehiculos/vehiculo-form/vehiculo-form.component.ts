import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Vehiculo } from '../vehiculo';
import {Router,ActivatedRoute} from '@angular/router'
import Swal from 'sweetalert2' ;
import { VehiculoService } from '../vehiculo.service';

@Component({
  selector: 'app-vehiculo-form',
  templateUrl: './vehiculo-form.component.html',
  styleUrls: ['./vehiculo-form.component.css']
})
export class VehiculoFormComponent implements OnInit {

  titulo:string="Agregar vehículo";
  formVehiculo:FormGroup;
  vehiculo:Vehiculo=new Vehiculo();

  constructor(private formBuilder: FormBuilder,
              private vehiculoService:VehiculoService,
              private router:Router,
              private activatedRoute:ActivatedRoute,
    ) { 
    this.formVehiculo= this.formBuilder.group({
      patente:['',[Validators.required,]],
      tipo_vehiculo:['',[Validators.required]],
      marca:['',[Validators.required]],
      modelo:['',[Validators.required]],
      nro_motor:['',[Validators.required,Validators.min(0)]],
      nro_chasis:['',[Validators.required,Validators.min(0)]],
      anio:['',[Validators.required,Validators.min(0)]],
      color:['',[Validators.required]]
    })
  }

  ngOnInit() {
    this.cargarVehiculo();
  }
  public cargarVehiculo():void{    //funcion para colocar los datos del cliente en el formulario al actualizar (debe invocarse en ngOnInit)
    this.activatedRoute.params.subscribe(params=>{  //mira los parametros de la url y con el parametro obtiene el cliente de la clase service
      let id = params['id'];
      if(id){
        this.vehiculoService.getVehiculo(id).subscribe((vehiculo)=>this.vehiculo=vehiculo) //al obtener el cliente de la clase service, lo guarda en el atributo de esta clase cliente y desde ngOnInit invoca esta funcion para cargar los datos en el formulario
        console.log(this.vehiculo);
      }
    })
    
  }

  public create():void{
    this.vehiculoService.create(this.formVehiculo.value)
      .subscribe(vehiculo => {     //para acceder directo al cliente se hizo una conversion manual en cliente.service de response a cliente, en update se hizo de la otra manera
        this.router.navigate(['/personal-inicio/vehiculos'])   //redirije a /clientes                            //subscribe ejecuta una accion luego de crear el cliente, en este caso redirije a la lista de clientes
        Swal.fire('Nuevo vehiculo', `vehiculo con patente:${vehiculo.patente} creada con Exito`, 'success')    
    }
    );
  }
  
  public update():void{
    this.vehiculoService.update(this.formVehiculo.value,this.vehiculo.id)
    .subscribe(json=>{   //el objeto que retorna el backend al crear un cliente es de tipo json, en donde vienen dos objetos uno es el cliente y el otro el mensaje de exito
      this.router.navigate(['/personal-inicio/vehiculos'])
      Swal.fire('Revision Actualizada', `vehiculo con patente ${json.patente} Actualizado con Exito`, 'success')  
    })
  }


  saveData(){
    
    this.vehiculo.patente=this.formVehiculo.value.patente;
    this.vehiculo.tipo_vehiculo=this.formVehiculo.value.tipo_vehiculo;
    this.vehiculo.modelo=this.formVehiculo.value.modelo;
    this.vehiculo.marca=this.formVehiculo.value.marca;
    this.vehiculo.anio=this.formVehiculo.value.anio;
    this.vehiculo.color=this.formVehiculo.value.color;
    this.vehiculo.nro_chasis=this.formVehiculo.value.nro_chasis;
    this.vehiculo.nro_motor=this.formVehiculo.value.nro_motor;
    console.log(this.vehiculo);
    this.formVehiculo.reset();
  }

}
