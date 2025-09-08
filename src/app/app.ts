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
  protected readonly title = signal('JV Landayan');
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
    { name: 'Frontend', technologies: ['Angular', 'Vue.js', 'Next.js', 'React', 'TypeScript', 'TailwindCSS'] },
    { name: 'Backend', technologies: ['Node/Express', '.NET', 'C#', 'Microservices', 'gRPC', 'RESTful APIs'] },
    { name: 'Database/ORMs', technologies: ['MongoDB', 'MSSQL', 'Entity Framework', 'Prisma ORM', 'Qdrant Vector DB'] },
    { name: 'Cloud/Deployment', technologies: ['Vercel', 'Railway', 'CI/CD', 'Docker', 'Jenkins', 'Azure Data Factory'] }
  ]);

  protected readonly projects = signal([
    {
      title: 'Dub Lab Sports CMS (Production)',
      description: 'Live sports content management system with full TypeScript stack. Features real-time messaging, CRUD operations, and author/writer collaboration system deployed at dublab.com.ph',
      technologies: ['Next.js', 'Prisma ORM', 'TailwindCSS', 'MongoDB', 'Socket.io', 'Docker'],
      image: 'https://res.cloudinary.com/dadjlsn2j/image/upload/v1754129551/dublab/articles/qji7yfebhsbyk7i2p9bx.png',
      demoLink: 'https://dublab.com.ph/',
      codeLink: '#',
      private: true
    },
    {
      title: 'Sports CMS API (Monolithic)',
      description: 'Portfolio version of the Sports CMS built with .NET 9 backend. Clean code implementation with multiple layers/class libraries, each with specific functionality and separation of concerns.',
      technologies: ['.NET 9', 'Clean Architecture', 'Class Libraries', 'Entity Framework', 'C#', 'RESTful APIs'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      demoLink: '#',
      codeLink: '#'
    },
    {
      title: 'Sports CMS API (Microservices)',
      description: 'Advanced microservices version with distributed architecture, service communication, and containerized deployment. Demonstrates enterprise-level system design and scalability.',
      technologies: ['Microservices', 'Docker', 'Service Communication', 'Distributed Systems', '.NET', 'API Gateway'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
      demoLink: '#',
      codeLink: '#'
    },
    {
      title: 'EcoSystem Website',
      description: 'Website for eco-tigers organization at University of Santo Tomas. Features admin functionalities, author account management, and content management system with customizable profiles.',
      technologies: ['.NET Core 3.1', 'Entity Framework Core', 'C#', 'Angular', 'TypeScript', 'MSSQL'],
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop',
      demoLink: '#',
      codeLink: '#'
    },
    {
      title: 'InternConnect Platform',
      description: 'University capstone project for managing internship processes. Won Best Capstone Project for the Web and Mobile development track.',
      technologies: ['.NET 5', 'Entity Framework Core', 'C#', 'Angular', 'TypeScript', 'MSSQL'],
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
      demoLink: '#',
      codeLink: 'https://github.com/jvlandayan'
    }
  ]);

  protected readonly experience = signal([
    {
      company: 'HDAO - Freelance',
      position: 'Full Stack Engineer',
      duration: 'January 2024 - July 2025',
      description: 'Developed cryptocurrency research bot using RAG pipeline with end-to-end orchestration. Built full-stack applications using Next.js, Vue, Angular with serverless backends. Migrated application on-chain with smart contract deployment on Polygon Network.'
    },
    {
      company: 'Willis Towers Watson',
      position: 'Full Stack .NET Engineer',
      duration: 'January 2022 - April 2025',
      description: 'Developed and maintained Angular 2 MVC applications and modern Angular frontend with microservices backends. Migrated inter-service communication from HTTP to gRPC.'
    },
    {
      company: 'Manulife',
      position: 'Full Stack Engineer Intern',
      duration: 'March 2022 - July 2022',
      description: 'Completed intensive full-stack training using React, Node.js, and database ORMs. Developed backend application with Node.js/Express exposing KPI data through RESTful APIs from Azure Data Factory ETL pipeline. Implemented CI/CD deployments using Jenkins.'
    }
  ]);

  protected readonly otherExperience = signal([
    {
      company: 'Dub Lab Philippines (Startup)',
      position: 'Full Stack Engineer - Maintainer',
      duration: 'July 2025 - Present',
      description: 'Migrated React application to Next.js for SSR and SEO optimization. Implemented Controller-Service architecture and completed missing features with CRUD operations. Introduced real-time messaging via WebSockets and deployed with CI/CD pipelines on Railway.'
    }
  ]);

  protected readonly certifications = signal([
    {
      provider: 'Udemy',
      year: '2025',
      courses: [
        { name: 'Complete C# Masterclass', status: 'Completed', certificateUrl: 'https://ude.my/UC-af0649ac-7c1f-4227-bbf8-25048e22624b' },
        { name: 'Entity Framework: A full tour', status: 'Completed', certificateUrl: 'https://ude.my/UC-10044e6c-182c-47bd-8a2e-e341a9adf2da' },
        { name: 'Docker Mastery: with Kubernetes', status: 'Ongoing' },
        { name: 'Terraform', status: 'Ongoing' },
        { name: 'Master ASP.NET Core Identity: Authentication & Authorization', status: 'Ongoing' }
      ]
    },
    {
      provider: 'Trainocate',
      year: '2022',
      courses: [
        { name: 'Building Web Applications with Angular 12', status: 'Completed' },
        { name: 'DP-080: Querying Data with Microsoft Transact-SQL', status: 'Completed' },
        { name: 'Developing ASP.NET MVC Web Applications', status: 'Completed' }
      ]
    }
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
