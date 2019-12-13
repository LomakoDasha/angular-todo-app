import { Component, Input, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() public searchText: string;
  public items: any[];

  constructor(
    private listService: ListService,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.items = this.listService.items;
  }

  public editItem(item: any) {
    this.router.navigate(['edit', item.id]);
  }

  public removeItem(args) {
    this.listService.removeItem(args);
  }
}
