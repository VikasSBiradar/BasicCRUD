import { Component } from '@angular/core';
import { User } from '../../user';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  userList : User[] = [];
  first = 0;
  rows = 10;
  constructor(private userService : UserService){}

  ngOnInit() : void{
    this.userList = this.userService.getUsers();
  }

  /*Pagination logic*/
  next() {
    this.first = this.first + this.rows;
}
  prev() {
    this.first = this.first - this.rows;
  }
  reset() {
    this.first = 0;
  }
  isLastPage(): boolean {
    return this.userList ? this.first === (this.userList.length - this.rows) : true;
  }
  isFirstPage(): boolean {
    return this.userList ? this.first === 0 : true;
  }
  /*Pagination logic*/

  remove(id: number) {
    this.userService.removeUser(id);
    this.userList = this.userService.getUsers();
}
}
