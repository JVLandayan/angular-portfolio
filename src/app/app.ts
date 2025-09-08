import { Component, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  protected readonly title = signal('John Developer');
  protected readonly isMenuOpen = signal(false);
  protected readonly currentSection = signal('home');

  protected readonly navItems = signal([
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👨‍💻' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'contact', label: 'Contact', icon: '📧' }
  ]);

  protected readonly skills = signal([
    { name: 'Frontend', technologies: ['Angular', 'React', 'Vue.js', 'TypeScript', 'Tailwind CSS'] },
    { name: 'Backend', technologies: ['Node.js', 'Python', 'Java', 'C#', 'PostgreSQL', 'MongoDB'] },
    { name: 'DevOps', technologies: ['Docker', 'AWS', 'Azure', 'CI/CD', 'Kubernetes'] },
    { name: 'Tools', technologies: ['Git', 'VS Code', 'Figma', 'Postman', 'Jest'] }
  ]);

  protected readonly projects = signal([
    {
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with Angular frontend and Node.js backend',
      technologies: ['Angular', 'Node.js', 'PostgreSQL', 'Stripe API'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      demoLink: '#',
      codeLink: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates',
      technologies: ['React', 'Express.js', 'Socket.io', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      demoLink: '#',
      codeLink: '#'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Data visualization dashboard with interactive charts and reports',
      technologies: ['Vue.js', 'Python', 'FastAPI', 'Chart.js'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      demoLink: '#',
      codeLink: '#'
    }
  ]);

  protected readonly experience = signal([
    {
      company: 'Dummy',
      position: 'Dummy',
      duration: '2022 - Present',
      description: 'DummyDummyDummyDummyDummyDummyDummyDummyDummyDummyDummyDummyDummyDummy'
    },
  ]);

  protected readonly isDarkMode = signal(true);

  toggleMenu() {
    this.isMenuOpen.update(isOpen => !isOpen);
  }

  setCurrentSection(section: string) {
    this.currentSection.set(section);
  }

  toggleDarkMode() {
    this.isDarkMode.update(isDark => !isDark);
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
}
