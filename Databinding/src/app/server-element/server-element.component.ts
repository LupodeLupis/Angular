import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
 // @Input() element: {type:string, name:string, content:string};    // Add @Input() decorator for passing the property to to the parent component/any component that host
                                                                  // <app-server-element></app-server-element>

  @Input('alias') element: {type:string, name:string, content:string};  // if you want use another property name to be exposed outside the child component you can use 'alias' 


  constructor() { }

  ngOnInit() {
  }

}
