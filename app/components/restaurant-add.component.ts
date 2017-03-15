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
  templateUrl:"app/views/restaurant-add.html",
  providers:[RestaurantService]
})
/*
* exportamos la clase para que el componente este disponible
*/
export class RestaurantAddComponent implements OnInit {
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
  * onSubmit
  */
  onSubmit(){
    this._restaurantService.addRestaurant(this.restaurant)
    .subscribe(
      response => {
        this.status = response.status;
        if(this.status !== "success"){
          alert("Error en el servidor");
        }
      },
      error => {
        this.errorMessage = <any>error;

        if(this.errorMessage !== null){
          console.log(this.errorMessage);
          alert("Error en la petición");
        }
      }
    );
    this._router.navigate(["Restaurants"]);
  }
  /*
  * ngOnInit
  */
  ngOnInit(){
    this.restaurant = new Restaurant(
      0,
      this._routeParams.get("name"),
      this._routeParams.get("address"),
      this._routeParams.get("description"),
      "null",
      "small"
    );
  }
}
