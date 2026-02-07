import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { Skill } from '../../../../../core/models/typeskill.model';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsSectionComponent {
  readonly skills = input.required<Skill[]>();
}
