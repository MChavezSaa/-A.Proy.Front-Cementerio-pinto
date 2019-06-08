import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Vehiculo } from './vehiculo';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import Swal from 'sweetalert2' ;

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  private urlEndPoint:string='http://localhost:8080/';    //url a la cual el backend envia los datos, 
  private httpHeaders=new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http: HttpClient, private router:Router) { }

  getVehiculos():Observable<Vehiculo[]>{
    //obtiene los clientes que son entregados desde el BackEnd
    return this.http.get(this.urlEndPoint+"vehicle").pipe(
      map((response)=>response as Vehiculo[])
    )
  }
  getVehiculo(patente):Observable<Vehiculo>{      //solicita el servidor el cliente por rut(el servidor devuevle null en caso de no encontrar el cliente)
    return this.http.get<Vehiculo>(`${this.urlEndPoint}/${patente}`).pipe(  //revisar ruta del backend
      catchError(e=>{
        //this.router.navigate(['/personal-inicio/vehiculos']);  //desactivar por ahora para pruebas
        console.error(e.error.mensaje);
        Swal.fire('Error al editar', e.error.mensaje,'error');
        return throwError(e);
      })  
    );
  }

  create(vehiculo:Vehiculo):Observable<Vehiculo>{  //el cliente es enviado desde cliente-form.component.ts
    return this.http.post(this.urlEndPoint+"saveVehicle",vehiculo,{headers:this.httpHeaders}).pipe(
      map((response:any) => response.revision as Vehiculo),
      catchError(e=>{
        console.error(e.error.mensaje);
        Swal.fire('Error al crear el vehiculo', e.error.mensaje,'error');
        return throwError(e);
      })
    );
  }

  update(vehiculo:Vehiculo):Observable<any>{
    return this.http.put<any>(`${this.urlEndPoint}/${vehiculo.patente}`,vehiculo,{headers:this.httpHeaders}).pipe(
      catchError(e=>{
        console.error(e.error.mensaje);
        Swal.fire('Error al editar el vehiculo', e.error.mensaje,'error');
        return throwError(e);
      })
    );
  }

  delete(patente):Observable<Vehiculo>{
    return this.http.delete<Vehiculo>(`${this.urlEndPoint}/${patente}`,{headers:this.httpHeaders}).pipe(
      catchError(e=>{
        console.error(e.error.mensaje);
        Swal.fire('Error al eliminar el vehiculo', e.error.mensaje,'error');
        return throwError(e);
      })
    );
  }
}
