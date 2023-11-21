import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceAll'
})
export class ReplaceAllPipe implements PipeTransform {

  transform(value: string, search: string, replacement: string ): string {
    if (value === null || value === undefined) return value
  
    return value.replaceAll(search, replacement);
  }
}
