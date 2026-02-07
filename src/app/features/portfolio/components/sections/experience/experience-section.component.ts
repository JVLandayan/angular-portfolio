import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { Experience } from '../../../../../core/models/experience.model';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  templateUrl: './experience-section.component.html',
  styleUrl: './experience-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceSectionComponent {
  readonly experience = input.required<Experience[]>();
  readonly otherExperience = input.required<Experience[]>();
}
