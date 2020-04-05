import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { PipesModule } from '../pipes/pipes.module';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';
import { SlidesTitleComponent } from './slides-title/slides-title.component';
import { SlideshowPairsComponent } from './slideshow-pairs/slideshow-pairs.component';
import { DetailMovieComponent } from './detail-movie/detail-movie.component';

@NgModule({
  entryComponents:[
    DetailMovieComponent
  ],
  declarations: [
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlidesTitleComponent,
    SlideshowPairsComponent,
    DetailMovieComponent
  ],
  exports: [
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlidesTitleComponent,
    SlideshowPairsComponent,
    DetailMovieComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
