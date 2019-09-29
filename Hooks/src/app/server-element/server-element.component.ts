import { Component, 
  OnInit, 
  Input, 
  OnChanges, 
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit , 
OnChanges, 
DoCheck, 
AfterContentInit, 
AfterContentChecked, 
AfterViewInit, 
AfterViewChecked, 
OnDestroy {
  @Input() name: string;
  @ViewChild('heading', {static:true}) header:ElementRef;

  constructor() {   
    console.log("constructor() is called")
  }

  ngOnChanges(changes:SimpleChanges){
    console.log(changes)  // The property name riside inside SimmpleChanges()
    console.log("ngOnChanges() is called")
  } 
  
  ngOnInit() {
    console.log("ngOnInit() is called")
    console.log(" I cannot access the @VievChild reference " ,"[" ,this.header.nativeElement.textContent, "] inside  ngOnInit() ")
  }

  ngDoCheck(){
    console.log("ngDoCheck() is called")
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit() is called")
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked() is called")
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit() is called")
    console.log(" .. but I can access it [" ,  this.header.nativeElement.textContent , "] in ngAfterViewInit()")
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked() is called")
  }

  ngOnDestroy(){
    console.log("ngOnDestroy() is called")
  }

 


  
}
