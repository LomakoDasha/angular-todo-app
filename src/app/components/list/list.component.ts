import { Component, Input, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() public searchText: string;
  public items: any[];

  constructor(private listService: ListService) { }

  public ngOnInit(): void {
    this.items = this.listService.items;
  }

  public removeItem(args) {
    this.listService.removeItem(args);
  }
}
