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
      imageUrl: 'https://private-user-images.githubusercontent.com/125264783/241900106-3b718d31-cc9f-476f-903d-81044adcbe8b.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTcyNTI5MzQsIm5iZiI6MTc1NzI1MjYzNCwicGF0aCI6Ii8xMjUyNjQ3ODMvMjQxOTAwMTA2LTNiNzE4ZDMxLWNjOWYtNDc2Zi05MDNkLTgxMDQ0YWRjYmU4Yi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwOTA3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDkwN1QxMzQzNTRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mMDM3Mzk1ZGMwZTNmZjY2Y2Q1MDM0MWUxODU1N2VjY2E2NjBiODdhYzFmMzY5ZmFkNTAzMWJiZjk4YmQ2ODEwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.YIrIIUFEOY0oZrzm-vezUBzwUaYbaQePmARVbaaEGpo'
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
