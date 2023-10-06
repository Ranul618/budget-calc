import { Component } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';
import { UpdateEvent } from '../budget-item-list/budget-item-list.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  budgetItem: BudgetItem[]=new Array<BudgetItem>()
  totalBudget: number=0

  addItem(newItem: BudgetItem){
    this.budgetItem.push(newItem)
    this.totalBudget+=newItem.amount
  }

  deleteItem(item: BudgetItem){
    let index=this.budgetItem.indexOf(item)
    this.budgetItem.splice(index, 1)
    this.totalBudget-=item.amount
  }

  updateItem(UpdateEvent: UpdateEvent){
      this.budgetItem[this.budgetItem.indexOf(UpdateEvent.old)]=UpdateEvent.new
      this.totalBudget-=UpdateEvent.old.amount
      this.totalBudget+=UpdateEvent.new.amount
  }

}
