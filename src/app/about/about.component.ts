import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

interface Company {
  name: string;
  url: string;
  color: string;
}

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  private route = inject(Router);
  companies: Company[] = [
    {
      name: 'ChicMic Studios',
      url: 'https://www.chicmicstudios.in/',
      color: '#60a5fa'
    },
  ];

  contactLinks = {
    email: 'mailto:rhythmsharma808@gmail.com',
    linkedin: 'https://www.linkedin.com/in/rhythm08/',
    reading: '/blogs',
    writing: '/blogs',
    workWithMe: '/contact'
  };

  openLink(url: string) {
    if (url.startsWith('mailto:') || url.startsWith('http')) {
      window.open(url, '_blank', 'noopener noreferrer');
    } else {
      // Handle internal routing
      this.route.navigate([url])
    }
  }

}
