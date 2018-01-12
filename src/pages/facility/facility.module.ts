import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FacilityPage } from './facility';

@NgModule({
  declarations: [
    FacilityPage,
  ],
  imports: [
    IonicPageModule.forChild(FacilityPage),
  ],
})
export class FacilityPageModule {}
