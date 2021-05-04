import { Pipe, PipeTransform } from '@angular/core';
import { IItem } from '../models/item';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: IItem[], criterion: string): IItem[] {
    let titleMatch: any;
    let descriptionMatch: any;

    return criterion
      ? value.filter((item: { title: string, description: string }) => {
        titleMatch = item.title.toLowerCase().match(criterion.toLowerCase());
        descriptionMatch = item.description.toLowerCase().match(criterion.toLowerCase());
        return (titleMatch !== null || descriptionMatch !== null) ? item : null;
      })
      : value;
  }
}
