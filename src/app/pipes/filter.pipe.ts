import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../models/toDoitem';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Item[], criterion: string): Item[] {
    return criterion
      ? value.filter((item: { title: string }) => item.title.startsWith(criterion))
      : value;
  }

}
