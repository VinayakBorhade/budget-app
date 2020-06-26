import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';

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
        this.getTotalExpense();
    }

    deleteItem(item: BudgetItem) {
        let index = this.budgetItems.indexOf(item);
        this.budgetItems.splice(index, 1);
        this.getTotalExpense();
    }

    getTotalExpense(): number {
        
        // console.log('sum called ');
        
        let sum: number = 0;
        for(let i = 0; i < this.budgetItems.length; i++) {
            sum = sum + this.budgetItems[i].amount;
        }
        this.sum = sum;
        return sum;
    }
}
