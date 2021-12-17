import {  toastError } from './../../../../_helpers/swal';
import { UserService } from '../../../../_services/user.service';
import { Component, OnInit } from '@angular/core';

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
    this.users = await this.userService.getUsersList();
    this.users.map(user => ({...user, checked: false}));
  }

  toggleCheckAll(checked: boolean) {
    this.allComplete = checked;
    this.users.forEach(user => user.checked = checked);
  }

  updateCheck(user: any) {
    user.checked = !user.checked;
    this.allComplete = this.users != null && this.users.every(user => user.checked);
  }

  async removeUser() {
    let users = this.users.filter(user => user.checked);
    if (users.length == 0) {
      toastError.fire('Nenhum usuário selecionado');
    }

    try {
      await this.userService.removeUser(users);
    } catch(e) {
      toastError.fire('Ocorreu um erro!');
      console.error(e)
    }

    this.users = this.users.filter(user => !user.checked);
  }
}
