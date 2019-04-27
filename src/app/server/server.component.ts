import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent {
    serverCreated = false;
    serverName = '';

    onCreateServer(event) {
        this.serverCreated = true;
        this.serverName = event.target.value;
    }
    
}