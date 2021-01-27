import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { RecentsService } from 'src/app/services/recents.service';

@Component({
  selector: 'app-recents',
  templateUrl: './recents.component.html',
  styleUrls: ['./recents.component.scss'],
})
export class RecentsComponent implements OnInit, OnChanges {
  @Input() newGame: any;
  recents = [];

  constructor(private recentsService: RecentsService) { }

  ngOnInit() {
    this.recents = this.recentsService.getRecents();
    console.log('initialized Recents');

  }

  ngOnChanges() {
    this.addTo(this.newGame);
  }
  /**
   * Receives a new game history
   */
  public addTo(game: string) {
    this.recents = this.recentsService.getRecents();
  }
}
