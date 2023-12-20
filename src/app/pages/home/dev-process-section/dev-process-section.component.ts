import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { staggerFade } from 'src/app/animations/animation';
import { HeadingColors } from 'src/app/shared/heading/heading-color.model';
import { ProcessInfoTypes } from 'src/app/shared/process-info/process-info-type.model';


@Component({
  selector: 'app-dev-process-section',
  templateUrl: './dev-process-section.component.html',
  styleUrls: ['./dev-process-section.component.scss'],
  animations: [
    staggerFade
  ]
})
export class DevProcessSectionComponent {
  inView : boolean = false;
  @ViewChild('devProcess')
  devProcess!: ElementRef;

  public HeadingColors = HeadingColors;
  public  processInfoTypes = ProcessInfoTypes;
  
  constructor() { }


  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset + window.innerHeight;
    if (this.devProcess && this.devProcess.nativeElement.offsetTop <= scrollPosition) {
      this.inView = true;
    }
  }

}
