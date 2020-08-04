import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { BlogpostComponent } from './blogpost/blogpost.component';
import { ArchivedetailComponent } from './archivedetail/archivedetail.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ItemdetailsComponent } from './itemdetails/itemdetails.component';

const routes: Routes = [
  {
    path:"", component: HomeComponent
  },
  {
    path:"news", component: BlogComponent
  },
  {
    path:"archive", component: PortfolioComponent
  },
  {
    path: 'blogpost/:postId', component: BlogpostComponent
  },
  {
    path: 'category/:categoryId', component: ArchivedetailComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'details/:itemId', component: ItemdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
