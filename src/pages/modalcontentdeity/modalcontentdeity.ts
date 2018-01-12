import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import{TourPage} from '../tour/tour';
import {ContactPage} from '../contact/contact';
//import {DataProvider} from '../../providers/data/data';

import {DomSanitizer} from '@angular/platform-browser';
/**
 * Generated class for the ModalcontentdeityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modalcontentdeity',
  templateUrl: 'modalcontentdeity.html',
})
export class ModalcontentdeityPage {
  deities_name:any=this.navParams.get('name');
  deities_image:any=this.navParams.get('image');
  deities_url:any=this.navParams.get('url');
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public view:ViewController,
   // public dp: DataProvider,
    public dom: DomSanitizer) {

     console.log(this.deities_name);
     console.log(this.deities_image);
     console.log(this.deities_url);
    
  }
  
  san(vid){
    return this.dom.bypassSecurityTrustResourceUrl(vid);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalcontentdeityPage');
    
  }
  closemod1(){
    this.view.dismiss();
  }
  contact(){
    this.navCtrl.push(ContactPage);
  }
}
