import {Directive,ElementRef,Renderer,HostListener,OnInit} from '@angular/core';

@Directive({
    selector: '[myHighLight]',
    inputs: ["myHighLight"]
})
export class MyHighlightDirective implements OnInit{

    public myHighLight:string;

    constructor(private _el:ElementRef,private _renderer:Renderer){}

    ngOnInit(){
        if(+this.myHighLight > 30)
            this._renderer.setElementStyle(this._el.nativeElement,"background-color","yellow");
    }


}