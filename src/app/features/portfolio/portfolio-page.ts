import { Component, ChangeDetectionStrategy, HostListener, signal, computed } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroSectionComponent } from './components/sections/hero/hero-section.component';
import { AboutSectionComponent } from './components/sections/about/about-section.component';
import { SkillsSectionComponent } from './components/sections/skills/skills-section.component';
import { ProjectsSectionComponent } from './components/sections/projects/projects-section.component';
import { ExperienceSectionComponent } from './components/sections/experience/experience-section.component';
import { CertificationsSectionComponent } from './components/sections/certifications/certifications-section.component';
import { ContactSectionComponent } from './components/sections/contact/contact-section.component';
import { NavigationItem } from '../../core/models/navigation-item.model';
import { Project, ProjectGroup } from '../../core/models/project.model';
import { Skill } from '../../core/models/typeskill.model';
import { Experience } from '../../core/models/experience.model';
import { Certification } from '../../core/models/certification.model';
import {
  PORTFOLIO_NAV_ITEMS,
  PORTFOLIO_SKILLS,
  PORTFOLIO_PROJECTS,
  PORTFOLIO_EXPERIENCE,
  PORTFOLIO_OTHER_EXPERIENCE,
  PORTFOLIO_CERTIFICATIONS,
} from './data/portfolio.data';

@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    SkillsSectionComponent,
    ProjectsSectionComponent,
    ExperienceSectionComponent,
    CertificationsSectionComponent,
    ContactSectionComponent,
  ],
  templateUrl: './portfolio-page.html',
  styleUrl: './portfolio-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioPageComponent {
  protected readonly title = signal('JV Landayan');
  protected readonly isMenuOpen = signal(false);
  protected readonly currentSection = signal('home');

  protected readonly navItems = signal<NavigationItem[]>(PORTFOLIO_NAV_ITEMS);
  protected readonly skills = signal<Skill[]>(PORTFOLIO_SKILLS);
  protected readonly projects = signal<Project[]>(PORTFOLIO_PROJECTS);
  protected readonly experience = signal<Experience[]>(PORTFOLIO_EXPERIENCE);
  protected readonly otherExperience = signal<Experience[]>(PORTFOLIO_OTHER_EXPERIENCE);
  protected readonly certifications = signal<Certification[]>(PORTFOLIO_CERTIFICATIONS);

  protected readonly isDarkMode = signal(true);
  protected readonly isModalOpen = signal(false);
  protected readonly selectedProjectGroup = signal<ProjectGroup | null>(null);

  protected readonly groupedProjects = computed<(Project | ProjectGroup)[]>(() => {
    const projects = this.projects();
    const groupMap = new Map<string, Project[]>();
    const ungroupedProjects: Project[] = [];

    projects.forEach((project) => {
      const matchingProjects = projects.filter((p) => p.title === project.title);
      if (matchingProjects.length > 1 && project.techType) {
        if (!groupMap.has(project.title)) {
          groupMap.set(project.title, []);
        }
        groupMap.get(project.title)!.push(project);
      } else {
        ungroupedProjects.push(project);
      }
    });

    const result: (Project | ProjectGroup)[] = [];

    for (const [title, variants] of groupMap.entries()) {
      const firstProject = variants[0];
      const group: ProjectGroup = {
        baseTitle: title,
        image: firstProject.image,
        description: firstProject.description,
        variants: variants,
      };
      result.push(group);
    }

    ungroupedProjects.forEach((project) => {
      if (!groupMap.has(project.title)) {
        result.push(project);
      }
    });

    return result;
  });

  toggleMenu() {
    this.isMenuOpen.update((isOpen: boolean) => !isOpen);
  }

  setCurrentSection(section: string) {
    this.currentSection.set(section);
  }

  toggleDarkMode() {
    this.isDarkMode.update((isDark: boolean) => !isDark);
  }

  scrollToSection(sectionId: string) {
    this.setCurrentSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToSectionMobile(sectionId: string) {
    this.setCurrentSection(sectionId);
    this.isMenuOpen.set(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  getCurrentYear() {
    return new Date().getFullYear();
  }

  openProjectModal(group: ProjectGroup) {
    this.selectedProjectGroup.set(group);
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
    this.selectedProjectGroup.set(null);
  }

  isProjectGroup(item: Project | ProjectGroup): item is ProjectGroup {
    return 'variants' in item;
  }

  @HostListener('document:keydown.escape', ['$event'])
  handleEscapeKey(event: Event) {
    if (this.isModalOpen()) {
      this.closeModal();
    }
  }
}
