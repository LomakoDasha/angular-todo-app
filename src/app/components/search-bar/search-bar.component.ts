import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  public searchText: string;
  @Output() public search = new EventEmitter<string>();

  public onSearch() {
    this.search.emit(this.searchText);
  }
}
