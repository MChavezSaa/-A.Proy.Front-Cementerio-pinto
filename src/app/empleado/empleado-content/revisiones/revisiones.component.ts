import { Component, OnInit } from '@angular/core';
import { IRevision } from './revision';

@Component({
  selector: 'app-revisiones',
  templateUrl: './revisiones.component.html',
  styleUrls: ['./revisiones.component.css']
})
export class RevisionesComponent implements OnInit {

  revisiones:IRevision[]=[
    {
      "idRevision":1,
      "patente":"xx-11-22",
      "nombreCliente":"Steve",
      "fecha":"22/02/01",
      "kilometraje":"2000km",
      "gases":"ok",
      "visuales":"ok",
      "alineamiento":"ok"
    },
    {
      "idRevision":2,
      "patente":"yy-33-22",
      "nombreCliente":"Juan",
      "fecha":"22/02/01",
      "kilometraje":"3000km",
      "gases":"ok",
      "visuales":"por revisar",
      "alineamiento":"ok"
    },
    {
      "idRevision":3,
      "patente":"zz-21-12",
      "nombreCliente":"Susan",
      "fecha":"22/02/01",
      "kilometraje":"10000km",
      "gases":"ok",
      "visuales":"ok",
      "alineamiento":"ok"
    },
    {
      "idRevision":4,
      "patente":"xx-11-22",
      "nombreCliente":"Penelope",
      "fecha":"22/02/01",
      "kilometraje":"2000km",
      "gases":"ok",
      "visuales":"ok",
      "alineamiento":"ok"
    },
    {
      "idRevision":5,
      "patente":"xx-11-22",
      "nombreCliente":"Frank",
      "fecha":"22/02/01",
      "kilometraje":"2000km",
      "gases":"ok",
      "visuales":"ok",
      "alineamiento":"ok"
    },
    {
      "idRevision":6,
      "patente":"xx-11-22",
      "nombreCliente":"Victor",
      "fecha":"22/02/01",
      "kilometraje":"2000km",
      "gases":"ok",
      "visuales":"ok",
      "alineamiento":"ok"
    },
    {
      "idRevision":7,
      "patente":"xx-11-22",
      "nombreCliente":"Sandra",
      "fecha":"22/02/01",
      "kilometraje":"2000km",
      "gases":"ok",
      "visuales":"ok",
      "alineamiento":"ok"
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
