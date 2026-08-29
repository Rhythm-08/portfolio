import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
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
  private router = inject(Router);

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
      icon: '🤖',
      title: 'Mastering AI/ML Model Deployment',
      date: 'Sep 07, 2025',
      readTime: '6 min',
      category: 'Machine Learning',
      excerpt: "Deploying machine learning models is often more challenging than training them. A model that works locally might fail in production due to environment differences, scaling issues, or data inconsistencies...",
      slug: '1'
    }
    
  ];

  careerHistory: CareerItem[] = [
    {
      id: 1,
      company: 'ChicMic Studios',
      position: 'Gen AI Engineer',
      duration: '2024 - Present',
      location: 'Chandigarh, India',
      description: `
        <b>Cancer Clarity / CancerLight (Healthcare AI)</b>: Built the end-to-end FastAPI backend for a HIPAA-compliant oncology platform — document ingestion, async processing, JWT auth, and PostgreSQL persistence with file-hash deduplication. Engineered a PDF-to-structured-JSON pipeline (PyMuPDF extraction, cleaning, relevant-section detection) that isolates the target regimen block before the LLM call, cutting token cost and improving accuracy.
        <br>
        <b>Structured LLM Extraction</b>: Automated chemotherapy protocol digitization with Google Gemini, converting guideline PDFs into medication-level JSON — drug, dose, unit, route, frequency, cycle, duration, and treatment intent. Designed the LLM as a non-deterministic component inside a deterministic pipeline: JSON parsing → Pydantic schema validation → business rules → database, so unvalidated AI output never reaches downstream systems.
        <br>
        <b>Clinical Trials Data Pipeline</b>: Orchestrated Airflow and Pandas pipelines over ClinicalTrials.gov, constructing combined clinical text from titles, conditions, and eligibility criteria for NER (SpaCy) and LLM extraction of tumor type, stage, line of therapy, and drugs across 60,000+ clinical records.
        <br>
        <b>Drug Knowledge Normalization</b>: Resolved inconsistent drug names — brands, aliases, development codes — to parent drugs via fuzzy matching and LLM-assisted classification, then extracted mechanism of action, drug class, and ATC mappings to organize 13K+ drug-class terms into a hierarchical oncology taxonomy. Integrated retrieval from PubMed, Springer, and PubChem.
        <br>
        <b>LLM Fine-tuning & RAG</b>: Collected domain-specific medical articles to fine-tune models, and deployed an AI-powered chatbot with RAG for intelligent knowledge retrieval.
        <br>
        <b>Quality Audit Automation</b>: Built an AI-powered workflow for scanning legal documents, detecting potential errors, and surfacing them on a frontend correction dashboard. Leveraged OpenAI APIs, Python, and prompt engineering to reduce manual review efforts by over 60%.
        <br>
        <b>Backend Development</b>: Designed and implemented a role-based task management system in Node.js for a construction project platform, enabling seamless work assignment from builders to architects and subdivided user tasks.
        <br>
        <b>Data Visualization</b>: Designed an interactive D3.js radial graph to categorize drugs by development phase, supporting dynamic filtering by targets and phases across 500+ drug relationships.
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
      description: `<b>ERP — Interview Module</b>:
      Built an end-to-end candidate management module that replaced spreadsheet-based hiring tracking for HR, supporting structured candidate records, stage-wise filtering, and screening workflows so recruiters could narrow large applicant pools without manual sorting. Implemented in Angular with reusable components, reactive forms, and client-side validation backed by REST APIs.
      <br>
      <b>ERP — Awards & Appraisals Module</b>:
      Designed a structured employee feedback system feeding directly into appraisal cycles and quarterly awards, replacing informal, ad-hoc feedback collection with auditable records. Built role-based workflows so submission, review, and approval rights were scoped correctly across employees, managers, and HR.
      <br>
      <b>ERP — Platform & Workflow Automation</b>:
      Established enterprise workflow systems automating recurring HR and operational processes for 200+ employees, cutting manual administrative effort through automated routing and operational reporting dashboards that gave management visibility into pending actions. Redesigned the ERP UI and dashboard with customizable themes, improving daily usability for staff working in the system full-time.
      <br>
      <b>CredKeeper — Authentication & Monetization</b>:
      Built the platform's full account layer using PHP, Angular, and MongoDB with JWT authentication — credit-based social media login, secure session handling, and role-based access control. Implemented a tiered subscription model governing premium content access, entitlement checks, and monetization across membership levels.
      <br>
      <b>CredKeeper — AI Content Generation</b>:
      Developed AI-powered modals that generate personalized articles for subscribers, using LLMs and prompt engineering tuned to each reader's interests and tier. Integrated generation directly into the publishing workflow so editors could produce, review, and release content in one pass — reducing content creation time by 50%.`,
      logo: 'assets/images/chicmic.jpeg'
    }
  ];

  navigateToPost(slug: string) {
    this.router.navigate(['/blog/' + slug]);
  }

  openSocialLink(url: string) {
    window.open(url, '_blank', 'noopener noreferrer');
  }
}
