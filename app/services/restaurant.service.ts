import {Injectable} from 'angular2/core';
import {Http, Response, Headers} from 'angular2/http'; // load http
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
  /*
  * addRestaurant
  */
  addRestaurant(restaurant: Restaurant)
  {
    let json = JSON.stringify(restaurant);
    let params = "json="+json;
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

    return this._http.post("http://localhost/api-rest-slim/restaurantes-api.php/restaurantes",
    params, {headers: headers}).map(res => res.json());
  }
  /*
  * editRestaurant
  */
  editRestaurant(id: string, restaurant: Restaurant) {
    let json = JSON.stringify(restaurant);
    let params = "json="+json;
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

    return this._http.post("http://localhost/api-rest-slim/restaurantes-api.php/update-restaurante/"+id,
    params, {headers: headers}).map(res => res.json());
  }
  /*
  * deleteRestaurant
  */
  deleteRestaurant(id: string){
    return this._http.get("http://localhost/api-rest-slim/restaurantes-api.php/delete-restaurante/"+id)
    .map(res => res.json());
  }
}
