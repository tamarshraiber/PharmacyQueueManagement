import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'SsymbolPipe',
  standalone: false 
})
export class SsymbolPipe implements PipeTransform {
  transform(value: number): string {
    if (typeof value === 'number' ){
        return `S${value}`;
    }else{
    return 'null'
  }
  }
  
}
