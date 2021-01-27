import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { MomentModule } from 'ngx-moment';

import { LandingPage } from './landing.page';
import { RouterModule } from '@angular/router';
import { CountdownComponent } from '../countdown/countdown.component';
import { DiceComponent } from '../components/dice/dice.component';
import { GameSetupComponent } from '../components/game-setup/game-setup.component';
import { HomeComponent } from '../components/home/home.component';
import { HomeHeaderComponent } from '../components/home-header/home-header.component';
import { ModalButtonComponent } from '../modal-button/modal-button.component';
import { RecentsComponent } from '../components/recents/recents.component';
import { SettingsComponent } from '../components/settings/settings.component';
import { ScorekeeperComponent } from '../components/scorekeeper/scorekeeper.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MomentModule,
    RouterModule.forChild([{ path: '', component: LandingPage }])
  ],
  declarations: [LandingPage, HomeComponent, HomeHeaderComponent, RecentsComponent,
    SettingsComponent, CountdownComponent, DiceComponent, ScorekeeperComponent, GameSetupComponent, ModalButtonComponent],
  entryComponents: [CountdownComponent, DiceComponent, ScorekeeperComponent, ModalButtonComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LandingPageModule { }
