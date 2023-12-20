import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  active: string = 'Home';
  constructor(private _router: Router) { }

  navigateTo(destination: string) {
    this.active = destination;
    switch (destination) {
      case 'About':
        this._router.navigate(['/about']);
        break;
  
      case 'Projects':
        this._router.navigate(['/projects']);
        break;
  
      case 'Home':
        this._router.navigate(['']);
        break;
  
      case 'Contact':
        const contactElement = document.getElementById("contact");
        if (contactElement) {
          contactElement.scrollIntoView({ behavior: 'smooth' });
        }
        break;
  
      default:
        this._router.navigate(['']);
        break;
    }
  }
  

}
