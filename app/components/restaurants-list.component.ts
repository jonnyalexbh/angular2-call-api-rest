/*
* importar el núcleo de Angular
*/
import {Component, OnInit} from 'angular2/core';
import {RestaurantService} from '../services/restaurant.service'; // load RestaurantService
import {Restaurant} from '../model/restaurant';

import {ROUTER_DIRECTIVES, RouteConfig, Router} from 'angular2/router';  // route

/*
* decorador component indicamos el selector donde cargar la
* plantilla y definimos el html de la plantilla. Utilizamos las
* dobles llaves para mostrar el valor de las propiedades o
* atributos de la clase AppComponent
*/
@Component({
  selector: 'restaurants-list',
  templateUrl:"app/views/restaurants-list.html",
  providers:[RestaurantService]
})
/*
* exportamos la clase para que el componente este disponible
*/
export class RestaurantsListComponent {
  public title:string = "Restaurant list:";
  public restaurants:Restaurant[];
  public status: string;
  public errorMessage;

  constructor(private _restaurantService:RestaurantService){

  }

  ngOnInit() {
    this.getRestaurants();
    console.log("RestaurantesListComponent cargado");
  }

  getRestaurants(){
    this._restaurantService.getRestaurants()
    .subscribe(
      result => {
        this.restaurants = result.data,
        this.status = result.status

        if(this.status !== "success"){
          alert("Server error");
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
