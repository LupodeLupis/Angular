import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'server', name:'TestServer' , content:"Test"}];
  /*
   We get this data in onServerAdded and we call onServerAdded once our custom event occurs on the cockpit
   this method will be executed after the button on cockpit componenent will be executed  -- after 'the server will be created'  -- 
   */
  onServerAdded(serverData:{serverName: string, serverContent: string}) {  
       this.serverElements.push({
       type: 'server',
       name: serverData.serverName,
       content: serverData.serverContent
     });
   }
   onBlueprintAdded(bluePrint:{serverName:string, serverContent:string}) {
       this.serverElements.push({
       type: 'blueprint',
       name: bluePrint.serverName,
       content: bluePrint.serverContent
     });
   }

   onChangeElement(){
     this.serverElements[0].name = 'Changed!'
   }

   onDestroyFirst(){
    this.serverElements.splice(0,1); // there is only one element
  }
}
