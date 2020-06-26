import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
    selector: 'app-add-item-form',
    templateUrl: './add-item-form.component.html',
    styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

    @Input() item: BudgetItem;
    @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

    isNewItem: boolean;

    constructor() { }

    ngOnInit(): void {
        //if item has a value
        if(this.item) {
            // not a new item, passed from edit modal after the item - card was clicked
            this.isNewItem = false;
        }
        else {
            this.isNewItem = true;
            this.item = new BudgetItem('', null);
        }
    }

    onSubmit(form: NgForm ) {
        // console.log(form);
        this.formSubmit.emit(form.value);
        form.reset();
    }

}
