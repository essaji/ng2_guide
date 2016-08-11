import {Component} from '@angular/core';
import {personRoutes} from './routes/person.routes';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    selector: 'app',
    template: `
        <div class="home" >
            <a [routerLink]="['/']">Display People</a> |
            <a [routerLink]="['/add_person']">Add Person</a>
        </div>

        <router-outlet></router-outlet>
    `,
    providers: [personRoutes],
    directives: [ROUTER_DIRECTIVES]
})
export class MainApp{

}