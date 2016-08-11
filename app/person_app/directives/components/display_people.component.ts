import {Component} from '@angular/core';
import {PersonService} from "../../services/person.service";
import {DisplayPersonCmp} from './display_person.component';

@Component({
    selector: "display-people",
    template: `
        <div class="content" >
            <div *ngFor="let person of _service.people" style="display: inline-block;" >
                <display-person [name]="person.name" [age]="person.age" (onPersonSave)="savePerson($event,person)" ></display-person>
            </div>
        </div>
    `,
    styleUrls: ["app/styles/common.css"],
    directives: [DisplayPersonCmp]
})
export class DisplayPeopleCmp{

    constructor(private _service:PersonService){}

    savePerson(newPerson,person){
        person = newPerson;
    }
}