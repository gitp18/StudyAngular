import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipse'
})
export class SummaryPipe implements PipeTransform {
  transform(value: string, limit: 50){
    if(!value) return null;
    
    return value.substr(0,limit) + '...';
  }
}
