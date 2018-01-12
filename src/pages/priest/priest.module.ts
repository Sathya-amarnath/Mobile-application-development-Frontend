import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PriestPage } from './priest';

@NgModule({
  declarations: [
    PriestPage,
  ],
  imports: [
    IonicPageModule.forChild(PriestPage),
  ],
})
export class PriestPageModule {}
