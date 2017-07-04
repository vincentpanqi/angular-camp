import { Component, OnInit, Inject } from '@angular/core';
// imported here
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userName: string;
  constructor(private userService: UserService,
              @Inject('API_URL') private apiUrl: string) {
    // empty because we don't have to do anything else!
  }

  ngOnInit() {
  }

  signIn(): void {
    this.userService.setUser({
      name: 'Nate Murray'
    });

    this.userName = this.userService.getUser().name;

    console.log(`User name is: ${this.userName}, API_URL=${this.apiUrl}`);
  }

}
