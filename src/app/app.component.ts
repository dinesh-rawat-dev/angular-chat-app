import {
  Component
} from '@angular/core';
import {
  XMPPService
} from './ejab.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ejab';
  private jid: string = "";
  private host: string = "";
  private password: string = "";
  constructor(public xmppService: XMPPService) {
      this.jid = "dinesh1"
      this.password = "123456";
      this.host = "localhost";
  }

  login() {
      // this.xmppService.logout();
      console.info('dinesh1 login')
      this.xmppService.login(this.jid, this.host, this.password);
  }

  sendMessage() {
      this.xmppService.sendMessage('dinesh@localhost', 'testing...');
  }

  createGroup() {
      this.xmppService.createGroup('ram');
  }

  listRooms() {
    this.xmppService.listRooms(
      result => console.log('Success: ', result),
      error => console.log('Error: ', error),);
  }
}