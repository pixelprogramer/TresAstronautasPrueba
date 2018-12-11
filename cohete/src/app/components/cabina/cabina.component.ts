import {Component, OnInit, ViewChild} from '@angular/core';
import {MotorComponent} from "../motor/motor.component";
import {interval} from "rxjs/index";

@Component({
  selector: 'app-cabina',
  templateUrl: './cabina.component.html',
  styleUrls: ['./cabina.component.css']
})
export class CabinaComponent implements OnInit {
  public contadorRp: any;
  public contador: any;
  public subscribe: any;

  constructor() {
    this.contador = 10;
    this.contadorRp = 0;
  }

  ngOnInit() {

  }

  iniciarContador() {

    this.subscribe = interval(1000).subscribe(
      returned => {
        if (this.contador > 0) {
          this.contador--;
        } else {
          this.contadorRp++;
          if (this.contadorRp <= 1) {
            $(".llama").show();
            $(".fuselaje").animate({'margin-left': "3000px"},850);
            $(".round-button").animate({'margin-left': "3000px"},850);
            $(".counter").animate({'margin-left': "3000px"},850);
            $(".llama").animate({'margin-left': "3000px"},1000);

          } else {
            $(".llama").hide();
            $(".fuselaje").animate({'margin-left': "0px"});
            $(".llama").animate({'margin-left': "-200px"});
            $(".round-button").animate({'margin-left': "0px"});
            $(".counter").animate({'margin-left': "109px"});
            this.subscribe.unsubscribe();
            this.contadorRp = 0;
            this.contador = 10;
          }
        }
      }
    )
  }
}
