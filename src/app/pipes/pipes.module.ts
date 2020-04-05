import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagemoviePipe } from './imagemovie.pipe';
import { ImagepairsPipe } from './imagepairs.pipe';



@NgModule({
  declarations: [ImagemoviePipe, ImagepairsPipe],
  exports: [
    ImagemoviePipe,
    ImagepairsPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
