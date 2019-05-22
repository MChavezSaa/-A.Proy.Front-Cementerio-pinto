import { Component, OnInit } from '@angular/core';
import { IVehiculo } from './vehiculo';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {

  vehiculos:IVehiculo[]=[
    {
      "patente":"xx-11-22",
      "tipoVehiculo":"sedan",
      "marca":"mercedes-benz",
      "modelo":"clk 300",
      "numeroMotor":12300,
      "numeroChasis":550,
      "anio":2000,
      "color":"rojo",
    },
    {
      "patente":"yy-33-44",
      "tipoVehiculo":"sedan",
      "marca":"mercedes-benz",
      "modelo":"clk 300",
      "numeroMotor":12300,
      "numeroChasis":550,
      "anio":2000,
      "color":"rojo",
    },
    {
      "patente":"wz-32-33",
      "tipoVehiculo":"sedan",
      "marca":"mercedes-benz",
      "modelo":"clk 300",
      "numeroMotor":12300,
      "numeroChasis":550,
      "anio":2000,
      "color":"rojo",
    },
    {
      "patente":"wx-12-12",
      "tipoVehiculo":"sedan",
      "marca":"mercedes-benz",
      "modelo":"clk 300",
      "numeroMotor":12300,
      "numeroChasis":550,
      "anio":2000,
      "color":"rojo",
    },
    {
      "patente":"ty-22-22",
      "tipoVehiculo":"sedan",
      "marca":"mercedes-benz",
      "modelo":"clk 300",
      "numeroMotor":12300,
      "numeroChasis":550,
      "anio":2000,
      "color":"rojo",
    },
    {
      "patente":"py-88-88",
      "tipoVehiculo":"sedan",
      "marca":"mercedes-benz",
      "modelo":"clk 300",
      "numeroMotor":12300,
      "numeroChasis":550,
      "anio":2000,
      "color":"rojo",
    },
    {
      "patente":"qw-11-11",
      "tipoVehiculo":"sedan",
      "marca":"mercedes-benz",
      "modelo":"clk 300",
      "numeroMotor":12300,
      "numeroChasis":550,
      "anio":2000,
      "color":"rojo",
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
