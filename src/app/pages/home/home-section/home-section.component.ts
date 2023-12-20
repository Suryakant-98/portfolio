import { Component } from '@angular/core';

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.scss']
})
export class HomeSectionComponent {

  goToDevProcess() {
    const devProcessElement = document.getElementById("devProcess");
    if (devProcessElement) {
      devProcessElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
  

}
