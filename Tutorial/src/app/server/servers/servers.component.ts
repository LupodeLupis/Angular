import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServers = false;
  serverCreation = 'The server was not created!';
  serverName = '';
  username = '';
  constructor() {
      setTimeout(() => {
        this.allowNewServers = true;
      },2000)
   }

  ngOnInit() {
    
  }

  onCreateServer(){
     this.serverCreation = 'Server was created! The name is ' + this.serverName;
  }

  onUpdateServerName(event:any) {
     this.serverName = (<HTMLInputElement>event.target).value;
  }
}
