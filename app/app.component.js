System.register(["angular2/core", "./components/restaurants-list.component", "./components/restaurant-detail.component", "angular2/router"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, restaurants_list_component_1, restaurant_detail_component_1, router_1, AppComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (restaurants_list_component_1_1) {
                restaurants_list_component_1 = restaurants_list_component_1_1;
            },
            function (restaurant_detail_component_1_1) {
                restaurant_detail_component_1 = restaurant_detail_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }
        ],
        execute: function () {
            /*
            * exportamos la clase para que el componente este disponible
            */
            AppComponent = (function () {
                /*
                * decorador component indicamos el selector donde cargar la
                * plantilla y definimos el html de la plantilla. Utilizamos las
                * dobles llaves para mostrar el valor de las propiedades o
                * atributos de la clase AppComponent
                */
                function AppComponent() {
                    this.title = "Restaurants";
                }
                return AppComponent;
            }());
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'my-app',
                    templateUrl: "app/views/index.html",
                    directives: [restaurants_list_component_1.RestaurantsListComponent, restaurant_detail_component_1.RestaurantDetailComponent, router_1.ROUTER_DIRECTIVES]
                })
                /*
                * route
                */
                ,
                router_1.RouteConfig([
                    { path: '/', name: "Restaurants", component: restaurants_list_component_1.RestaurantsListComponent, useAsDefault: true },
                    { path: '/restaurant/:id', name: "Restaurant", component: restaurant_detail_component_1.RestaurantDetailComponent }
                ])
                /*
                * exportamos la clase para que el componente este disponible
                */
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    };
});
//# sourceMappingURL=app.component.js.map