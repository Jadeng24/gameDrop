import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecentsService {
  public recents: Array<string> = [];

  constructor() { }

  updateRecents(game: string) {
    this.recents.push(game);
  }
  getRecents() {
    console.log('returning recents', this.recents);
    return this.recents;
  }
}
