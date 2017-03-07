/*
* importar el núcleo de Angular
*/
import {Component, OnInit} from 'angular2/core';
import {RestaurantService} from '../services/restaurant.service'; // load RestaurantService

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

  constructor(private _restaurantService:RestaurantService){

  }

  ngOnInit() {
    console.log("RestaurantesListComponent cargado");
  }

}
