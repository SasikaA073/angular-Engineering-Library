import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addCardinal'
})
export class AddCardinalPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
