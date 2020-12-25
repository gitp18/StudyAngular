import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {
    transform(value: string, limit:50){
      return value.substr(0,limit) + '...';
    }
}
