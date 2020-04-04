import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagemoviePipe } from './imagemovie.pipe';



@NgModule({
  declarations: [ImagemoviePipe],
  exports: [
    ImagemoviePipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
