import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from '../Components/login/login.component';

import { IonicModule } from '@ionic/angular';

import { Tab4PageRoutingModule } from './tab4-routing.module';

import { Tab4Page } from './tab4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab4PageRoutingModule
  ],
  declarations: [Tab4Page, LoginComponent]
})
export class Tab4PageModule {}
