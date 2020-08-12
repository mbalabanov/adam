import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArchiveComponent } from './archive/archive.component';
import { NewslistComponent } from './newslist/newslist.component';
import { NewsarticleComponent } from './newsarticle/newsarticle.component';
import { ArchivedetailComponent } from './archivedetail/archivedetail.component';
import { ComplianceComponent } from './compliance/compliance.component';
import { ContactComponent } from './contact/contact.component';
import { ItemdetailsComponent } from './itemdetails/itemdetails.component';
import { SearchresultsComponent } from './searchresults/searchresults.component';
import { EdititemComponent } from './edititem/edititem.component';

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
    path:"newsarticle/:postId", component: NewsarticleComponent
  },
  {
    path:"category/:categoryId", component: ArchivedetailComponent
  },
  {
    path:"item/:categoryId/:itemId", component: ItemdetailsComponent
  },
  {
    path:"edititem", component: EdititemComponent // /:categoryId/:itemId when auth is ready
  },
  {
    path:"compliance/:categoryId", component: ComplianceComponent
  },
  {
    path:"contact", component: ContactComponent
  },
  {
    path:"search/:params", component: SearchresultsComponent
  },
  {
    path:"search", component: SearchresultsComponent
  },
  {
    path:"**", component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
