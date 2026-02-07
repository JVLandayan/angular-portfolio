import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import { NavigationItem } from '../../../../core/models/navigation-item.model';

@Component({
  selector: 'app-portfolio-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  readonly title = input.required<string>();
  readonly navItems = input.required<NavigationItem[]>();
  readonly currentSection = input.required<string>();
  readonly isMenuOpen = input.required<boolean>();

  readonly toggleMenu = output<void>();
  readonly scrollToSection = output<string>();
  readonly scrollToSectionMobile = output<string>();
}
