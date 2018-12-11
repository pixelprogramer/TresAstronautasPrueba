import {Component, OnInit, ViewChild} from '@angular/core';
import {MotorComponent} from "../motor/motor.component";
import {interval} from "rxjs/index";

@Component({
  selector: 'app-cabina',
  templateUrl: './cabina.component.html',
  styleUrls: ['./cabina.component.css']
})
export class CabinaComponent implements OnInit {

  public contador: any;

  constructor() {
    this.contador = 10;
  }

  ngOnInit() {

  }

  iniciarContador() {
    interval(1000).subscribe(
      returned => {
        if (this.contador > 0) {
          this.contador--;
        }
      }
    )
  }
}
