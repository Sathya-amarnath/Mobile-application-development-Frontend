import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ContactPage} from '../contact/contact';

/**
 * Generated class for the PriestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-priest',
  templateUrl: 'priest.html',
})
export class PriestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PriestPage');
  }

contact(){
  this.navCtrl.push(ContactPage);
}
}
