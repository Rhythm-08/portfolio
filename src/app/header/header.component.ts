import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMobileMenuOpen = false;

  navigationItems = [
    { label: 'About', route: '/about' },
    { label: 'Blogs', route: '/blog' },
    { label: 'Projects', route: '/projects' },
    { label: 'Contact Us', route: '/contact-us' }
  ];

  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
    this.isMobileMenuOpen = false; // Close mobile menu after navigation
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  isActiveRoute(route: string): boolean {
    return this.router.url === route;
  }
}
