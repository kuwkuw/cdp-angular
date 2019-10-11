import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
  pure: false
})
export class OrderByPipe implements PipeTransform {

  transform(value: any[], ...args: any[]): any {


    // let prsedValue = value.map((valObj) => {
    //   return args.reduce((val, prop) => {
    //     let result;
    //     if (typeof val === 'object') {
    //       result = val[prop];
    //     } else {
    //       result = value;
    //     }
    //     return result;
    //   }, valObj);
    // });

    // return prsedValue.sort((a, b) => a - b);

    return value.sort((a, b) => {
      // if (a.hasOwnProperty(propName) && b.hasOwnProperty(propName)) {
      //   throw Error(`Object property "${propName}" not exists`);
      // }
      // if (propName.indexOf('.') !== -1) {
      //   let [first] = propName;
      //   let { f } = []
      // }
      const aValue = parsObject(a, args);
      const bValue = parsObject(b, args);
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return aValue - bValue;
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
