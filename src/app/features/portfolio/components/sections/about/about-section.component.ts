import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-about-section',
  standalone: true,
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutSectionComponent {}
