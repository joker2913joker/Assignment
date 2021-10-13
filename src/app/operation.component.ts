import { Input, OnInit, Output } from "@angular/core";

import { EventEmitter } from "stream";



export class OperationComponent implements OnInit{

    @Input() FirstNum = " ";

    @Input() SecondNum = " ";

    @Output() answer = new EventEmitter<string>();

    add(numOne:string, numTwo:string){

        this.answer.emit((parseInt(numOne) + parseInt(numTwo)).toString());

    }

    sub(numOne:string, numTwo:string){

    this.answer.emit((parseInt(numOne) - parseInt(numTwo)).toString());

}



mul (numOne:string, numTwo:string){

    this.answer.emit((parseInt(numOne) * parseInt(numTwo)).toString());

}



div (numOne:string, numTwo:string){

    this.answer.emit((parseInt(numOne) / parseInt(numTwo)).toString());

}

constructor() {}

ngOnInit(): void {



}

}