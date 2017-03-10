System.register(["angular2/core", "../services/restaurant.service", "../model/restaurant", "angular2/router"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, restaurant_service_1, restaurant_1, router_1, RestaurantAddComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (restaurant_service_1_1) {
                restaurant_service_1 = restaurant_service_1_1;
            },
            function (restaurant_1_1) {
                restaurant_1 = restaurant_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }
        ],
        execute: function () {
            /*
            * exportamos la clase para que el componente este disponible
            */
            RestaurantAddComponent = (function () {
                /*
                * constructor
                */
                function RestaurantAddComponent(_restaurantService, _routeParams, _router) {
                    this._restaurantService = _restaurantService;
                    this._routeParams = _routeParams;
                    this._router = _router;
                }
                /*
                * ngOnInit
                */
                RestaurantAddComponent.prototype.ngOnInit = function () {
                    this.restaurant = new restaurant_1.Restaurant(0, this._routeParams.get("name"), this._routeParams.get("address"), this._routeParams.get("description"), "null", "small");
                    console.log("Component restaurant add");
                };
                return RestaurantAddComponent;
            }());
            RestaurantAddComponent = __decorate([
                core_1.Component({
                    templateUrl: "app/views/restaurant-add.html",
                    providers: [restaurant_service_1.RestaurantService]
                })
                /*
                * exportamos la clase para que el componente este disponible
                */
                ,
                __metadata("design:paramtypes", [restaurant_service_1.RestaurantService,
                    router_1.RouteParams,
                    router_1.Router])
            ], RestaurantAddComponent);
            exports_1("RestaurantAddComponent", RestaurantAddComponent);
        }
    };
});
//# sourceMappingURL=restaurant-add.component.js.map