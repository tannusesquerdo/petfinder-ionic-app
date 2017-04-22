import { NgModule } from '@angular/core';

import { ThumbPhoto } from '../pipes/thumb-photo';
import { SafeStyle } from '../pipes/safe-style';
import { BreedFormat } from '../pipes/breed-format';
import { AgeSexSize } from '../pipes/age-sex-size';

@NgModule({
  declarations: [
    ThumbPhoto,
    SafeStyle,
    BreedFormat,
    AgeSexSize
  ],
  imports: [

  ],
  exports: [
    ThumbPhoto,
    SafeStyle,
    BreedFormat,
    AgeSexSize
  ]
})
export class PipesModule { }