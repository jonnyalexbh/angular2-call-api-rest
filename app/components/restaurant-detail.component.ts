/*
* importar el núcleo de Angular
*/
import {Component, OnInit} from 'angular2/core';
import {RestaurantService} from '../services/restaurant.service'; // load RestaurantService
import {Restaurant} from '../model/restaurant';

import {Router, RouteParams} from 'angular2/router';  // load RouteParams

/*
* decorador component indicamos el selector donde cargar la
* plantilla y definimos el html de la plantilla. Utilizamos las
* dobles llaves para mostrar el valor de las propiedades o
* atributos de la clase AppComponent
*/
@Component({
  templateUrl:"app/views/restaurant-detail.html",
  providers:[RestaurantService]
})
/*
* exportamos la clase para que el componente este disponible
*/
export class RestaurantDetailComponent implements OnInit {

  public restaurant:Restaurant;
  public status: string;
  public errorMessage;
  /*
  * constructor
  */
  constructor(
    private _restaurantService:RestaurantService,
    private _routeParams: RouteParams,
    private _router: Router
  ){}
  /*
  * ngOnInit
  */
  ngOnInit(){
    this.getRestaurant();
  }
  /*
  * getRestaurant
  */
  getRestaurant(){
    let id = this._routeParams.get("id");
    this._restaurantService.getRestaurant(id)
    .subscribe(
      response => {
        this.restaurant = response.data;
        this.status = response.status;

        if(this.status !== "success"){
          // alert("Server error");
          this._router.navigate(["Restaurants"]);
        }

      },
      error => {
        this.errorMessage = <any>error;

        if(this.errorMessage !== null){
          console.log(this.errorMessage);
          alert("Request failed");
        }

      }
    );
  }
}
