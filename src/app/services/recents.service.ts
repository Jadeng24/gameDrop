import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecentsService {
  public recents: Array<any> = [];

  constructor() { }

  updateRecents(game: string) {
    this.recents.unshift(game);
  }
  getRecents() {
    console.log('returning recents', this.recents);
    return this.recents;
  }
}
