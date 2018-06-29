import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
  <div style="height:'40%'">
    <div style="text-align:center"><strong>HTML5 Mini Project</strong></div>              
    <div (mouseup) ="trigger2()"  style="height:;font-size:500%;width:100;text-align:center;background-color:gray">
        <div *ngIf="showadd" style="text-align:center; margin-left:30%" >
            <div style="float:left"><button (click)="results( )" >{{name}}:</button>&nbsp;</div>    
            <div *ngFor= "let a of arra()" style="float:left" >        
                <input type="text" #text (change) ="initialization(text.value,a)"/>&nbsp;
            </div>
        </div>
    &nbsp;<br/>
    &nbsp;<br/>
    &nbsp;<br />
    </div><br />

    <div *ngFor= "let a of arr;">
     <button (mousedown) ="trigger(a)" style="float:left;width:100;height:100;padding:10px 10px;margin-left:160px;text-align:center;background-color:red;">{{a}}</button>  
    </div>

  </div>
  `
})

export class UserComponent  { 
    arr: String[];
    signature: any[];
    name: any;
    temp:any;
    temp2:any;
    size:number;
    showadd:boolean;
    result: number;
    emp= [];
    val = [];
    i: number = 0;
    j: number = 0;
    
    constructor(){
        //Input the name and the signature here when inputing new documents
        this.arr =  ['addition' , 'subtract' , 'foo', 'doSomethingComplicated' ];
        this.signature= [this.addition, this.subtract, this.foo, this.doSomethingComplicated];
    }
 
    //same test functions written. Add more cases here for testing 
    addition(x,y) {
        var result = Number.parseInt(x)+Number.parseInt(y);
        alert(result);
    }

    subtract(x,y) { 
        var result = x-y;
        alert(result);
    }
    
    foo(x,y,z) {
        var result = Number.parseInt(x)+Number.parseInt(y)-z;
        alert(result);
    }
    
    doSomethingComplicated(x) {
        alert(x);
    }


    //Used to get values from the input text boxes
    initialization(value,index){
        this.emp[index]=value; 
    }

    //Calculate results by triggering appropriate function
    results( ){
        this.temp2(...this.emp);
    }

    //Drag and Drop Functionality
    trigger(received){
        var i =this.arr.indexOf(received);    
        this.temp=received;
        this.temp2 = this.signature[i];
        this.size=this.signature[i].length;

        this.showadd=false;
        
        for(this.j=0;this.j<this.size;this.j++){
            this.emp.push(1); 
        }

        var result="Dragged";
        document.getElementById("Result").innerHTML=result;

    }

    arra() {
        this.val = [];
        for (this.i = 0; this.i < this.size; this.i++) {
          this.val[this.i]=this.i;
        }
        return this.val; 
    }

    //Drag and Drop Functionality
    trigger2(){     
        this.name=this.temp;
        this.showadd=true;
        var res=document.getElementById("Result").innerHTML;
        document.getElementById("Result").innerHTML=res+" Dropped";
    }
}
