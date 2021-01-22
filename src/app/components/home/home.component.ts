import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RecentsService } from 'src/app/services/recents.service';
import { DiceComponent } from '../dice/dice.component';
import { ScorekeeperComponent } from '../scorekeeper/scorekeeper.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @Output() goTo = new EventEmitter();
  @Output() updateRecents = new EventEmitter();

  constructor(public modalController: ModalController, private recentsService: RecentsService) { }
  dice = { component: DiceComponent, name: 'Dice' };
  scorekeeper = { component: ScorekeeperComponent, name: 'ScoreKeeper' };
  timer = { component: ScorekeeperComponent, name: 'Timer' };

  ngOnInit() { }

  goToPage(page: number) {
    this.goTo.emit(page);
  }

  async openComponent(modalComp: any) {
    const modal = await this.modalController.create({
      component: modalComp.component,
      swipeToClose: false,
    });
    this.recentsService.updateRecents(modalComp.name)
    this.sendToRecents(modalComp);
    return await modal.present();
  }

  /**
   * Sends the currently opened component modal on top of the recents stack.
   * @param modalComp selected Component
   */
  public sendToRecents(modalComp: any) {
    this.updateRecents.emit(modalComp.name);
  }
}
