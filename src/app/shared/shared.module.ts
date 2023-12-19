import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IconComponent } from './icon/icon.component';
import { HeadingComponent } from './heading/heading.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SubHeadingComponent } from './sub-heading/sub-heading.component';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { ChipsComponent } from './chips/chips.component';



@NgModule({
  declarations: [
    IconComponent,
    HeadingComponent,
    NavbarComponent,
    SubHeadingComponent,
    CustomButtonComponent,
    ChipsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    SubHeadingComponent,
    HeadingComponent,
    IconComponent,
    CustomButtonComponent,
    ChipsComponent
  ]
})
export class SharedModule { }
