import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MoreAboutMeComponent } from './more-about-me/more-about-me.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';

export const routes: Routes = [
    { path: '', component: ProfileComponent },
    { path: 'about', component: AboutComponent },
    { path: 'blogs', component: BlogsComponent },
    { path: 'blog/:id', component: ViewBlogComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'contact', component: ContactUsComponent },
    { path: 'more-about-me', component: MoreAboutMeComponent },
    { path: '**', redirectTo:'' }

];
