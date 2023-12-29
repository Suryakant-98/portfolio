import { Component, EventEmitter, Output } from '@angular/core';
import { fade, slideInFromRightAndFade } from 'src/app/animations/animation';
import { FontSize } from 'src/app/constants/font-size.constants';
import { IconSize } from 'src/app/constants/icon-size.constants';
import { CustomButtonColors } from 'src/app/shared/custom-button/custom-button.color.model';
import { HeadingColors } from 'src/app/shared/heading/heading-color.model';


@Component({
  selector: 'app-home-landing-section',
  templateUrl: './home-landing-section.component.html',
  styleUrls: ['./home-landing-section.component.scss'],
  animations:[
    slideInFromRightAndFade,fade
  ]
})
export class HomeLandingSectionComponent {
  @Output() scrollToDevProcess = new EventEmitter<any>();

  public IconSize = IconSize;
  public customBtnColors = CustomButtonColors;
  public fontSize = FontSize;
  public headingColors= HeadingColors;

  
  goToDevProcess(event: any): void {
    this.scrollToDevProcess.emit();
  }

  home: Array<any> = [
    {
      details: 'I like to craft solid 💻 and scalable 🚀 frontend products with great user experience, visually appealing and high-performing digital experiences.'
  }
] 
}
