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
    var core_1, restaurant_service_1, restaurant_1, router_1, RestaurantEditComponent;
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
            RestaurantEditComponent = (function () {
                /*
                * constructor
                */
                function RestaurantEditComponent(_restaurantService, _routeParams, _router) {
                    this._restaurantService = _restaurantService;
                    this._routeParams = _routeParams;
                    this._router = _router;
                    this.title = "Edit restaurant";
                }
                /*
                * ngOnInit
                */
                RestaurantEditComponent.prototype.ngOnInit = function () {
                    this.restaurant = new restaurant_1.Restaurant(parseInt(this._routeParams.get("id")), this._routeParams.get("nombre"), this._routeParams.get("address"), this._routeParams.get("description"), "null", this._routeParams.get("price"));
                    this.getRestaurant();
                };
                /*
                * callPrice
                */
                RestaurantEditComponent.prototype.callPrice = function (value) {
                    this.restaurant.cost = value;
                };
                /*
                * getRestaurant
                */
                RestaurantEditComponent.prototype.getRestaurant = function () {
                    var _this = this;
                    var id = this._routeParams.get("id");
                    this._restaurantService.getRestaurant(id)
                        .subscribe(function (response) {
                        // this.restaurant = response.data;
                        _this.restaurant.name = response.data.nombre;
                        _this.restaurant.address = response.data.direccion;
                        _this.restaurant.description = response.data.descripcion;
                        _this.restaurant.cost = response.data.precio;
                        _this.status = response.status;
                        if (_this.status !== "success") {
                            _this._router.navigate(["Restaurants"]);
                        }
                    }, function (error) {
                        _this.errorMessage = error;
                        if (_this.errorMessage !== null) {
                            console.log(_this.errorMessage);
                            alert("Request failed");
                        }
                    });
                };
                return RestaurantEditComponent;
            }());
            RestaurantEditComponent = __decorate([
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
            ], RestaurantEditComponent);
            exports_1("RestaurantEditComponent", RestaurantEditComponent);
        }
    };
});
//# sourceMappingURL=restaurant-edit.component.js.map