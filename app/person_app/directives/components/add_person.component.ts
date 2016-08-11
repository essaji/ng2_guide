import {Component} from '@angular/core';
import {PersonService} from "../../services/person.service";
import {Person} from "../../person";
import {FormBuilder,FormControl,Validators,FormGroup,REACTIVE_FORM_DIRECTIVES} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
    selector: "add-person",
    template: `
        <div class="content" >
            <form [formGroup]="addPersonForm" (ngSubmit)="addPerson()" >
                <input type="text" placeholder="Enter name" [formControl]="nameCtrl" [class.error]="!nameCtrl.valid && nameCtrl.touched" /><br>
                <input type="text" placeholder="Enter age" [formControl]="ageCtrl" [class.error]="!ageCtrl.valid && ageCtrl.touched" /><br>
                <button [disabled]="!addPersonForm.valid" >Add Person</button>
            </form>
        </div>
    `,
    styleUrls: ["app/styles/common.css"],
    directives: [REACTIVE_FORM_DIRECTIVES]
})
export class AddPersonCmp{

    public addPersonForm:FormGroup;
    public nameCtrl:FormControl = new FormControl("",Validators.required);
    public ageCtrl:FormControl = new FormControl("",Validators.compose([
        Validators.required, function(control:FormControl){
            if(!(/^\d+$/.test(control.value)))
                return {invalid: true}
        }
    ]));

    constructor(private _service:PersonService, private _fb:FormBuilder, private _router:Router){
        var self = this;
        this.addPersonForm = this._fb.group({
            name: self.nameCtrl,
            age: self.ageCtrl
        });
    }

    addPerson(){
        this._service.people.push(this.addPersonForm.value);
        alert("Person added successfully!");
        this._router.navigate(["/"])
    }
}