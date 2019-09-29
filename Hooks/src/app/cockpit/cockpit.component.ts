import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() nameEmitter = new EventEmitter<{serverName:string, serverContent:string}>();
  @Output() nameEmitter1 = new EventEmitter<{serverName:string, serverContent:string}>();

  // {static: true} = if you want access the selector inside the ngOnInit()
  // {static: false} = if you do not want access the selector inside the ngOnInit()
  // ViewChild fetch local reference from the HTM template and van be used to access a value through its ElementRef object 
  // anotherInputReference is passed as parameter to @ViewChild()
  @ViewChild('anotherInputReference',{static: false}) serverContentInput : ElementRef;  

  constructor() { }

  ngOnInit() {
  }

  onAddServer(inputValueFromHtml:HTMLInputElement) {
    console.log(this.serverContentInput)
    //this.serverContentInput.nativeElement.value = 'anyvalue'  DO NOT DO THIS!!!  - you should not access the DOM passing a value to @ViewChild()-- 
    this.nameEmitter.emit({
    serverName:inputValueFromHtml.value, 
    serverContent:this.serverContentInput.nativeElement.value
  });
  }

  onAddBlueprint(inputValueFromHtml:HTMLInputElement) {
    this.nameEmitter1.emit({
      serverName:inputValueFromHtml.value, 
      serverContent:this.serverContentInput.nativeElement.value
    })
  }

}
