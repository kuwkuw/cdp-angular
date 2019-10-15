import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
  pure: false
})
export class OrderByPipe implements PipeTransform {

  transform(value: any[], ...args: any[]): any {
    let ascending = true;
    if (typeof args[args.length - 1] === 'boolean') {
      ascending = args.pop();
    }
    return value.sort((a, b) => {
      const aValue = parsObject(a, args);
      const bValue = parsObject(b, args);
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return ascending ? aValue - bValue : bValue - aValue;
      }
    });
  }

}

function parsObject(object, props): string | number {
  return props.reduce((val, prop) => {
    let result;
    if (typeof val === 'object') {
      result = val[prop];
    } else {
      result = val;
    }
    return result;
  }, object);
}
