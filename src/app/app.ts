import { Component, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationItem } from './core/models/navigation-item.model';
import { Project } from './core/models/project.model';
import { Experience } from './core/models/experience.model';
import { Certification } from './core/models/certification.model';
import { Skill } from './core/models/typeskill.model';
import { CERTIFICATION_STATUS } from './core/constants/certification.status';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly title = signal('JV Landayan');
  protected readonly isMenuOpen = signal(false);
  protected readonly currentSection = signal('home');

  protected readonly navItems = signal<NavigationItem[]>([
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ]);

  protected readonly skills = signal<Skill[]>([
    {
      name: 'Frontend',
      technologies: ['Angular', 'Vue.js', 'Next.js', 'React', 'TypeScript', 'TailwindCSS'],
    },
    {
      name: 'Backend',
      technologies: ['Node/Express', '.NET', 'C#', 'Microservices', 'gRPC', 'APIs'],
    },
    {
      name: 'Database/ORMs',
      technologies: ['MongoDB', 'MSSQL', 'Entity Framework', 'Prisma ORM', 'Qdrant Vector DB'],
    },
    {
      name: 'Cloud/Deployment',
      technologies: ['Vercel', 'Railway', 'Azure Pipelines', 'Docker', 'Azure Kubernetes Service'],
    },
  ]);

  protected readonly projects = signal<Project[]>([
    {
      title: 'Dub Lab Sports CMS (Production)',
      description:
        'Live sports content management system with full TypeScript stack. Features real-time messaging, CRUD operations, and author/writer collaboration system deployed at dublab.com.ph',
      technologies: ['Next.js', 'Prisma ORM', 'TailwindCSS', 'MongoDB', 'Socket.io', 'Docker'],
      image:
        'https://res.cloudinary.com/dadjlsn2j/image/upload/v1754129551/dublab/articles/qji7yfebhsbyk7i2p9bx.png',
      demoLink: 'https://dublab.com.ph/',
      codeLink: '#',
      private: true,
    },
    {
      title: 'Sports CMS API (Monolithic)',
      description:
        'Portfolio version of the Sports CMS built with .NET 9 backend. Clean code implementation with multiple layers/class libraries, each with specific functionality and separation of concerns. This is deployed via an AKS cluster through azure pipelines. This includes configuring the pipeline to use AKV for dynamically fetching the secrets value from KV and utilizing it in a Pod',
      technologies: [
        '.NET 9',
        'Clean Architecture',
        'Entity Framework',
        'Azure Pipelines',
        'Azure Devops',
        'Azure Kubernetes Service',
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      demoLink: '#',
      codeLink: '#',
      private: true,
      noLiveDemo: true,
    },
    {
      title: 'Sports CMS API (Microservices)',
      description:
        'Advanced microservices version with distributed architecture, service communication, and containerized deployment. Demonstrates enterprise-level system design and scalability.',
      technologies: [
        'Microservices',
        'Docker',
        'Service Communication',
        'Distributed Systems',
        '.NET',
        'API Gateway',
      ],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
      demoLink: '#',
      codeLink: '#',
      noLiveDemo: true,
    },
    {
      title: 'EcoSystem Website',
      description:
        'Website for eco-tigers organization at University of Santo Tomas. Features admin functionalities, author account management, and content management system with customizable profiles.',
      technologies: [
        '.NET Core 3.1',
        'Entity Framework Core',
        'C#',
        'Angular',
        'TypeScript',
        'MSSQL',
      ],
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop',
      demoLink: '#',
      codeLink: '#',
      noLiveDemo: true,
    },
    {
      title: 'InternConnect Platform (API)',
      description:
        'University capstone project for managing internship processes. Won Best Capstone Project for the Web and Mobile development track.',
      technologies: ['.NET 5', 'Entity Framework Core', 'C#', 'MSSQL', 'Hangfire'],
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
      demoLink: '#',
      codeLink: 'https://github.com/JVLandayan/InternConnect-API',
      noLiveDemo: true,
    },
    {
      title: 'InternConnect Platform (UI)',
      description:
        'University capstone project for managing internship processes. Won Best Capstone Project for the Web and Mobile development track.',
      technologies: ['Angular', 'TypeScript', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
      demoLink: '#',
      codeLink: 'https://github.com/batangchucks/InternConnect-ClientFinalv2',
      noLiveDemo: true,
    },
  ]);

  protected readonly experience = signal<Experience[]>([
    {
      company: 'HDAO - Freelance',
      position: 'Full Stack Engineer',
      duration: 'January 2024 - July 2025',
      description:
        'Developed cryptocurrency research bot using RAG pipeline with end-to-end orchestration. Built full-stack applications using Next.js, Vue, Angular with serverless backends (Vercel). Spearheaded the application migration on-chain with smart contracts deployed on Polygon Network.',
    },
    {
      company: 'Willis Towers Watson',
      position: 'Full Stack .NET Engineer',
      duration: 'January 2022 - April 2025',
      description:
        'Developed and maintained Angular 2 MVC applications and modern Angular frontend with microservices backends. Migrated inter-service communication from HTTP to gRPC.',
    },
    {
      company: 'Manulife',
      position: 'Full Stack Engineer Intern',
      duration: 'March 2022 - July 2022',
      description:
        'Completed intensive full-stack training using React, Node.js, and database ORMs. Developed a backend application with Node.js/Express exposing KPI data through RESTful APIs from Azure Data Factory ETL pipeline. Implemented CI/CD deployments using Jenkins.',
    },
  ]);

  protected readonly otherExperience = signal<Experience[]>([
    {
      company: 'Dub Lab Philippines (Startup)',
      position: 'Full Stack Engineer - Maintainer',
      duration: 'July 2025 - Present',
      description:
        'Migrated React application to Next.js for SSR and SEO optimization. Implemented Controller-Service architecture and completed missing features with CRUD operations. Introduced real-time messaging via WebSockets and deployed with CI/CD pipelines on Railway.',
    },
  ]);

  protected readonly certifications = signal<Certification[]>([
    {
      provider: 'Udemy',
      year: '2025',
      logoUrl: 'https://res.cloudinary.com/dadjlsn2j/image/upload/v1757340294/Icon_wpnske.png',
      courses: [
        {
          name: 'Complete C# Masterclass',
          status: CERTIFICATION_STATUS.COMPLETED,
          certificateUrl: 'https://ude.my/UC-af0649ac-7c1f-4227-bbf8-25048e22624b',
        },
        {
          name: 'Entity Framework: A full tour',
          status: CERTIFICATION_STATUS.COMPLETED,
          certificateUrl: 'https://ude.my/UC-10044e6c-182c-47bd-8a2e-e341a9adf2da',
        },
        {
          name: 'Docker Mastery: with Kubernetes',
          status: CERTIFICATION_STATUS.COMPLETED,
          certificateUrl:
            'https://www.udemy.com/certificate/UC-276ce7d7-7b8b-4d44-812f-33a6ca486fd3/',
        },

        {
          name: 'Software Architecture & Design of Modern Large Scale Systems',
          status: CERTIFICATION_STATUS.INPROGRESS,
        },
        {
          name: 'Master ASP.NET Core Identity: Authentication & Authorization',
          status: CERTIFICATION_STATUS.QUEUED,
        },
        { name: '.NET Microservices with Azure DevOps & AKS', status: CERTIFICATION_STATUS.QUEUED },
      ],
    },
    {
      provider: 'Trainocate',
      year: '2022',
      logoUrl:
        'https://res.cloudinary.com/dadjlsn2j/image/upload/v1757340156/trainocate-ph_tbqvgn.jpg',
      courses: [
        {
          name: 'Building Web Applications with Angular 12',
          status: CERTIFICATION_STATUS.COMPLETED,
        },
        {
          name: 'DP-080: Querying Data with Microsoft Transact-SQL',
          status: CERTIFICATION_STATUS.COMPLETED,
        },
        { name: 'Developing ASP.NET MVC Web Applications', status: CERTIFICATION_STATUS.COMPLETED },
      ],
    },
  ]);

  protected readonly isDarkMode = signal(true);

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
}
