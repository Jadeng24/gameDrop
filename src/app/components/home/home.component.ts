import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
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
  constructor(public modalController: ModalController) { }
  dice = DiceComponent;
  scorekeeper = ScorekeeperComponent;
  ngOnInit() { }

  goToPage(page: number) {
    this.goTo.emit(page);
  }

  async openComponent(modalComp: any) {
    const modal = await this.modalController.create({
      component: modalComp,
      swipeToClose: true,
    });
    this.sendToRecents(modalComp);
    return await modal.present();
  }

  public sendToRecents(modalComp) {
    this.updateRecents.emit(modalComp);
  }
}
