import { Component } from '@angular/core';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.scss']
})
export class TaskPageComponent {
  public searchText: string;

  public onSearch(criterion: string) {
    this.searchText = criterion;
  }
}
