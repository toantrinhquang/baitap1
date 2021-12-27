import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
})
export class ListUserComponent implements OnInit {
  newUser = '';
  newPass = '';

  arrlistUser = [{ id: 1, username: 'toan', password: 'loc123' }];

  constructor() {}

  ngOnInit(): void {}

  addUser() {
    this.arrlistUser.unshift({
      id: this.arrlistUser.length + 1,
      username: this.newUser,
      password: this.newPass,
    });
    this.newUser = '';
    this.newPass = '';
  }

  login() {
    var valueid_input = (<HTMLInputElement>(
      document.getElementsByName('login-username')[0]
    )).value;
    var valuepass_input = (<HTMLInputElement>(
      document.getElementsByName('login-password')[0]
    )).value;
    var user = this.arrlistUser.find(
      (x) => x.username == valueid_input.toString()
    );
    if (user && user.password === valuepass_input.toString()) {
      alert('đăng nhập thành công');
    } else {
      alert('đăng nhập thất bại');
    }
  }
}
