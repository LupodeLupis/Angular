import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() nameEmitter = new EventEmitter<{serverName:string, serverContent:string}>();
  @Output() nameEmitter1 = new EventEmitter<{serverName:string, serverContent:string}>();
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer(inputValueFromHtml:HTMLInputElement) {
  this.nameEmitter.emit({
    serverName:inputValueFromHtml.value, 
    serverContent:this.newServerContent
  });
  }

  onAddBlueprint(inputValueFromHtml:HTMLInputElement) {
    this.nameEmitter1.emit({
      serverName:inputValueFromHtml.value, 
      serverContent:this.newServerContent})
  }

}
