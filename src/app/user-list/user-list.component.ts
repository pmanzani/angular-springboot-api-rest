import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: any[] = [];
  allComplete: boolean = false;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  private async getUsers() {
    let usersTemp: any[] = [];
    usersTemp = await this.userService.getUsersList().toPromise();

    usersTemp.forEach(u => {
      this.users.push({...u, checked: false});
    });

  }

  toggleCheckAll(checked: boolean) {
    this.allComplete = checked;
    this.users.forEach(user => user.checked = checked);
  }

  updateCheck(user: any) {
    user.checked = !user.checked;
    this.allComplete = this.users != null && this.users.every(user => user.checked);
  }

}
