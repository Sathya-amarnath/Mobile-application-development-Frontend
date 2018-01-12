import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import firebase from 'firebase';
import {LoginPage} from '../login/login';

//import * as firebase from 'firebase/app';
/**
 * Generated class for the ResetpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resetpassword',
  templateUrl: 'resetpassword.html',
})
export class ResetpasswordPage {
  public resetPasswordForm: FormGroup;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public authProvider: AuthProvider,
    public formBuilder: FormBuilder, 
    public alertCtrl: AlertController) {
      this.resetPasswordForm = formBuilder.group({
        email: ["",Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')])]
      });
  }

  alert(message:string){
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }
  
  resetPassword(){
    if (!this.resetPasswordForm.valid){
      console.log(this.resetPasswordForm.value);
    } else {
      
      this.authProvider.resetPassword(this.resetPasswordForm.value.email)
      .then((user)=>{
        this.alert("you will recieve a mail with a link to update your password");  
        this.navCtrl.setRoot(LoginPage);
      })
      .catch((error)=>{
        this.alert(error);
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetpasswordPage');
  }

}
