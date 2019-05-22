import { Component, OnInit } from '@angular/core';
import { ICliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes:ICliente[]=[
    {
      "rut":"11.123.123-1",
      "nombre":"Steve",
      "correo":"steve1994@gmail.com",
      "telefono":88743321,
      "cantidadRevisiones":5,
    },
    {
      "rut":"11.123.123-1",
      "nombre":"Juan",
      "correo":"juan_varela@gmail.com",
      "telefono":88743321,
      "cantidadRevisiones":5,
    },
    {
      "rut":"11.123.123-1",
      "nombre":"Susan",
      "correo":"susan_greenfield@gmail.com",
      "telefono":88743321,
      "cantidadRevisiones":5,
    },
    {
      "rut":"11.123.123-1",
      "nombre":"Penelope",
      "correo":"penelope_11@gmail.com",
      "telefono":88743321,
      "cantidadRevisiones":5,
    },
    {
      "rut":"11.123.123-1",
      "nombre":"Frank",
      "correo":"frank_kafka@gmail.com",
      "telefono":88743321,
      "cantidadRevisiones":5,
    },
    {
      "rut":"11.123.123-1",
      "nombre":"Victor",
      "correo":"vic1998@gmail.com",
      "telefono":88743321,
      "cantidadRevisiones":5,
    },
    {
      "rut":"11.123.123-1",
      "nombre":"Sandra",
      "correo":"sandra21@gmail.com",
      "telefono":88743321,
      "cantidadRevisiones":5,
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
