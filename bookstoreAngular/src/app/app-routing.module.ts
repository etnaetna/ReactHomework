import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { BlogItemDetailsComponent } from './blog-item-details/blog-item-details.component';

const routes: Routes = [
  { path: 'start', component: ContentComponent },
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'details', component: BlogItemDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
