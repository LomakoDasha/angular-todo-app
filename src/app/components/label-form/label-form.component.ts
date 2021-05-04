import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IListOfItems } from '../../models/listOfItems';

@Component({
  selector: 'app-label-form',
  templateUrl: './label-form.component.html',
  styleUrls: ['./label-form.component.scss']
})
export class LabelFormComponent implements OnInit {
  public listForm: FormGroup;
  @Input() public item: IListOfItems;
  @Output() public save = new EventEmitter<IListOfItems>();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.listForm = this.fb.group({
      id: [''],
      listTitle: ['', Validators.required],
      subList: ['']
    });

    if (this.item) {
      this.listForm.setValue(this.item);
    }
  }

  public submit() {
    this.save.emit(this.listForm.value);
  }
}
