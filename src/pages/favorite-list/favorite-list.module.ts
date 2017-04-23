import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavoriteList } from './favorite-list';

import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    FavoriteList
  ],
  imports: [
    IonicPageModule.forChild(FavoriteList),
    PipesModule,
  ],
  exports: [
    FavoriteList
  ]
})
export class FavoriteListModule {}
