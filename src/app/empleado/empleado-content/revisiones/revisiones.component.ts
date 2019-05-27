import { Component, OnInit } from '@angular/core';
import { Revision } from './revision';
import { RevisionService } from './revision.service';
import Swal from 'sweetalert2' ;

@Component({
  selector: 'app-revisiones',
  templateUrl: './revisiones.component.html',
  styleUrls: ['./revisiones.component.css']
})
export class RevisionesComponent implements OnInit {

  revisiones:Revision[];

  constructor(private revisionService:RevisionService) { }

  ngOnInit() {
    this.revisionService.getRevisiones().subscribe(
      revisiones=> this.revisiones = revisiones
    );
  }
  
  delete(revision:Revision):void{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false,
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Está seguro',
      text: `¿Está seguro que desea eliminar la revision numero: ${revision.idRevision} del vehiculo: ${revision.patente}?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.revisionService.delete(revision.idRevision).subscribe(
          response=>{
            this.revisiones=this.revisiones.filter(rev=>rev!==revision)
            swalWithBootstrapButtons.fire(
              'Revision Eliminada!',
              `Revision ${revision.idRevision}, del vehículo ${revision.patente}  eliminado con éxito.`,
              'success'
            )
          }
        )
        
      }
    })
  }
}
