import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {of,Observable, throwError} from 'rxjs';
import {map,catchError} from 'rxjs/operators';
import {Router} from '@angular/router';
import { Cliente } from './cliente';
import Swal from 'sweetalert2' ;

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndPoint:string='http://localhost:8080/api/';    //url a la cual el backend envia los datos, 
  private httpHeaders=new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http: HttpClient, private router:Router) { }

  getClientes():Observable<Cliente[]>{
    //obtiene los clientes que son entregados desde el BackEnd
    return this.http.get(this.urlEndPoint+"customer").pipe(
      map((response)=>response as Cliente[])
    )
   
  }
  getCliente(rut):Observable<Cliente>{      //solicita el servidor el cliente por rut(el servidor devuevle null en caso de no encontrar el cliente)
    return this.http.get<Cliente>(`${this.urlEndPoint}/${rut}`).pipe(  //revisar ruta del backend
      catchError(e=>{
        this.router.navigate(['/personal-inicio/clientes']);
        console.error(e.error.mensaje);
        Swal.fire('Error al editar', e.error.mensaje,'error');
        return throwError(e);
      })  
    );
  }
  create(cliente:Cliente):Observable<Cliente>{  //el cliente es enviado desde cliente-form.component.ts
    return this.http.post(this.urlEndPoint+"save",cliente,{headers:this.httpHeaders}).pipe(
      map((response:any) => response.cliente as Cliente),
      catchError(e=>{
        console.error(e.error.mensaje);
        Swal.fire('Error al crear el cliente', e.error.mensaje,'error');
        return throwError(e);
      })
    );
  }

  update(cliente:Cliente):Observable<any>{
    return this.http.put<any>(`${this.urlEndPoint}/${cliente.rut}`,cliente,{headers:this.httpHeaders}).pipe(
      catchError(e=>{
        console.error(e.error.mensaje);
        Swal.fire('Error al editar el cliente', e.error.mensaje,'error');
        return throwError(e);
      })
    );
  }

  
  delete(rut:string):Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.urlEndPoint}/${rut}`,{headers:this.httpHeaders}).pipe(
      catchError(e=>{
        console.error(e.error.mensaje);
        Swal.fire('Error al eliminar el cliente', e.error.mensaje,'error');
        return throwError(e);
      })
    );
  }

}
