import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {GLOBAL} from "./globalRoute";
import {Observable} from "rxjs/index";

@Injectable()

export class PlanetasService {
  public url: string;

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  getPlanets(): Observable <any>{
    console.log('entro');
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.post(this.url + 'planetas', {headers: headers});
  }
}
