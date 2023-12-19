import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSectionComponent } from './home-section/home-section.component';
import { HomeLandingSectionComponent } from './home-landing-section/home-landing-section.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TechnologiesSectionComponent } from './technologies-section/technologies-section.component';
import { DevProcessSectionComponent } from './dev-process-section/dev-process-section.component';



@NgModule({
  declarations: [
    HomeLandingSectionComponent,
    HomeSectionComponent,
    TechnologiesSectionComponent,
    DevProcessSectionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
