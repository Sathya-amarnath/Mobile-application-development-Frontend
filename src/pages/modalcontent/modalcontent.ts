import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModelcontentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modalcontent',
  templateUrl: 'modalcontent.html',
})
export class ModalcontentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public view:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalcontentPage');
  }
closemod(){
  this.view.dismiss();
}
}
