import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-budget-item-list',
    templateUrl: './budget-item-list.component.html',
    styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {
    
    @Input() budgetItems: BudgetItem[];
    @Output() onDeleteClicked: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

    constructor(public dialog: MatDialog) { }

    ngOnInit(): void { }

    delete(item: BudgetItem): void {
        this.onDeleteClicked.emit(item);
    }

    onCardClicked(item: BudgetItem): void {
        // show the edit modal

        // console.log('oncard clicked, inside item list , item ', item);

        const dialogRef = this.dialog.open(EditItemModalComponent, {
            width: '580px',
            data: item
        });
        
        dialogRef.afterClosed().subscribe(result => {
            if(result) {
                // result is updated budget item
                // replace the item with updated/submitted item from the form
                this.budgetItems[this.budgetItems.indexOf(item)] = result;
            }
        })
    }

}
