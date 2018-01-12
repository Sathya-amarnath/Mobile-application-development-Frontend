import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import firebase from 'firebase';
import {AngularFireAuth} from 'angularfire2/auth';


import {LoginPage} from '../login/login';
import { HomePage } from '../home/home';


import { AuthProvider } from '../../providers/auth/auth';
/**
 * Generated class for the UserinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userinfo',
  templateUrl: 'userinfo.html',
})
export class UserinfoPage {
  user:any;
  constructor(private alertctrl: AlertController,
    public navCtrl: NavController, public navParams: NavParams,
    private fire:AngularFireAuth,
    public authProvider: AuthProvider) {
  }
  alert(message:string){
    this.alertctrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserinfoPage');
  }
  logout(){
   /*this.user=firebase.auth().currentUser.email;
    alert(this.user);*/
    this.authProvider.logoutUser().then(data=> {
      this.alert("Signout successful");
      this.navCtrl.setRoot(HomePage);
    }).catch(function(error) {
      // An error happened.
      this.alert("error");
    });
   
  }
  

}
