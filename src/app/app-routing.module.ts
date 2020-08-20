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
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth.guard';

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
    path:"edititem", component: EdititemComponent, canActivate: [AuthGuard]
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
    path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]
  },
  {
    path:"**", component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
