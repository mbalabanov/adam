import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

import { HomeComponent } from './pages/home/home.component';
import { ArchiveComponent } from './pages/archive/archive.component' 
import { CategorylistpageComponent } from './pages/categorylistpage/categorylistpage.component';
import { ItemdetailspageComponent } from './pages/itemdetailspage/itemdetailspage.component'
import { NewslistpageComponent } from './pages/newslistpage/newslistpage.component';
import { NewsarticlepageComponent } from './pages/newsarticlepage/newsarticlepage.component';
import { CompliancepageComponent } from './pages/compliancepage/compliancepage.component';
import { ContactpageComponent } from './pages/contactpage/contactpage.component'
import { EdititemspageComponent } from './pages/edititemspage/edititemspage.component';
import { SearchresultspageComponent } from './pages/searchresultspage/searchresultspage.component';
import { UserprofilepageComponent } from './pages/userprofilepage/userprofilepage.component';

const routes: Routes = [
  {
    path:"", component: HomeComponent
  },
  {
    path:"archive", component: ArchiveComponent
  },
  {
    path:"category/:categoryId", component: CategorylistpageComponent
  },
  {
    path:"item/:categoryId/:itemId", component: ItemdetailspageComponent
  },
  {
    path:"news", component: NewslistpageComponent
  },
  {
    path:"newsarticle/:postId", component: NewsarticlepageComponent
  },
  {
    path:"compliance/:categoryId", component: CompliancepageComponent
  },
  {
    path:"contact", component: ContactpageComponent
  },
  {
    path:"search/:params", component: SearchresultspageComponent
  },
  {
    path:"search", component: SearchresultspageComponent
  },
  {
    path:"profile", component: UserprofilepageComponent, canActivate: [AuthGuard]
  },
  {
    path:"edititems", component: EdititemspageComponent, canActivate: [AuthGuard]
  },
  {
    path:"**", component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
