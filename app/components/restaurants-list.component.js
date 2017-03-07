System.register(["angular2/core", "../services/restaurant.service"], function (exports_1, context_1) {
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
    var core_1, restaurant_service_1, RestaurantsListComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (restaurant_service_1_1) {
                restaurant_service_1 = restaurant_service_1_1;
            }
        ],
        execute: function () {
            /*
            * exportamos la clase para que el componente este disponible
            */
            RestaurantsListComponent = (function () {
                function RestaurantsListComponent(_restaurantService) {
                    this._restaurantService = _restaurantService;
                    this.title = "Restaurant list:";
                }
                RestaurantsListComponent.prototype.ngOnInit = function () {
                    this.getRestaurants();
                    console.log("RestaurantesListComponent cargado");
                };
                RestaurantsListComponent.prototype.getRestaurants = function () {
                    var _this = this;
                    this._restaurantService.getRestaurants()
                        .subscribe(function (result) {
                        _this.restaurants = result.data,
                            _this.status = result.status;
                        if (_this.status !== "success") {
                            alert("Server error");
                        }
                    }, function (error) {
                        _this.errorMessage = error;
                        if (_this.errorMessage !== null) {
                            console.log(_this.errorMessage);
                            alert("Request failed");
                        }
                    });
                };
                return RestaurantsListComponent;
            }());
            RestaurantsListComponent = __decorate([
                core_1.Component({
                    selector: 'restaurants-list',
                    templateUrl: "app/views/restaurants-list.html",
                    providers: [restaurant_service_1.RestaurantService]
                })
                /*
                * exportamos la clase para que el componente este disponible
                */
                ,
                __metadata("design:paramtypes", [restaurant_service_1.RestaurantService])
            ], RestaurantsListComponent);
            exports_1("RestaurantsListComponent", RestaurantsListComponent);
        }
    };
});
//# sourceMappingURL=restaurants-list.component.js.map