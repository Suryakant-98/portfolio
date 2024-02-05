import { Component, ElementRef, HostListener, QueryList, ViewChildren } from '@angular/core';
import { fadeInView } from 'src/app/animations/animation';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { HeadingColors } from 'src/app/shared/heading/heading-color.model';

@Component({
  selector: 'app-project-section',
  templateUrl: './project-section.component.html',
  styleUrls: ['./project-section.component.scss'],
  animations: [
    fadeInView
  ]
})
export class ProjectSectionComponent {

  @ViewChildren(ProjectCardComponent, { read: ElementRef })
  projs!: QueryList<ElementRef>;
  inViewList: Array<boolean> = [];
  public HeadingColors = HeadingColors;

  projects: Array<any> = [
    {
      projectImg: 'vorwerk.png',
      projectName: 'Vorwerk DS Pro',
      projectDescription: 'It is an MLM (Multi-Level Marketing) application that is a software platform designed to support the operations of multi-level marketing businesses. It provides distributors with tools to manage their downline, track sales, and commissions, access product catalogs, communicate with team members, and access training resources.',
      softwaresUsed: 'HTML, CSS, Bootstrap, Typescript, Angular, AG-grid',
      softwareAvailable: true,
    },
    {
      projectImg: 'dsi.png',
      projectName: 'Discern Science Avatar',
      projectDescription: 'AVATAR (Automated Virtual Agent for Truth Assessments in Real-Time) is fitted with proprietary algorithms to process and analyze the complex signals generated during an automated interview. Like other Artificial Intelligence systems, the AVATAR can be trained to learn through feedback.',
      softwaresUsed: 'HTML, CSS, Bootstrap, Typescript, Angular',
      softwareAvailable: true,
    },
    {
      projectImg: 'i18.jpg',
      projectName: 'Angular Translation Library',
      isProjectLinkPresent: true,
      projectLiveLink: 'https://www.npmjs.com/package/ngx-i18n-tools',
      projectGithubLink: 'https://github.com/Suryakant-98/Lang-Translation-Library',
      isProjectGithubLinkPresent: true,
      projectDescription: 'The Translation Library is a robust solution for handling language localization and internationalization (i18n) in Angular applications. It streamlines the process of managing translations for different languages, making it easier to create multilingual user interfaces.',
      softwareAvailable: false
    }
  ]

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset + window.innerHeight;
    
    this.projs.forEach((v, index) => {
      if (index && v && v.nativeElement.offsetTop <= scrollPosition) {
        this.inViewList[index] = true;
      }
    })
  }

}
