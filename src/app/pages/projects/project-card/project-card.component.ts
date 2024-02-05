import { Component, Input } from '@angular/core';
import { IconSize } from 'src/app/constants/icon-size.constants';
import { CustomButtonColors } from 'src/app/shared/custom-button/custom-button.color.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {

  @Input() project: any;
  public IconSize = IconSize;
  public customBtnColors = CustomButtonColors;

  
  viewProject(event: any) {
    window.open(this.project.projectLiveLink, "_blank");
  }


  viewGithubProject(event: any) {
    window.open(this.project.projectGithubLink, "_blank");

  }

}
