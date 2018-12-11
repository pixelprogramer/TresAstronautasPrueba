import {Component, OnInit, ViewChild} from '@angular/core';
import {CabinaComponent} from "../cabina/cabina.component";
import {interval} from "rxjs/index";
import {map} from "rxjs/internal/operators";

@Component({
  selector: 'app-motor',
  templateUrl: './motor.component.html',
  styleUrls: ['./motor.component.css']
})
export class MotorComponent implements OnInit {
  @ViewChild(CabinaComponent) cabina:CabinaComponent;
  constructor() { }

  ngOnInit() {
  }
  iniciar(){
this.cabina.iniciarContador();

  }
}
