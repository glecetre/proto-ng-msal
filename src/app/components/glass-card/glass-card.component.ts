import { Component } from '@angular/core';

@Component({
  selector: 'app-glass-card',
  templateUrl: './glass-card.component.html',
  styles: [':host { display: contents }'],
})
export class GlassCardComponent {}
