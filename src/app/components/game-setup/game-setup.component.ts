import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-game-setup',
  templateUrl: './game-setup.component.html',
  styleUrls: ['./game-setup.component.scss'],
})
export class GameSetupComponent implements OnInit {
  public numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  // this.form = new FormGroup({
  //   players: ['0', Validators.required],
  // });
constructor(private fb: FormBuilder) { }
ngOnInit() { }

}
