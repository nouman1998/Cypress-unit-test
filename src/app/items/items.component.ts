import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Items } from '../models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  itemsArr: any=[];
  editState: boolean=false;
  itemToEdit!: Items;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    console.log("hello");

    // console.log('ng oninit ran');
   this.itemService.items$.subscribe(data=>{
     console.log(data);

     this.itemsArr.push(data)
   })
  }

  // editItem(event, item: Items){
  //   this.editState = true;
  //   this.itemToEdit = item;

  // }

  // updateItem(item: Items){
  //   this.itemService.updateItem(item);
  //   this.clearState();
  // }

  deleteItem(event:Event, index: number){
    this.itemsArr.splice(index,1);
    this.isDeleted=true

  }
  isDeleted=false



}
