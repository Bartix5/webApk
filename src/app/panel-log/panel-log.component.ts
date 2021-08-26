import { Component} from '@angular/core';

@Component({
  selector: 'app-panel-log',
  templateUrl: './panel-log.component.html',
  styleUrls: ['./panel-log.component.css']
})
export class PanelLogComponent{
  activeButton = true;
  nameButton = 'Zaloguj się';
  welcomeString = '';
  userName = '';
  userPass = '';


  welcome() {
    if (this.userPass.length == 0 || this.userName.length == 0) {
      this.welcomeString = 'Podaj dane do logowania';
    } else {
        this.welcomeString = 'Zalogowano. Witaj ' + this.userName + '!';
        this.nameButton = 'Zalogowano';
        this.activeButton = false;
    }
  }

  updateName(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
  }

  checkPass(event: Event) {
    this.userPass = (<HTMLInputElement>event.target).value;
  }
}
