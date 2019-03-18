import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'loginApp';

  ngOnInit(){

    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyC8X34W8-NXkPy0B_FGOuoyiKxa8J8wstk",
      authDomain: "nodeangular-26bda.firebaseapp.com",
      databaseURL: "https://nodeangular-26bda.firebaseio.com",
      projectId: "nodeangular-26bda",
      storageBucket: "nodeangular-26bda.appspot.com",
      messagingSenderId: "695824111662"
    };
    firebase.initializeApp(config);

  } //oninit
}
