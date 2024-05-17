import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'makeUppercase',
  standalone: true
})
export class MakeUppercasePipe implements PipeTransform {

  transform(value: string,character:string = '-'): string {
    if(!value) return '';
    return value.toUpperCase().split('').join(character)
  }
}
