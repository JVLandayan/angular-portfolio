import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import { Project, ProjectGroup } from '../../../../../core/models/project.model';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsSectionComponent {
  readonly groupedProjects = input.required<(Project | ProjectGroup)[]>();
  readonly isProjectGroup = input.required<(item: Project | ProjectGroup) => item is ProjectGroup>();
  readonly openProjectModal = output<ProjectGroup>();
}
