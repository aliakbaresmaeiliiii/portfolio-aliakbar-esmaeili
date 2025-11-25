import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './app/components/home/home.component';
import { ResumeComponent } from './app/components/resume/resume.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'resume', component: ResumeComponent }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
  ]
}).catch(err => console.error(err));
