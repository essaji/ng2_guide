import {Component,EventEmitter} from '@angular/core';
import {Person} from '../../person';
import {MyHighlightDirective} from '../attribute/myhighlight.directive'

@Component({
    selector: "display-person",
    template: `
        <div class="child-content" >
            <div *ngIf="!editMode" [myHighLight]="age">
                <label>Name:</label> {{name}} <br>
                <label>Age: </label> {{age}} <br>
                <a class="link" (click)="editMode = true" >Edit</a>
            </div>
            <div *ngIf="editMode">
                <input type="text" [(ngModel)]="name" placeholder="Enter name" /><br>
                <input type="text" [(ngModel)]="age" placeholder="Enter age" /><br>
                <button (click)="savePerson()" >Save</button>
            </div>
        </div>
    `,
    inputs: ["name","age"],
    outputs: ["onPersonSave"],
    styleUrls: ["app/styles/common.css"],
    directives: [MyHighlightDirective]
})
export class DisplayPersonCmp{
    public name:string = "";
    public age:string = "";
    public editMode = false;
    public onPersonSave:EventEmitter<Person> = new EventEmitter<Person>();

    savePerson(){
        var self = this;
        this.onPersonSave.emit({
            name: self.name,
            age: self.age
        });

        this.editMode = false;
    }
}