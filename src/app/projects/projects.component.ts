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
      title: 'Task Management Dashboard',
      description: 'A comprehensive project management tool with real-time collaboration, drag-and-drop kanban boards, and advanced analytics. Built for teams who need powerful organization without the complexity.',
      emoji: '📊',
      technologies: ['Angular', 'TypeScript', 'Node.js', 'PostgreSQL', 'Socket.io'],
      status: 'completed',
      date: 'Aug 2025',
      githubUrl: 'https://github.com/username/project',
      liveUrl: 'https://project-demo.com',
      imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=300&fit=crop'
    },
    {
      id: '2',
      title: 'AI Content Generator',
      description: 'Machine learning powered content creation platform that helps writers generate ideas, improve their writing, and overcome creative blocks using advanced natural language processing.',
      emoji: '🤖',
      technologies: ['React', 'Python', 'TensorFlow', 'FastAPI', 'Redis'],
      status: 'in-progress',
      date: 'Jul 2025',
      githubUrl: 'https://github.com/username/ai-content',
      imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=300&fit=crop'
    },
    {
      id: '3',
      title: 'E-commerce Analytics Suite',
      description: 'Comprehensive analytics platform for online retailers featuring sales tracking, customer behavior analysis, inventory management, and predictive insights for business growth.',
      emoji: '🛒',
      technologies: ['Vue.js', 'Django', 'Celery', 'PostgreSQL', 'Chart.js'],
      status: 'completed',
      date: 'May 2025',
      githubUrl: 'https://github.com/username/ecommerce-analytics',
      liveUrl: 'https://analytics-demo.com',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop'
    },
    {
      id: '4',
      title: 'Personal Finance Tracker',
      description: 'Smart budgeting app with bank integration, expense categorization, savings goals, and financial insights. Helps users take control of their finances with intuitive visualizations.',
      emoji: '💰',
      technologies: ['Angular', 'NestJS', 'MongoDB', 'Plaid API', 'D3.js'],
      status: 'archived',
      date: 'Mar 2025',
      githubUrl: 'https://github.com/username/finance-tracker'
    },
    {
      id: '5',
      title: 'Social Recipe Platform',
      description: 'Community-driven recipe sharing platform where cooking enthusiasts can discover, share, and rate recipes. Features include meal planning, shopping lists, and nutritional analysis.',
      emoji: '👨‍🍳',
      technologies: ['Next.js', 'Prisma', 'Supabase', 'Tailwind CSS', 'Vercel'],
      status: 'completed',
      date: 'Feb 2025',
      githubUrl: 'https://github.com/username/recipe-platform',
      liveUrl: 'https://recipes-demo.com',
      imageUrl: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=300&fit=crop'
    },
    {
      id: '6',
      title: 'Weather Visualization App',
      description: 'Interactive weather dashboard with beautiful data visualizations, historical trends, and location-based forecasts. Features animated charts and responsive design for all devices.',
      emoji: '🌤️',
      technologies: ['React', 'Express.js', 'OpenWeather API', 'Recharts', 'AWS'],
      status: 'in-progress',
      date: 'Jan 2025',
      githubUrl: 'https://github.com/username/weather-app',
      imageUrl: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=300&fit=crop'
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
