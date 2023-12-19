import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FontSize, FontSizeClasses } from 'src/app/constants/font-size.constants';
import { IconSize } from 'src/app/constants/icon-size.constants';
import { addClassToObject } from 'src/app/util/config.util';
import { CustomButtonColors, CustomButtonColorClasses } from './custom-button.color.model';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent {
   /** INPUT FROM PARENT COMPONENT */
   @Input() btnLabel: string = 'Click Me..';
   @Input() isIconOnly: boolean = false;
   @Input() isIconActive: boolean = false;
   @Input() iconType: string = 'default';
   @Input() iconSize: IconSize = IconSize.MD;
   @Input() iconAnimation : string = '';
   @Input() size: FontSize = FontSize.BASE;
   @Input() bgColor: CustomButtonColors = CustomButtonColors.DEFAULT;
 
   /** OUTPUT TO PARENT COMPONENT */
   @Output() onBtnClicked = new EventEmitter();
 
   /** LOCAL STATE OBJECTS */
   styleState: { [key: string]: boolean } = {};
 
   /**
    *
    * @param changes
    */
   ngOnChanges(changes: SimpleChanges) {
    if (this.bgColor) {
      addClassToObject(this.styleState, [CustomButtonColorClasses[this.bgColor]]);
    }
  
    if (changes['size']) {
      const sizeValue = this['size'] as unknown as keyof typeof FontSize;
      if (sizeValue in FontSizeClasses) {
        addClassToObject(this.styleState, [FontSizeClasses[sizeValue]]);
      }
    }
  }
 
   /**
    *
    * @param event
    */
   btnClicked(event: any): void {
     this.onBtnClicked.emit(event);
   }

}
