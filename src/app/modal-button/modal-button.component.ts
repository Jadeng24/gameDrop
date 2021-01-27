import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-button',
  templateUrl: './modal-button.component.html',
  styleUrls: ['./modal-button.component.scss'],
})
export class ModalButtonComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() { }

  public closeModal() {
    this.modalController.dismiss();
  }
}
