import { Component, Input, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() public searchText: string;
  public items$: Observable<any>;

  constructor(
    private listService: ListService,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.items$ = this.listService.itemsState$;
  }

  public editItem(item: any) {
    this.router.navigate(['edit', item.id]);
  }

  public removeItem(args) {
    this.listService.removeItem(args);
  }
}
