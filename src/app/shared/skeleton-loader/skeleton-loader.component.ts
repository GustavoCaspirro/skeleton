import { Component, Input, OnInit } from '@angular/core';
import { MyStyles } from '../my-styles.model';

@Component({
  selector: 'app-skeleton-loader',
  templateUrl: './skeleton-loader.component.html',
  styleUrls: ['./skeleton-loader.component.scss']
})
export class SkeletonLoaderComponent implements OnInit {

  @Input()
  currentWidth: string | null = null;

  @Input()
  currentHeight: string | null = null;

  @Input()
  circle: string | null = null;

  @Input()
  marginBottom: string | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  getStyles(): MyStyles {
    const MY_STYLES: MyStyles = {
      'width.px': this.currentWidth ? this.currentWidth : '',
      'height.px': this.currentHeight ? this.currentHeight : '',
      'border-radius': this.circle ? '50%' : '',
      'margin-bottom.px': this.marginBottom ? this.marginBottom : ''
    }

    return MY_STYLES;
  }
}
