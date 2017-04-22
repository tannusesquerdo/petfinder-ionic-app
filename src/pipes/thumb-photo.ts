import { Injectable, Pipe } from '@angular/core';

@Pipe({
  name: 'thumbPhoto'
})
@Injectable()
export class ThumbPhoto {

  transform(value, args) {
    for(let item of value) {
      if(item['@id'] === '1') {
        if(item['@size'] == 'pn') {
          return item['$t'];
        }
      }
    }
  }
}
