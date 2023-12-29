import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  active: string = 'Home';
  constructor(private _router: Router) {}

  navigateTo(destination: string) {
    this.active = destination;
    switch (destination) {
      case 'About':
        this.scrollToTop();
        this._router.navigate(['/about']);
        break;

      case 'Projects':
        this.scrollToTop();
        this._router.navigate(['/projects']);
        break;

      case 'Home':
        this.scrollToTop();
        this._router.navigate(['']);
        break;

      case 'Contact':
        const contactElement = document.getElementById('contact');
        if (contactElement) {
          contactElement.scrollIntoView({ behavior: 'smooth' });
        }
        break;

      default:
        this._router.navigate(['']);
        break;
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
