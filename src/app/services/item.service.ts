import { Items } from './../models/item';
import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private items = new Subject();
  items$ = this.items.asObservable();

  constructor() {}

  addItem(item:any) {
    console.log(item);

    this.items.next(item);
    console.log(this.items);
  }

  // updateItem(item: Items){
  //   this.itemDoc = this.afs.doc(`items/${item.id}`);
  //   this.itemDoc.update(item);
  // }

  // deleteItem(item: Items){
  //   this.itemDoc = this.afs.doc(`items/${item.id}`);
  //   this.itemDoc.delete();
  // }
}
