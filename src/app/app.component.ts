import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {ServicesPage} from '../pages/services/services';
import {FacilityPage} from '../pages/facility/facility';
import {PriestPage} from '../pages/priest/priest';
import {TourPage} from '../pages/tour/tour';
import {KitchenPage} from '../pages/kitchen/kitchen';
import {ResetpasswordPage} from '../pages/resetpassword/resetpassword';

import { UserinfoPage } from '../pages/userinfo/userinfo';

import firebase from 'firebase';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any;

  pages; //Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    firebase.initializeApp({
      apiKey: "AIzaSyAtz63gyKSEsolAtOIBa_IHY9EGV_UsBI8",
      authDomain: "myapp-2e307.firebaseapp.com",
      databaseURL: "https://myapp-2e307.firebaseio.com",
      projectId: "myapp-2e307",
      storageBucket: "myapp-2e307.appspot.com",
      messagingSenderId: "319713627282"
        
    });
    // used for an example of ngFor and navigation
    this.pages = [
      {title:'Home',component: HomePage, icon: 'home'},
      { title: 'Services', component: ServicesPage, icon:'people' },
      { title: 'Facility Calendar', component: FacilityPage, icon:'calendar' },
      {title: 'Priest Calendar', component: PriestPage, icon:'calendar'},
      {title: 'Temple Tour', component: TourPage, icon:'bus'},
      {title: 'Kitchen Services', component: KitchenPage, icon:'restaurant'}
      
    ];
   const unsubscribe = firebase.auth().onAuthStateChanged( user => {
      if (!user) {
        this.rootPage = HomePage;
        unsubscribe();
      } else { 
        this.rootPage = UserinfoPage;
        unsubscribe();
      }
    });

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }
}
