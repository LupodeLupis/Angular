import { Component, 
  OnInit, 
  Input, 
  OnChanges, 
  SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit , OnChanges {
  @Input() name: string;

  constructor() { 
    console.log("constructor() is called")
  }

  ngOnChanges(changes:SimpleChanges){
    console.log(changes)  // The property name riside inside SimmpleChanges()
    console.log("ngOnChanges() is called before ngOnInit()")
  } 

  ngOnInit() {
    console.log("ngOnInit() is called")
  }


  
}
