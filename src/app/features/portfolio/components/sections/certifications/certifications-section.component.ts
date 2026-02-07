import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { Certification } from '../../../../../core/models/certification.model';

@Component({
  selector: 'app-certifications-section',
  standalone: true,
  templateUrl: './certifications-section.component.html',
  styleUrl: './certifications-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CertificationsSectionComponent {
  readonly certifications = input.required<Certification[]>();
}
