import { Component } from '@angular/core';
import { IconSize } from 'src/app/constants/icon-size.constants';
import { HeadingColors } from 'src/app/shared/heading/heading-color.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  public IconSize = IconSize;
  public HeadingColors = HeadingColors;

}
