import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'RsymbolPipe',
  standalone: false 
})
export class RsymbolPipe implements PipeTransform {
  transform(value: number): string {
    if (typeof value === 'number' ){
        return `R${value}`;
    }else{
    return 'null'
  }
  }
  
}