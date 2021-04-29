import { ItemService } from './../services/item.service';
import { Component, OnInit } from '@angular/core';

import { Items } from '../models/item';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {
  item={
    title: '',
    description: ''
  }
  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.item.title != '' && this.item.description != ''){
      let obj = {...this.item}
      this.itemService.addItem(obj);
      this.item.description='';
      this.item.title=''

    }else{
      alert("Please fill both fields!");
    }
  }

}
