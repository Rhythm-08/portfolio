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
      title: 'On Product Sense Interviews',
      emoji: '🧠',
      date: 'Aug 02, 2025',
      readTime: '5 min',
      category: 'Career',
      author: 'Rhythm Sharma',
      tags: ['Product Management', 'Interviews', 'Career Growth'],
      content: `
        <p>I've been spending a good bit of time in the Product Manager interview cycle lately, and one recurring interview format that keeps coming back is the "Product Sense" interview. These interviews are typically framed around a prompt like "How would you design X" or "How would you improve X," and aim to dig into your ability to think through an ambiguous problem in a structured way, while communicating clearly throughout.</p>

        <p>It can be easy to spin your wheels or get stuck; I've experienced it plenty of times. The one thing I've learned from practice, of course) that helped me quite a bit was having a plan of attack beforehand. The "plan of attack" that's worked for me is here, in the form of a template, tips, and resources. I've found that if you have a default structure and adapt it to your needs well, that's half the battle. Once you win that, all you have to do is execute, and enjoy the fun part: creatively solving a problem with someone else.</p>

        <h2>A TEMPLATE</h2>

        <h3>1. Clarifying Questions</h3>
        <p>Anything unclear off the rip? e.g. "Can you further define 'improve' or 'engagement' or what platform we're talking about? Or is this more open-ended? I'm assuming I'm a PM at X? Is that cool?"</p>

        <h3>2. Structure 🧠</h3>
        <p>Don't just slap on frameworks. Think about what makes sense given the framing of the prompt. e.g. Do you already know your pain point or target persona? Pick and choose from the following and adapt it to the discussion:</p>

        <ul>
          <li><strong>⭐ Motivation:</strong> Why does this matter?</li>
          <li><strong>⭐ Users:</strong> Who and what use cases should we build for?</li>
          <li><strong>⭐ Problem:</strong> What pain points do the target segment run into?</li>
          <li><strong>⭐ Solutions:</strong> How should we address the identified pain point?</li>
          <li><strong>⭐ Design:</strong> What should the prioritized approach look like in user-land?</li>
          <li><strong>Risk Mitigation:</strong> What are potential risks or open questions?</li>
          <li><strong>Evaluation:</strong> How would you validate or test that this worked or didn't?</li>
        </ul>

        <h3>3. Motivation 🧠</h3>
        <ul>
          <li><strong>Impact for Users:</strong> What is the company's mission and what does it mean for users? Why should they care that the product exists or is improved upon</li>
          <li><strong>Competition + Trends:</strong> What competitors exist out there? Are there any trends occurring in the space that are relevant?</li>
          <li><strong>Strengths to Leverage:</strong> Does the company have existing building blocks, market share, or tools that are relevant to the prompt?</li>
          <li><strong>Strategic + Business Goals:</strong> How does this fit into the company's goals? Increased market share? Activation? Retention? Revenue?</li>
        </ul>

        <h3>4. User Segmentation 🧠</h3>
        <p>Start thinking through broad segments based on frequency + use cases, and then segment further until you have a useful, mutually exclusive, oddly specific cut. Then prioritize one based on audience size / frequency of use / alignment with company strategy. More concretely this means:</p>

        <ol>
          <li><strong>Broad Segments:</strong> It's easiest to start with frequency of use + different use cases if they come to mind here.</li>
          <li><strong>Specific Segments:</strong> Hone in on each until you have a oddly specific cut of a few different personas.</li>
          <li><strong>Prioritization:</strong> Assess each on 1) Audience Size 2) Frequency and 3) Alignment with Strategic Goals. Pick one to focus on and explain your reasoning out loud.</li>
        </ol>

        <h3>5. Problem Identification 🧠</h3>
        <p>Once you have a target segment, it's time to dig into pain points. Once again it's simplest to start broad and then get specific afterwards. Map out the user journey, then identify where friction occurs, and connect it to a hypothesis for why the problem exists. Laid out this looks like:</p>

        <ol>
          <li><strong>User Journey:</strong> Map out a quick list or flow of steps of how the target persona or segment would use the product.</li>
        </ol>
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
