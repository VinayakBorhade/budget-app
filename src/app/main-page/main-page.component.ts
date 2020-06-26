import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';
import { UpdateEvent } from '../budget-item-list/budget-item-list.component';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

    budgetItems: BudgetItem[] = new Array<BudgetItem>();
    sum: number = 0;

    constructor () { }

    ngOnInit() { }

    addItem(newItem: BudgetItem) {
        this.budgetItems.push(newItem);
        // this.getTotalExpense();
        this.sum += newItem.amount;
    }

    deleteItem(item: BudgetItem) {
        let index = this.budgetItems.indexOf(item);
        this.budgetItems.splice(index, 1);
        // this.getTotalExpense();
        this.sum -= item.amount;
    }

    // getTotalExpense(): number {
        
    //     // console.log('sum called ');
        
    //     let sum: number = 0;
    //     for(let i = 0; i < this.budgetItems.length; i++) {
    //         sum = sum + this.budgetItems[i].amount;
    //     }
    //     this.sum = sum;
    //     return sum;
    // }

    updateItem(updateEvent: UpdateEvent) {
        // result is the update budget item
        // replace the item with the updated/submitted item from the form
        this.budgetItems[this.budgetItems.indexOf(updateEvent.old)] = updateEvent.new;

        // update the total budget
        this.sum -= updateEvent.old.amount;
        this.sum += updateEvent.new.amount;
    }
}
