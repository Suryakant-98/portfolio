import { Component, Input, SimpleChanges } from '@angular/core';
import { SubHeadingColorClasses, SubHeadingColors } from './sub-heading-color.model';
import { addClassToObject } from 'src/app/util/config.util';

@Component({
  selector: 'app-sub-heading',
  templateUrl: './sub-heading.component.html',
  styleUrls: ['./sub-heading.component.scss']
})
export class SubHeadingComponent {
  @Input() subHeadingText: string = '';
  @Input() bgColor: SubHeadingColors  = SubHeadingColors.DEFAULT;
  /** LOCAL STATE OBJECTS */
  styleState: { [key: string]: boolean } = {};

  /**
   *
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges) {
    if (this.bgColor)
      addClassToObject(this.styleState, [SubHeadingColorClasses[this.bgColor]]);
  }

}
