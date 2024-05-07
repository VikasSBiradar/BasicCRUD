import { Injectable } from '@angular/core';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userList : User[] = [{
    id : 1,
    name :'Vikas S Biradar',
    email : 'vikasbiradar2236@gmail.com',
    gender :'Male',
    mobile : '8142381423',
    dob: new Date('08/02/2000'),
    isActive : true,
    range : [0,10],
    userType:'Admin'
  },
  {
    id : 2,
    name :'Anna smith',
    email : 'annasmith2236@gmail.com',
    gender :'Female',
    mobile : '814221423',
    dob: new Date('12/10/2000'),
    isActive : true,
    range : [0,8],
    userType:'helpdesk'
  }
]

  constructor() { }

  getUsers(){
    return this.userList
  }

  getUsersByID(id: number) {
    return this.userList.find(x => x.id == id)
}
addUser(user: User) {
    user.id = new Date().getTime();
    this.userList.push(user);
}
updateUser(user: User) {
    const userIndex = this.userList.findIndex(x => x.id == user.id);
    if (userIndex != null && userIndex != undefined) {
        this.userList[userIndex] = user;
    }
}
removeUser(id: number) {
    this.userList = this.userList.filter(x => x.id != id);
}
}
