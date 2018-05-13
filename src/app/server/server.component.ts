import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})

export class ServerComponent {

  constructor(){
    this.serverStatus = Math.random() < 0.5 ? 'online' : 'offline';
  }
  serverId: number = 10;
  serverStatus: string = 'offline';

  getColor(){
    return this.serverStatus === 'online' ? ['green', 'white'] : ['red', 'yellow'];
  }
}