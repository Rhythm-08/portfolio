import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


interface BlogPost {
  id: string;
  title: string;
  emoji: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
  author?: string;
  tags?: string[];
}

interface BlogSection {
  type: 'heading' | 'paragraph' | 'list' | 'code' | 'quote';
  content: string | string[];
  level?: number; // for headings
}

@Component({
  selector: 'app-view-blog',
  imports: [CommonModule, RouterModule],
  templateUrl: './view-blog.component.html',
  styleUrl: './view-blog.component.scss'
})
export class ViewBlogComponent implements OnInit{
  currentPost: BlogPost | null = null;
  previousPost: BlogPost | null = null;
  nextPost: BlogPost | null = null;
  error: string = '';
  formattedContent: string = '';
  private toastr = inject(ToastrService);

  // Sample blog posts data (in real app, this would come from a service)
  private blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Mastering AI/ML Model Deployment',
      emoji: '🤖',
      date: 'Sep 07, 2025',
      readTime: '6 min',
      category: 'Machine Learning',
      author: 'Rhythm Sharma',
      tags: ['AI', 'ML Deployment', 'MLOps', 'Cloud'],
      content: `
        <p>Deploying machine learning models is often more challenging than training them. A model that works perfectly on your local machine might fail in production due to differences in environment, scaling issues, or data inconsistencies.</p>
    
        <p>In this post, I’ll walk you through best practices for deploying AI/ML models efficiently, from local testing to full-scale production deployment.</p>
    
        <h2>1. Local Testing 🖥️</h2>
        <p>Before deploying, ensure your model works as expected in a controlled environment:</p>
        <ul>
          <li>Test with a variety of inputs and edge cases.</li>
          <li>Check performance metrics such as latency and throughput.</li>
          <li>Validate model predictions against known datasets.</li>
        </ul>
    
        <h2>2. Containerization 📦</h2>
        <p>Using Docker or similar tools ensures that your model runs consistently across environments:</p>
        <ul>
          <li>Create a Docker image with all dependencies.</li>
          <li>Test the container locally before deploying.</li>
          <li>Keep the image lightweight for faster scaling.</li>
        </ul>
    
        <h2>3. Deployment Options ☁️</h2>
        <p>Choose the deployment strategy based on your project needs:</p>
        <ul>
          <li><strong>Serverless Functions:</strong> Ideal for small, low-latency inference tasks.</li>
          <li><strong>REST APIs:</strong> Wrap your model with a Flask/FastAPI server.</li>
          <li><strong>Kubernetes:</strong> For large-scale, multi-model deployments with scaling.</li>
        </ul>
    
        <h2>4. Monitoring & Logging 📊</h2>
        <p>Once deployed, actively monitor your model to catch issues early:</p>
        <ul>
          <li>Track request/response times and error rates.</li>
          <li>Log predictions and inputs for auditing and debugging.</li>
          <li>Set up alerts for performance drops or abnormal predictions.</li>
        </ul>
    
        <h2>5. Continuous Integration & Deployment (CI/CD) 🔄</h2>
        <p>Automate model updates and testing to ensure reliability:</p>
        <ul>
          <li>Integrate unit tests for model code and inference scripts.</li>
          <li>Use CI/CD pipelines to automatically build, test, and deploy models.</li>
          <li>Version control your model weights and code separately for reproducibility.</li>
        </ul>
    
        <h2>6. Scaling & Optimization ⚡</h2>
        <p>As traffic grows, ensure your deployment can handle load:</p>
        <ul>
          <li>Use batching for inference to reduce latency.</li>
          <li>Optimize models with quantization or pruning where possible.</li>
          <li>Leverage cloud autoscaling and load balancers for peak demand.</li>
        </ul>
    
        <p>Following these practices will make your AI/ML model deployment smoother, more reliable, and ready for real-world use. Deploy smart, monitor closely, and iterate quickly!</p>
      `
    }
    
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const postId = params['id'];
      this.loadPost(postId);
    });
  }

  loadPost(postId: string) {
    const post = this.blogPosts.find(p => p.id === postId);
    
    if (post) {
      this.currentPost = post;
      this.formattedContent = post.content;
      this.loadAdjacentPosts(postId);
      this.error = '';
    } else {
      this.error = 'The requested blog post could not be found.';
      this.currentPost = null;
    }
  }

  loadAdjacentPosts(currentId: string) {
    const currentIndex = this.blogPosts.findIndex(p => p.id === currentId);
    
    if (currentIndex > 0) {
      this.previousPost = this.blogPosts[currentIndex - 1];
    } else {
      this.previousPost = null;
    }
    
    if (currentIndex < this.blogPosts.length - 1) {
      this.nextPost = this.blogPosts[currentIndex + 1];
    } else {
      this.nextPost = null;
    }
  }

  goBack() {
    this.router.navigate(['/blogs']);
  }

  navigateToPost(postId: string) {
    this.router.navigate(['/blog', postId]);
  }

  shareOnX(event: Event) {
    event.preventDefault();
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`Check out: ${this.currentPost?.title}`);
    window.open(`https://x.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  }

  shareOnLinkedIn(event: Event) {
    event.preventDefault();
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  }

  copyLink(event: Event) {
    event.preventDefault();
    navigator.clipboard.writeText(window.location.href).then(() => {
      // You could add a toast notification here
      this.toastr.success('Link copied to clipboard',);
    });
  }

}
