import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-revision-form',
  templateUrl: './revision-form.component.html',
  styleUrls: ['./revision-form.component.css']
})
export class RevisionFormComponent implements OnInit {

  titulo:string="Agregar revisión";

  constructor() { }

  ngOnInit() {
  }

}
