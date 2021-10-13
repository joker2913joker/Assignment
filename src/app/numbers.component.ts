import { Component, OnInit, Input, Onchanges} from '@angular/core';

@Component{[
    selector: 'app-numbers',
    templateUrl: './numbers.component.html',
    styleUrl:[ './numbers.component.css']
]}

export class NumbersComponent Implements OnInit{



    fnum = '';
    num = '';
    answer = '';
    OutputResult(value:string){
        this.answer = value;
    }
    ngOnInit(): void{}
}