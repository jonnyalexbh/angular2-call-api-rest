import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http'; // load http
import "rxjs/add/operator/map"; // load map ajax request result
import {Observable} from "rxjs/Observable"; // load request result
import {Restaurant} from '../model/restaurant';

@Injectable()
export class RestaurantService{

  constructor(private _http: Http){}
  /*
  * getRestaurants
  */
  getRestaurants(){
    return this._http.get("http://localhost/api-rest-slim/restaurantes-api.php/restaurantes")
    .map(res => res.json());
  }
  /*
  * getRestaurant
  */
  getRestaurant(id: string){
    return this._http.get("http://localhost/api-rest-slim/restaurantes-api.php/restaurante/"+id)
    .map(res => res.json());
  }
}
