import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArchiveComponent } from './archive/archive.component';
import { NewslistComponent } from './newslist/newslist.component';
import { NewsarticleComponent } from './newsarticle/newsarticle.component';
import { ArchivedetailComponent } from './archivedetail/archivedetail.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ItemdetailsComponent } from './itemdetails/itemdetails.component';

const routes: Routes = [
  {
    path:"", component: HomeComponent
  },
  {
    path:"news", component: NewslistComponent
  },
  {
    path:"archive", component: ArchiveComponent
  },
  {
    path: 'newsarticle/:postId', component: NewsarticleComponent
  },
  {
    path: 'category/:categoryId', component: ArchivedetailComponent
  },
  {
    path: 'item/:categoryId/:itemId', component: ItemdetailsComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: "**", component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
