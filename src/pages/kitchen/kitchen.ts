import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ContactPage} from '../contact/contact';

/**
 * Generated class for the KitchenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kitchen',
  templateUrl: 'kitchen.html',
})
export class KitchenPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KitchenPage');
  }

  contact(){
    this.navCtrl.push(ContactPage);
  }
}
