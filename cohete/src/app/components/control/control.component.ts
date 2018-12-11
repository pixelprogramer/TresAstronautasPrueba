import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
  public planeta:string;
  constructor(private rutaActiva: ActivatedRoute) {
    this.planeta='X';
  }

  ngOnInit() {
    if (this.rutaActiva.snapshot.params.planeta != undefined){
      this.planeta =this.rutaActiva.snapshot.params.planeta;
    }else{
      this.planeta = 'X';
    }
  }

}
