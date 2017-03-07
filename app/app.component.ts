/*
* importar el núcleo de Angular
*/
import {Component} from 'angular2/core';
import {RestaurantsListComponent} from './components/restaurants-list.component';

import {ROUTER_DIRECTIVES, RouteConfig, Router} from 'angular2/router';  // route

/*
* decorador component indicamos el selector donde cargar la
* plantilla y definimos el html de la plantilla. Utilizamos las
* dobles llaves para mostrar el valor de las propiedades o
* atributos de la clase AppComponent
*/
@Component({
  selector: 'my-app',
  templateUrl:"app/views/index.html",
  directives: [RestaurantsListComponent, ROUTER_DIRECTIVES]
})
/*
* exportamos la clase para que el componente este disponible
*/
export class AppComponent {
  public title:string = "Restaurants";
}
