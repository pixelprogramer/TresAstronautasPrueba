import {Component, Input, OnInit} from '@angular/core';
import {PlanetasService} from "../../service/planetas.service";

import {formatNumber} from "@angular/common";

@Component({
  selector: 'app-fuselaje',
  templateUrl: './fuselaje.component.html',
  styleUrls: ['./fuselaje.component.css'],
  providers: [PlanetasService]
})
export class FuselajeComponent implements OnInit {
  @Input() public planeta: string;
  public urlImage: string;
  public coordenadas: string;

  constructor(private _PlanetService: PlanetasService) {
    this.urlImage = '';
    this.coordenadas = 'Y';
    this.getPlanets();

  }

  ngOnInit() {
    $(".llama").hide();
  }

  getPlanets() {
      this._PlanetService.getPlanets().subscribe(
        returned => {
          if (returned.images[this.planeta] != undefined) {
            this.urlImage = returned.images[this.planeta].img;
            this.coordenadas = returned.images[this.planeta].degrees + '.0000';
            var x = Math.floor((Math.random() * 50) +40);
            $('.planetImg').attr('style','width: '+x+'%');

          } else {
            //window.alert('Planeta no encontrado');
          }

        }, error2 => {

        }
      )


  }
}
