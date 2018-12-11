import {Component, Input, OnInit} from '@angular/core';
import {PlanetasService} from "../../service/planetas.service";
import * as $ from "jquery";
import {formatNumber} from "@angular/common";

@Component({
  selector: 'app-fuselaje',
  templateUrl: './fuselaje.component.html',
  styleUrls: ['./fuselaje.component.css'],
  providers:[PlanetasService]
})
export class FuselajeComponent implements OnInit {
  @Input() public planeta: string;
  public urlImage:string;
  public coordenadas:string;
  constructor(private _PlanetService: PlanetasService) {
    this.getPlanets();
    this.urlImage = '';
    this.coordenadas = 'Y';
  }

  ngOnInit() {
  }
  getPlanets(){
    console.log(this.planeta);
    this._PlanetService.getPlanets().subscribe(
      returned=>{

        if (returned.images[this.planeta] != undefined){
          this.urlImage =returned.images[this.planeta].img;
          this.coordenadas =returned.images[this.planeta].degrees+'.0000'
        }else {
          //window.alert('Planeta no encontrado');
        }

      },error2 => {

      }
    )
  }
}
