import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BudgetItem } from 'src/shared/models/budget-item.model';
import { EditItemModelComponent } from '../edit-item-model/edit-item-model.component';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})



export class BudgetItemListComponent {
  
  @Input() budgetItem!: BudgetItem[]
  @Output() delete: EventEmitter<any>=new EventEmitter<BudgetItem>
  @Output() update: EventEmitter<UpdateEvent>=new EventEmitter<UpdateEvent>

  constructor(public dialog: MatDialog){}

  onDelete(item: BudgetItem){
    this.delete.emit(item)
  }

  onCardClicked(item: BudgetItem){
    const dialogref=this.dialog.open(EditItemModelComponent, {
      width: '580px',
      data: item
    })

    dialogref.afterClosed().subscribe(res=>{
      if(res){
        this.update.emit({
          old: item,
          new: res
        })
      }
    })

  }
}

export interface UpdateEvent {
  old: BudgetItem
  new: BudgetItem
}