import { Component } from '@angular/core';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 constructor(){
 const firebaseConfig = {
    apiKey: "AIzaSyC3xaeEU3HaweRCj87ov4zWPKGZDlb3XaA",
    authDomain: "projet-livre-503ad.firebaseapp.com",
    databaseURL: "https://projet-livre-503ad.firebaseio.com",
    projectId: "projet-livre-503ad",
    storageBucket: "projet-livre-503ad.appspot.com",
    messagingSenderId: "535206043547",
    appId: "1:535206043547:web:65e896780254d0de24cb3e",
    measurementId: "G-4G7Q49GZGX"
  };
  firebase.initializeApp(firebaseConfig);

 }
}
