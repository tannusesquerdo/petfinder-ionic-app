import { Injectable, Pipe } from '@angular/core';

@Pipe({
  name: 'breedFormat'
})
@Injectable()
export class BreedFormat {

  transform(breeds) {
    let breed_names = [];

    if(breeds instanceof Array) {
      for(let item of breeds) {
        breed_names.push(item.$t);
      }
      return breed_names.map(a => a).join(' & ');
    } else {
      return breeds.$t;
    }
  }
}
