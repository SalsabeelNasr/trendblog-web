import { RatingModule } from 'ngx-bootstrap/rating';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './page/home-page.component';
import { RouterModule } from '@angular/router';
import { HomePostComponent } from './components/home-post/home-post.component';
import { FilterComponent } from './components/filter/filter.component';
import { PostsService } from './services/posts.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomePageComponent, HomePostComponent, FilterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: HomePageComponent}]),
    FormsModule,
    RatingModule.forRoot()
  ],
  providers:[PostsService]
})
export class HomeModule { }
