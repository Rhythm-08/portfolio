import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  imports: [FontAwesomeModule,CommonModule,RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faGithub,
      faLinkedin,
      faXTwitter
    );
  }
  

  readonly socialLinks: any = [
    {
      name: 'X',
      url: 'https://x.com/RhythmSankhayan',
      icon: faXTwitter
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rhythm08/',
      icon: faLinkedin
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Rhythm-08',
      icon: faGithub
    }
  ];

}

