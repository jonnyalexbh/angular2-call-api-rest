System.register(["angular2/core", "../services/restaurant.service", "angular2/router"], function (exports_1, context_1) {
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
    var core_1, restaurant_service_1, router_1, RestaurantDetailComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (restaurant_service_1_1) {
                restaurant_service_1 = restaurant_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }
        ],
        execute: function () {
            /*
            * exportamos la clase para que el componente este disponible
            */
            RestaurantDetailComponent = (function () {
                /*
                * constructor
                */
                function RestaurantDetailComponent(_restaurantService, _routeParams) {
                    this._restaurantService = _restaurantService;
                    this._routeParams = _routeParams;
                }
                /*
                * ngOnInit
                */
                RestaurantDetailComponent.prototype.ngOnInit = function () {
                    this.parameter = this._routeParams.get("id");
                    this.getRestaurant();
                };
                /*
                * getRestaurant
                */
                RestaurantDetailComponent.prototype.getRestaurant = function () {
                    var _this = this;
                    var id = this._routeParams.get("id");
                    this._restaurantService.getRestaurant(id)
                        .subscribe(function (response) {
                        _this.restaurant = response.data;
                        _this.status = response.status;
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
                return RestaurantDetailComponent;
            }());
            RestaurantDetailComponent = __decorate([
                core_1.Component({
                    templateUrl: "app/views/restaurant-detail.html",
                    providers: [restaurant_service_1.RestaurantService]
                })
                /*
                * exportamos la clase para que el componente este disponible
                */
                ,
                __metadata("design:paramtypes", [restaurant_service_1.RestaurantService,
                    router_1.RouteParams])
            ], RestaurantDetailComponent);
            exports_1("RestaurantDetailComponent", RestaurantDetailComponent);
        }
    };
});
//# sourceMappingURL=restaurant-detail.component.js.map