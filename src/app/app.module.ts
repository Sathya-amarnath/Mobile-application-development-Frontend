import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
//import {HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {ContactPage} from '../pages/contact/contact';
import {FacilityPage} from '../pages/facility/facility';
import {KitchenPage} from '../pages/kitchen/kitchen';
import {LoginPage} from '../pages/login/login';
import {ModalcontentPage} from '../pages/modalcontent/modalcontent';
import {PriestPage} from '../pages/priest/priest';
import {RegisterPage} from '../pages/register/register';
import {ServicesPage} from '../pages/services/services';
import {TourPage} from '../pages/tour/tour';
import {UserinfoPage} from '../pages/userinfo/userinfo';
import {ResetpasswordPage} from '../pages/resetpassword/resetpassword';
import {PaymentPage} from '../pages/payment/payment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {Facebook} from '@ionic-native/facebook';
import {ModalcontentdeityPage} from '../pages/modalcontentdeity/modalcontentdeity';

//import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
//import { AuthProvider } from '../providers/auth/auth';
import firebase from 'firebase';
import { AuthProvider } from '../providers/auth/auth';
import { DataProvider } from '../providers/data/data';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';

const firebaseAuth = {
  apiKey: "AIzaSyAtz63gyKSEsolAtOIBa_IHY9EGV_UsBI8",
  authDomain: "myapp-2e307.firebaseapp.com",
  databaseURL: "https://myapp-2e307.firebaseio.com",
  projectId: "myapp-2e307",
  storageBucket: "myapp-2e307.appspot.com",
  messagingSenderId: "319713627282"
 
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ContactPage,
    FacilityPage,
    KitchenPage,
    LoginPage,
    ModalcontentPage,
    PriestPage,
    RegisterPage,
    ServicesPage,
    TourPage,
    UserinfoPage,
    ResetpasswordPage,
    ModalcontentdeityPage,
    PaymentPage
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ContactPage,
    FacilityPage,
    KitchenPage,
    LoginPage,
    ModalcontentPage,
    PriestPage,
    RegisterPage,
    ServicesPage,
    TourPage,
    UserinfoPage,
    ResetpasswordPage,
    ModalcontentdeityPage,
    PaymentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Facebook,
    AngularFireAuth,
    AuthProvider,
    DataProvider,
  //  AuthProvider
    PayPal

  ]
})
export class AppModule {}
