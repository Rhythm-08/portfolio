import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';

interface SocialLink {
  name: string;
  url: string;
  icon: any;
}

interface BlogPost {
  id: number;
  icon: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  slug: string;
}

interface CareerItem {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  logo?: string;
}
@Component({
  selector: 'app-profile',
  imports: [FontAwesomeModule,RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  private library = inject(FaIconLibrary);

  constructor(){
    this.library.addIcons(
      faGithub,
      faLinkedin,
      faXTwitter
    );
  }

  
  
  profileImage = 'assets/images/profile-pic.jpeg';

  socialLinks: SocialLink[] = [
    {
      name: 'X.com',
      url: 'https://x.com/RhythmSankhayan',
      icon: faXTwitter,
    },
    
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rhythm08/',
      icon: faLinkedin,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Rhythm-08',
      icon: faGithub,
    }
  ];

  recentPosts: BlogPost[] = [
    {
      id: 1,
      icon: '📝',
      title: 'On Product Sense Interviews',
      date: 'Aug 02, 2025',
      readTime: '5 min',
      category: 'Career',
      excerpt: "I've been spending a good bit of time in the Product Manager interview cycle lately, and with that comes new games to learn. One recurring game that keeps coming back is the \"Product Sense\" interview...",
      slug: 'product-sense-interviews'
    },
    {
      id: 2,
      icon: '🛠️',
      title: 'Learnings from 4 Years at Metabase',
      date: 'Jul 18, 2025',
      readTime: '6 min',
      category: 'Career',
      excerpt: "After 4 exciting years, I'm parting ways with Metabase. It's been a fulfilling run, working with smart people to build the most delightful business intelligence tool out there while scaling the team from 25 → 100+ employees...",
      slug: 'metabase-learnings'
    },
    {
      id: 3,
      icon: '⚡',
      title: '29 Principles for 29 Years',
      date: 'Jul 16, 2025',
      readTime: '3 min',
      category: 'Life',
      excerpt: "Today I turned 29 and this birthday has more of a \"nothing\" feeling than those before it. I don't quite have an answer for why that's the case. Maybe it's part of getting older. Maybe it's more stability in my day-to-day than in years past...",
      slug: '29-principles'
    }
  ];

  careerHistory: CareerItem[] = [
    {
      id: 1,
      company: 'ChicMic Studios',
      position: 'Data Scientist',
      duration: '2024 - Present',
      location: 'Chandigarh, India',
      description: `
        <b>Quality Audit Automation</b>: Built an AI-powered workflow for scanning legal documents, detecting potential errors, and surfacing them on a frontend correction dashboard. Leveraged OpenAI APIs, Python, and prompt engineering to reduce manual review efforts by over 60%.
        <br>
        <b>Backend Development</b>: Designed and implemented a role-based task management system in Node.js for a construction project platform, enabling seamless work assignment from builders to architects and subdivided user tasks.
        <br>
        <b>Cancer Clarity (Healthcare AI)</b>: Engineered an AI/ML pipeline for clinical trial datasets—data cleaning, NER tagging (SpaCy), and entity extraction. Integrated Google Gemini and retrieval from PubChem/Springer to map drug mechanisms of action.
        <br>
        <b>LLM Fine-tuning & RAG</b>: Collected domain-specific medical articles to fine-tune models, and deployed an AI-powered chatbot with RAG for intelligent knowledge retrieval.
        <br>
        <b>Data Visualization</b>: Designed an interactive D3.js radial graph to categorize drugs by development phase, supporting dynamic filtering by targets and phases.
        <br>
       <b>Performance & SEO Optimization</b>: Improved company website rankings by optimizing rendering, fixing pagination issues, and integrating AI-powered enhancements for user engagement.
      `,
      logo: 'assets/images/chicmicstudios_logo.jpeg'
    },
    {
      id: 2,
      company: 'ChicMic LLP',
      position: 'Frontend Developer (Angular)',
      duration: '2023 - 2024',
      location: 'Chandigarh,India',
      description: `<b>ERP System Development</b>:
      Developed an interview module to streamline candidate filtering for HR, created an awards module for employee feedback and appraisals, and redesigned the ERP UI/dashboard with customizable themes to enhance user experience.
      <br>
      <b>CredKeeper Project</b>:
      Built a login/signup system with credit-based social media logins, developed AI-powered modals for personalized article generation, and implemented a tiered subscription model to manage premium content access and monetization.`,
      logo: 'assets/images/chicmic.jpeg'
    }
  ];

  navigateToPost(slug: string) {
    // Implement navigation to blog post
    console.log('Navigate to post:', slug);
  }

  openSocialLink(url: string) {
    window.open(url, '_blank', 'noopener noreferrer');
  }
}
