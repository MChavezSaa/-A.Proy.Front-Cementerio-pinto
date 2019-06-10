import { Component, OnInit } from '@angular/core';
import {  Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import Swal from 'sweetalert2' ;
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  _listFilter:string;
  clientesFiltered:Cliente[];
  clientes:Cliente[];

  constructor(private clienteService:ClienteService, private router:Router) { }

  ngOnInit() {
    this.clienteService.getClientes().subscribe(clientes=>{
       this.clientes = clientes;
       this.clientesFiltered=clientes;
    },
    err=>console.log(err)
    );
  }
  
  delete(cliente:Cliente):void{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false,
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Está seguro',
      text: `¿Está seguro que desea eliminar al cliente ${cliente.nombre} ?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.clienteService.delete(cliente.id).subscribe(
          response=>{
            this.clientesFiltered=this.clientes.filter(cli=>cli!==cliente)
            swalWithBootstrapButtons.fire(
              'Cliente Eliminado!',
              `Cliente ${cliente.nombre}  eliminado con éxito.`,
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
    this.clientesFiltered=this.listFilter ? this.performFilter(this.listFilter) : this.clientes;
    console.log(this.clientesFiltered);
  }

  performFilter(filterBy:string): Cliente[]{
    filterBy=filterBy.toLocaleLowerCase();
    return this.clientes.filter((cliente: Cliente)=>
      cliente.rut.toLocaleLowerCase().indexOf(filterBy) !== -1);
    /*return this.productService.products.filter((product: Iproduct)=>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);*/
    
  }
  
}
