import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
  standalone: true,
})
export class DiscountPipe implements PipeTransform {
  transform(value: number, discountPercentage: number): number {
    if (!discountPercentage) {
      return value;
    }
    const discountAmount = value * (discountPercentage / 100);
    return +(value - discountAmount).toFixed(2);
  }
}
