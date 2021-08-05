import { Injectable } from '@angular/core';
import { User } from '../models/User.model';
import { Subject } from 'rxjs';
import * as  firebase from 'firebase';
import Datasnapshot = firebase.database.DataSnapshot;
@Injectable({
  providedIn: 'root'
})
export class UsersService {
users: User[]=[];
  constructor() { }
saveUser() {
    firebase.database().ref('/users').set(this.users);
}
getUsers(){
	
firebase.database().ref('/users')
.on('value',(data)=>{
this.users=data.val() ? data.val(): [];
});
}
getSingleUser(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/users/' + id).once('value').then(
          (data) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }
createUser(newUser: User) {
    this.users.push(newUser);
    this.saveUser();
  }

removeUser(user:User){
	const userIndexToRemove=this.users.findIndex(
	(userEl)=>{
	if(userEl===user){
		return true;
	}
	});
	this.users.splice(userIndexToRemove,1);
    this.saveUser();
}



}
