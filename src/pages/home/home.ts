import { Component, ViewChild } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import {ContactPage} from '../contact/contact';
import {LoginPage} from '../login/login';
import {RegisterPage} from '../register/register';
import firebase from 'firebase';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user_info:any;


  constructor(public navCtrl: NavController,
  public modal:ModalController,
  public afAuth: AngularFireAuth) {
    firebase.auth().onAuthStateChanged( user => {
      if (user) {
        console.log(user);
      }
      
    
  });
}
  contact(){
    this.navCtrl.push(ContactPage);
  }
  login(){
    this.navCtrl.push(LoginPage);
  }
  signup(){
    this.navCtrl.push(RegisterPage);
  }
  
}
