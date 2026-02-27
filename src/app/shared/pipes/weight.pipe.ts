import { Pipe, PipeTransform } from '@angular/core';

/**
 * Formats a numeric weight value with the appropriate unit.
 *
 * Usage:
 *   {{ 500 | weight }}        -> "500 kg"
 *   {{ 1500 | weight }}       -> "1,500 kg"
 *   {{ 1500 | weight:'t' }}   -> "1.5 t"
 */
@Pipe({
  name: 'weight',
  standalone: true,
})
export class WeightPipe implements PipeTransform {
  transform(value: number | null | undefined, unit: 'kg' | 't' = 'kg'): string {
    if (value == null) return '-';

    if (unit === 't') {
      const tonnes = value / 1000;
      return `${tonnes % 1 === 0 ? tonnes.toFixed(0) : tonnes.toFixed(1)} t`;
    }

    return `${value.toLocaleString('en-US')} kg`;
  }
}
