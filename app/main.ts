import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router'; // route
import {HTTP_PROVIDERS}	from "angular2/http"; // load HTTP_PROVIDERS
import {AppComponent} from './app.component';

bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS]);
