import { Injectable, Pipe } from '@angular/core';

@Pipe({
  name: 'ageSexSize'
})
@Injectable()
export class AgeSexSize {

  transform(pet, args:any[]) {
    let age = args[0].$t;
    let sex = args[1].$t;
    let size = args[2].$t;

    sex = this.translateSex(sex);
    size = this.translateSize(size);

    return age + ' • ' + sex + ' • ' + size;
  }

  translateSex(sex) {
    let s;
    switch(sex) {
      case 'M':
        s = 'Male';
        break;
      case 'F':
        s = 'Female'
        break;
      default:
        s = 'Unknown';
    }
    return s;
  }

  translateSize(size) {
    let s;
    switch(size) {
      case 'S':
        s = 'Small';
        break;
      case 'M':
        s = 'Medium'
        break;
      case 'L':
        s = 'Large'
        break;
      case 'XL':
        s = 'Extra Large'
        break;
      default:
        s = 'Unknown';
    }
    return s;
  }
}
