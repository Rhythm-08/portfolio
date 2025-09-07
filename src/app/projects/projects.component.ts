import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  id: string;
  title: string;
  description: string;
  emoji: string;
  technologies: string[];
  status: 'completed' | 'in-progress' | 'archived';
  date: string;
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: '1',
      title: 'Spotify Clone',
      description: 'A Spotify-like music streaming app with OTP login, song management using Firebase, and Stripe test API integration for premium features. Built in Angular with real-time database storage for added songs.',
      emoji: '🎵',
      technologies: ['Angular', 'Firebase', 'TypeScript', 'Stripe API'],
      status: 'completed',
      date: 'July 2023',
      githubUrl: 'https://github.com/Rhythm-08/Spotify-App',
      liveUrl: 'https://spotify-clone-c20c4.web.app/home',
      imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&h=300&fit=crop'
    },    
    {
      id: '2',
      title: 'Python Email Validator',
      description: 'A Python script to validate email addresses using multiple checks including SMTP test, MX records verification, and DKIM check. Provides detailed deliverability diagnostics and outputs statuses such as Valid, Invalid, Catch-All, Unknown, or Disposable.',
      emoji: '📧',
      technologies: ['Python', 'SMTP', 'DNS', 'NeverBounce API'],
      status: 'completed',
      date: 'Jan 2025',
      githubUrl: 'https://github.com/Rhythm-08/python-e-mail-validator',
      liveUrl: '',
      imageUrl: 'https://www.leadmine.net/glossary/content/images/2021/04/Email-Validation.jpeg'
    }
  ];

  getStatusText(status: string): string {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'in-progress':
        return 'In Progress';
      case 'archived':
        return 'Archived';
      default:
        return status;
    }
  }

}
