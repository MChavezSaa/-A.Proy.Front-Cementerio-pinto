import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {of,Observable, throwError} from 'rxjs';
import {map,catchError} from 'rxjs/operators';
import {Router} from '@angular/router';
import { Revision } from './revision';
import Swal from 'sweetalert2' ;


@Injectable({
  providedIn: 'root'
})
export class RevisionService {

  private urlEndPoint:string='http://localhost:8080/api/revision';    //url a la cual el backend envia los datos, 
  private httpHeaders=new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http: HttpClient, private router:Router) { }

  getRevisiones():Observable<Revision[]>{
    //obtiene los clientes que son entregados desde el BackEnd
    return this.http.get(this.urlEndPoint).pipe(
      map((response)=>response as Revision[])
    )
  }
  getRevision(id):Observable<Revision>{      //solicita el servidor el cliente por rut(el servidor devuevle null en caso de no encontrar el cliente)
    return this.http.get<Revision>(`${this.urlEndPoint}/${id}`).pipe(  //revisar ruta del backend
      catchError(e=>{
        this.router.navigate(['/personal-inicio/revisiones']);
        console.error(e.error.mensaje);
        Swal.fire('Error al editar', e.error.mensaje,'error');
        return throwError(e);
      })  
    );
  }
  create(revision:Revision):Observable<Revision>{  //el cliente es enviado desde cliente-form.component.ts
    return this.http.post(this.urlEndPoint,revision,{headers:this.httpHeaders}).pipe(
      map((response:any) => response.revision as Revision),
      catchError(e=>{
        console.error(e.error.mensaje);
        Swal.fire('Error al crear la revision', e.error.mensaje,'error');
        return throwError(e);
      })
    );
  }

  update(revision:Revision):Observable<any>{
    return this.http.put<any>(`${this.urlEndPoint}/${revision.idRevision}`,revision,{headers:this.httpHeaders}).pipe(
      catchError(e=>{
        console.error(e.error.mensaje);
        Swal.fire('Error al editar la revision', e.error.mensaje,'error');
        return throwError(e);
      })
    );
  }

  
  delete(id:number):Observable<Revision>{
    return this.http.delete<Revision>(`${this.urlEndPoint}/${id}`,{headers:this.httpHeaders}).pipe(
      catchError(e=>{
        console.error(e.error.mensaje);
        Swal.fire('Error al eliminar la revision', e.error.mensaje,'error');
        return throwError(e);
      })
    );
  }
}
