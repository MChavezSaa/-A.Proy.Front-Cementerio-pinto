import { Component, OnInit } from '@angular/core';
import { Vehiculo } from './vehiculo';
import { VehiculoService } from './vehiculo.service';
import Swal from 'sweetalert2' ;

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {

  _listFilter:string;

  vehiculosFiltered:Vehiculo[];

  vehiculos:Vehiculo[];

  constructor(private vehiculoService:VehiculoService) { }

  ngOnInit() {
    this.vehiculoService.getVehiculos().subscribe(vehiculos=>{
        this.vehiculos=vehiculos;
        this.vehiculosFiltered=vehiculos;
      },
      err=>console.log(err)
      )
  }

  delete(vehiculo:Vehiculo):void{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false,
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Está seguro',
      text: `¿Está seguro que desea eliminar el vehiculo con patente numero: ${vehiculo.patente}, marca: ${vehiculo.marca}, modelo: ${vehiculo.modelo}?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.vehiculoService.delete(vehiculo.id).subscribe(
          response=>{
            this.vehiculosFiltered=this.vehiculos.filter(rev=>rev!==vehiculo)
            swalWithBootstrapButtons.fire(
              'Vehiculo Eliminado!',
              `Vehiculo patente: ${vehiculo.patente}, marca: ${vehiculo.marca}  eliminado con éxito.`,
              'success'
            )
          }
        )
        
      }
    })
  }

  get listFilter(): string{
    return this._listFilter;
  }

  set listFilter(value:string){
    this._listFilter=value;
    //this.filterProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    this.vehiculosFiltered=this.listFilter ? this.performFilter(this.listFilter) : this.vehiculos;
    console.log(this.vehiculosFiltered);
  }

  performFilter(filterBy:string): Vehiculo[]{
    filterBy=filterBy.toLocaleLowerCase();
    return this.vehiculos.filter((vehiculo: Vehiculo)=>
      vehiculo.patente.toLocaleLowerCase().indexOf(filterBy) !== -1);
    /*return this.productService.products.filter((product: Iproduct)=>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);*/
    
  }

}
