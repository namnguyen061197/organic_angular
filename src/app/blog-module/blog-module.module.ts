import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { ShareModule } from '../share-modules/share.module';
import { BlogItemComponent } from './blog-item/blog-item.component';
import { ColRightBlogComponent } from './col-right-blog/col-right-blog.component';

const routes : Routes = [
  {
    path:'',
    component : BlogListComponent
  },
  {
    path:':idblog',
    component: BlogDetailComponent
  }
]


@NgModule({
  declarations: [
    BlogListComponent,
    BlogDetailComponent,
    BlogItemComponent,
    ColRightBlogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ShareModule

  ],
  exports : [
    BlogDetailComponent,
    BlogListComponent
  ]
})
export class BlogModuleModule { }
