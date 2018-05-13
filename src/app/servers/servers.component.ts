import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-servers",
  templateUrl: './servers.component.html',
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = '';
  serverCreated = false;
  

  constructor() {
    
  }

  ngOnInit() { }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created. Name is ' + this.serverName;
    this.allowNewServer = true;
    this.serverName='';
  }
  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
    this.serverName.length > 0 ? this.allowNewServer = false : this.allowNewServer = true;
  }
}
