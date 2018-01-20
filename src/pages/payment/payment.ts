import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';
import { Injectable } from '@angular/core';
//import { PayPalPayment } from 

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
@Injectable()
export class PaymentPage {
  //payment: PayPalPayment = new PayPalPayment('10.10', 'USD', 'TV', 'sale');
  //currencies = ['EUR', 'USD'];
  payPalEnvironment: string = 'payPalEnvironmentSandbox';

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public payPal: PayPal
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }

  makePayment(amt){
  this.payPal.init({
    PayPalEnvironmentProduction: '',
    PayPalEnvironmentSandbox: 'Acz6ViXo2JGb4ogVSZXDS8raK3fum_KBjSlH7XlW9DIxLqTxPTqd1Ao6OaUQlmETuiNGqMlah3ZGBiuG'
  }).then(() => {

    this.payPal.prepareToRender(this.payPalEnvironment, new PayPalConfiguration({})).then(() => {
      let payment = new PayPalPayment('5.0', 'USD', 'Description', 'sale');
      this.payPal.renderSinglePaymentUI(payment).then((response) => {
        alert(`Successfully paid. Status = ${response.response.state}`);
        console.log(response);
      }, () => {
        console.error('Error or render dialog closed without being successful');
      });
    }, () => {
      console.error('Error in configuration');
    });
  }, () => {
    console.error('Error in initialization, maybe PayPal isn\'t supported or something else');
  });
  }

}
