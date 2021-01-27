import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RecentsService } from 'src/app/services/recents.service';
import { DiceComponent } from '../dice/dice.component';
import { ScorekeeperComponent } from '../scorekeeper/scorekeeper.component';
import * as moment from 'moment';
import { CountdownComponent } from 'src/app/countdown/countdown.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @Output() goTo = new EventEmitter();
  @Output() updateRecents = new EventEmitter();

  constructor(public modalController: ModalController, private recentsService: RecentsService) { }
  dice = {
    component: DiceComponent,
    name: 'Dice',
    lastUsed: null
  };
  scorekeeper = {
    component: ScorekeeperComponent,
    name: 'Scorekeeper',
    lastUsed: null
  };
  countdown = {
    component: CountdownComponent,
    name: 'Countdown',
    lastUsed: null
  };
  draw = {
    component: ScorekeeperComponent,
    name: 'Draw',
    lastUsed: null
  };
  inventory = {
    component: ScorekeeperComponent,
    name: 'Inventory',
    lastUsed: null
  };
  cointoss = {
    component: ScorekeeperComponent,
    name: 'Coin Toss',
    lastUsed: null
  };


  ngOnInit() { }


  goToPage(page: number) {
    this.goTo.emit(page);
  }

  async openComponent(modalComp: any) {
    const modal = await this.modalController.create({
      component: modalComp.component,
      swipeToClose: false,
    });
    modalComp.lastUsed = moment();
    this.recentsService.updateRecents(modalComp);
    // this.sendToRecents(modalComp);
    return await modal.present();
  }

  /**
   * Sends the currently opened component modal on top of the recents stack.
   * @param modalComp selected Component
   */
  public sendToRecents(modalComp: any) {
    this.updateRecents.emit(modalComp);
  }
}
