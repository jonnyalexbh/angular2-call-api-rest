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
  providers:[RestaurantService],
  directives: [ROUTER_DIRECTIVES]
})
/*
* exportamos la clase para que el componente este disponible
*/
export class RestaurantsListComponent {
  public title:string = "Restaurant list:";
  public restaurants:Restaurant[];
  public status: string;
  public errorMessage;
  public confirm;

  constructor(private _restaurantService:RestaurantService){

  }

  ngOnInit() {
    this.getRestaurants();
    console.log("RestaurantesListComponent cargado");
  }

  getRestaurants(){
    let box_restaurantes = <HTMLElement>document.querySelector("#restaurants-list .loading");
    box_restaurantes.style.visibility = "visible";

    this._restaurantService.getRestaurants()
    .subscribe(
      result => {
        this.restaurants = result.data,
        this.status = result.status

        if(this.status !== "success"){
          alert("Server error");
        }

        box_restaurantes.style.display = "none";

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
  /*
  * onDeleteConfirm
  */
  onDeleteConfirm(id){
    this.confirm = id;
  }
  /*
  * onCancel
  */
  onCancel(id){
    this.confirm = null;
  }
  /*
  * onDeleteRestaurant
  */
  onDeleteRestaurant(id){
    this._restaurantService.deleteRestaurant(id)
    .subscribe(
      result => {
        this.status = result.status

        if(this.status !== "success"){
          alert("Server error");
        }
        this.getRestaurants();
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
