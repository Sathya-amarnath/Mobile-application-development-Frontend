import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController, Platform, ViewController } from 'ionic-angular';
import {ContactPage} from '../contact/contact';
import {DataProvider} from '../../providers/data/data';

import {DomSanitizer} from '@angular/platform-browser';

import {ModalcontentdeityPage} from '../modalcontentdeity/modalcontentdeity';
/**
 * Generated class for the TourPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tour',
  templateUrl: 'tour.html',
  })
  
export class TourPage {
  
  deities:any;
  seg:String ="deity_list";
  //god:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public dp: DataProvider,
public dom: DomSanitizer,
public modalCtrl: ModalController) {
    this.getUsers();
    
    console.log(this.deities);
  }
  getUsers() {
    this.dp.getUsers()
    .then(data => {
      this.deities = data;
      
      
      
       //alert(this.deities[0]);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TourPage');
  }
  contact(){
    this.navCtrl.push(ContactPage);
  }
  
  openModal(deity){

    const myModals=this.modalCtrl.create(ModalcontentdeityPage,deity);
    myModals.present();
    //console.log(deity.name);
  }
}
