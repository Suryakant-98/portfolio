import { Component } from '@angular/core';
import { fade, slideInFromRightAndFade } from 'src/app/animations/animation';
import { FontSize } from 'src/app/constants/font-size.constants';
import { IconSize } from 'src/app/constants/icon-size.constants';
import { CustomButtonColors } from 'src/app/shared/custom-button/custom-button.color.model';
import { HeadingColors } from 'src/app/shared/heading/heading-color.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [slideInFromRightAndFade, fade],
})
export class AboutComponent {
  public IconSize = IconSize;
  public customBtnColors = CustomButtonColors;
  public fontSize = FontSize;
  public headingColors = HeadingColors;
  openResume(event: any) {
    const url = 'assets/files/SURYAKANT.V-Resume.pdf';
    const link = document.createElement('a');
    link.href = url;
    link.download = url.split('/').pop() as string;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}