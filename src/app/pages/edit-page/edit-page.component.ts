import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {
  public item: any;
  constructor(
    private route: ActivatedRoute,
    private listService: ListService
  ) { }

  ngOnInit() {
    this.item = this.listService.getItemById(+this.route.snapshot.params.id);
    console.log(this.item);
  }

}
