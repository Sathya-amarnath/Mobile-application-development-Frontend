import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { FormControl } from '@angular/forms';
import {Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';

import {AngularFireAuth} from 'angularfire2/auth';
import firebase from 'firebase';
import { HomePage } from '../home/home';
import {UserinfoPage} from '../userinfo/userinfo';
import {ResetpasswordPage} from '../resetpassword/resetpassword';
import {AuthProvider} from '../../providers/auth/auth';

//import * as firebase from 'firebase/app'
//import { AuthProvider } from '../../providers/auth/auth';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  formgroup_login: FormGroup;
  //public loading: Loading;

  @ViewChild('em') emailvalue;
  @ViewChild("pa") passwordvalue;
  constructor(private alertctrl: AlertController,
    public loadingCtrl: LoadingController,
   private fire:AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams,
    public formbuilder:FormBuilder,
    public authProvider: AuthProvider
  ) {
  
      this.formgroup_login=formbuilder.group({
        
        email:["",Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')])],
        password:["",Validators.compose([Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$'), 
        Validators.minLength(8),Validators.maxLength(12)])]
        
      });
      }
      
    

  alert(message:string){
    this.alertctrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  loginSubmit(value:any):void{
    if(this.formgroup_login.valid){
      this.authProvider.loginUser(this.formgroup_login.value.email, this.formgroup_login.value.password)
      .then((data)=>{
        if(data.emailVerified){
        this.alert("login successful");
        this.navCtrl.setRoot(UserinfoPage);
        }
        else{
          this.alert("Verify your email");
        }
      })
      .catch((error)=>{
        this.alert(error);
      });
    }
    else{
      console.log("invalid details");
    }
  }
  
  /*
    sendPassword(email) {
      
      if(email!=email.emailVerified)
      {
        this.alert("please enter a valid email here and then click forgot password.");
      }
      else{
      this.fire.auth.sendPasswordResetEmail(email)
      .then(() => {
        console.log('email sent');
      })
    }
  }
*/
forgotpwd(){
  this.navCtrl.push(ResetpasswordPage);
}
sendEmailVerification(){
  this.authProvider.emailverify()
    .then(() => {
      console.log('email sent');
    });
  
}
back(){
  this.navCtrl.setRoot(HomePage);
}
}