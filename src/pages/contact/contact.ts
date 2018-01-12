import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController, Platform, ViewController } from 'ionic-angular';
import {ModalcontentPage} from '../modalcontent/modalcontent';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController) {
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }
  openMod(){
    const myModal=this.modalCtrl.create(ModalcontentPage);
    myModal.present();
  }

}
