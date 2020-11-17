import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkeletonLoaderModule } from '../shared/skeleton-loader/skeleton-loader.module';
import { CardComponent } from './card.component';

@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    SkeletonLoaderModule
  ],
  exports: [
    CardComponent
  ]
})
export class CardModule { }
