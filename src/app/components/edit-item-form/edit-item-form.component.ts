import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { IItem } from '../../models/item';

@Component({
  selector: 'app-edit-item-form',
  templateUrl: './edit-item-form.component.html',
  styleUrls: ['./edit-item-form.component.scss']
})
export class EditItemFormComponent implements OnInit {
  public itemForm: FormGroup;
  @Input() public item: IItem;
  @Output() public save = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.itemForm = this.fb.group({
      id: ['', [Validators.required, this.isInteger]],
      title: ['', Validators.required],
      description: ['', Validators.required],
      importanceFlag: ['', Validators.required]
    });

    if (this.item) {
      this.itemForm.setValue(this.item);
    }
  }

  public isInteger(control: AbstractControl) {
    return Number.isInteger(+control.value) ? null : { noInteger: { value: control.value } };
  }

  public submit() {
    if (this.itemForm.value.importanceFlag === 'true') {
      this.itemForm.value.importanceFlag = true;
    } else {
      this.itemForm.value.importanceFlag = false;
    }
    this.save.emit(this.itemForm.value);
  }
}
