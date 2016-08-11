import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class PersonService{

    public people = [];

    constructor(private _http:Http){
        var self = this;
        this._http.get("app/person_app/services/data.json").subscribe(
            (data) => self.people = data.json(),
            (err) => console.log(err)
        );
    }

    insertData(person:{name:string,age:number}){

        this.people.push(person);
    }
}