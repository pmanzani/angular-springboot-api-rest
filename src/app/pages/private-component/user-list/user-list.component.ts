import {  toastError, toastSuccess } from './../../../../_helpers/swal';
import { UserService } from '../../../../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { FormControl, FormGroup } from '@angular/forms';
import { pseudoRandomBytes } from 'crypto';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: any[] = [];
  selectedUser: any;
  allComplete: boolean = false;
  title: any;

  constructor(private userService: UserService,
    private loader: NgxUiLoaderService) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  private async getUsers() {
    this.loader.start();
    this.users = await this.userService.getUsersList();
    this.users.map(user => ({...user, checked: false}));
    this.loader.stop();
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
      return;
    }

    try {
      this.loader.start();
      await this.userService.removeUser(users);
    } catch(e) {
      toastError.fire('Ocorreu um erro!');
      console.error(e);
    } finally {
      this.loader.stop();
    }

    this.users = this.users.filter(user => !user.checked);
  }

  selectUser(user: any) {
    this.title = "Alteração";

    this.selectedUser = JSON.parse(JSON.stringify(user));

    // BUG
    // Preenche o campo de Data de Aniversário do modal. Sem isso o campo fica em branco
    if (this.selectedUser.birthday) {
      let date = new Date(this.selectedUser.birthday);
      setTimeout(() => { this.selectedUser.birthday = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2) }, 0);
    }
  }

  async saveUser(selectedUser: Object) {
    try {
      this.loader.startBackground();

      let stringBirthday = selectedUser.birthday;
      selectedUser.birthday = new Date(selectedUser.birthday + ' 00:00:00 GMT-0300');

      await this.userService.updateUser(selectedUser);
      this.users[this.users.findIndex(user => user.id == selectedUser.id)] = JSON.parse(JSON.stringify(this.selectedUser));

      selectedUser.birthday = stringBirthday;
      toastSuccess.fire("Dados atualizados com sucesso!");

    } catch(e) {
      toastError.fire('Ocorreu um erro ao atualizar os dados!');
      console.error(e);

    } finally {
      this.loader.stopBackground();
    }
  }

  newUser() {
    this.title = "Novo usuário";
    this.selectedUser = {fullname: '', age: '', sex: '', birthday: '', email: '', password: ''};
  }
}
