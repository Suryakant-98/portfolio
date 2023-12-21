import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectSectionComponent } from './project-section/project-section.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [ProjectSectionComponent, ProjectCardComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule,
    ComponentsModule
    
  ]
})
export class ProjectsModule { }
