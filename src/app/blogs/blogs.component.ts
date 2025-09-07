import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


interface BlogPost {
  id: string;
  title: string;
  emoji: string;
  date: string;
  readTime: string;
  category: string;
}

@Component({
  selector: 'app-blogs',
  imports: [CommonModule, RouterLink],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent {
  private router = inject(Router);

  navigateToPost(postId: string) {
    this.router.navigate(['/blog', postId]);
  }
  
  blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Mastering AI/ML Model Deployment',
      emoji: '🤖',
      date: 'Sep 07, 2025',
      readTime: '6 min',
      category: 'Machine Learning'
    },
    // {
    //   id: '2',
    //   title: 'Learnings from 4 Years at Metabase',
    //   emoji: '🛠',
    //   date: 'Jul 18, 2025',
    //   readTime: '6 min',
    //   category: 'Career'
    // },
    // {
    //   id: '3',
    //   title: '29 Principles for 29 Years',
    //   emoji: '⚠️',
    //   date: 'Jul 16, 2025',
    //   readTime: '3 min',
    //   category: 'Life'
    // },
    // {
    //   id: '4',
    //   title: 'On Black and White Thinking',
    //   emoji: '🔮',
    //   date: 'Oct 02, 2024',
    //   readTime: '3 min',
    //   category: 'Thinking'
    // },
    // {
    //   id: '5',
    //   title: 'Notes on A Man Without a Country',
    //   emoji: '🌍',
    //   date: 'Aug 18, 2024',
    //   readTime: '3 min',
    //   category: 'Reading'
    // },
    // {
    //   id: '6',
    //   title: '28 Principles for 28 Years',
    //   emoji: '⚠️',
    //   date: 'Aug 01, 2024',
    //   readTime: '4 min',
    //   category: 'Life'
    // },
    // {
    //   id: '7',
    //   title: 'Proposal for a Less Common Career Path',
    //   emoji: '💎',
    //   date: 'Jul 31, 2024',
    //   readTime: '4 min',
    //   category: 'Career'
    // },
    // {
    //   id: '8',
    //   title: '27 Principles for 27 Years',
    //   emoji: '⚠️',
    //   date: 'Jul 14, 2023',
    //   readTime: '3 min',
    //   category: 'Life'
    // },
    // {
    //   id: '9',
    //   title: 'Notes on Managing Oneself',
    //   emoji: '💭',
    //   date: 'May 05, 2023',
    //   readTime: '3 min',
    //   category: 'Reading'
    // },
    // {
    //   id: '10',
    //   title: 'Notes on Good Strategy Bad Strategy',
    //   emoji: '♻️',
    //   date: 'Mar 02, 2023',
    //   readTime: '9 min',
    //   category: 'Reading'
    // }
  ];
 

}