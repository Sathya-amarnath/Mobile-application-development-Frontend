import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Loading } from 'ionic-angular';
import { FormControl } from '@angular/forms';

import {Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';

import {AngularFireAuth} from 'angularfire2/auth';
import { AuthProvider } from '../../providers/auth/auth';
import firebase from 'firebase';

import {LoginPage} from '../login/login';
import {Facebook} from '@ionic-native/facebook';
import { UserinfoPage } from '../userinfo/userinfo';

//import {ValidatorProvider} from '../../providers/validator/validator';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  formgroup: FormGroup;
  

@ViewChild('ema') email;
@ViewChild('pas') password;
public loading: Loading;


constructor(private alertctrl: AlertController,
   private fire:AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams,
  public formbuilder:FormBuilder,
  private facebook:Facebook,
  public authProvider: AuthProvider
) {

this.formgroup=formbuilder.group({
  firstname:["",Validators.required],
  lastname:["",Validators.required],
  emailid:["",Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')])],
  pass:["",Validators.compose([Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$'), 
  Validators.minLength(8),Validators.maxLength(12)])],
  retype_pass:["",Validators.required],
  mobile:["",Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10), Validators.pattern('[0-9]+') ])]
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
    console.log('ionViewDidLoad RegisterPage');
  }
  /*
  sendEmailVerification() {
    
    this.fire.authState.subscribe(user => {
        user.sendEmailVerification()
        .then(() => {
          console.log('email sent');
        })
      });
  }
*/
  onSubmit(value:any):void{
    if(this.formgroup.valid){
     
      this.authProvider.signupUser(this.email.value,this.password.value).then((res)=>{
        this.alert("You will recieve email. Verify your account by clicking the link");
        this.navCtrl.setRoot(LoginPage);
      })
      /*firebase
      .auth()
      .createUserWithEmailAndPassword(this.email.value,this.password.value).then(data =>{
        //console.log('got data',data);
        
        //this.sendEmailVerification();
       */
        
        
  
      
      .catch(error =>{
        this.alert(error);
      });
      
    }
    else{
      console.log("error");
    }
  }
  fblogin(){
   /*
    let provider=new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithRedirect(provider).then(()=>{
      firebase.auth().getRedirectResult().then((result)=>{
        alert(JSON.stringify(result));
      })
      .catch(function(error){
        alert(JSON.stringify(error))
      });
    })
  */

  this.facebook.login(["email"]).then((loginResponse)=>{
    let credential = firebase.auth.FacebookAuthProvider.credential(loginResponse.authResponse.accessToken);
    firebase.auth().signInWithCredential(credential).then((info)=>{
      alert(JSON.stringify(info));
    })
  })

  
  }
  googlelogin(){
  this.fire.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((guser =>{
    console.log(guser);
    this.navCtrl.setRoot(UserinfoPage);
  }))
  .catch((error=>{
    this.alert(error);
  }));

}

}
