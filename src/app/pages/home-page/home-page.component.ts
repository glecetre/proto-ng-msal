import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  navLinks = [
    {
      text: 'Login page',
      path: ['login'],
    },
    {
      text: 'My profile',
      path: ['profile'],
    },
  ];
}
