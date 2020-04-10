import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandingPage } from './landing.page';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { RecentsComponent } from '../components/recents/recents.component';
import { SettingsComponent } from '../components/settings/settings.component';
import { HomeHeaderComponent } from '../components/home-header/home-header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,

    RouterModule.forChild([{ path: '', component: LandingPage }])
  ],
  declarations: [LandingPage, HomeComponent, HomeHeaderComponent, RecentsComponent, SettingsComponent]
})
export class LandingPageModule {}
