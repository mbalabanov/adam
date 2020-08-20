import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { ApirequestsService } from './services/apirequests.service';

import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CategorylistComponent } from './components/categorylist/categorylist.component';
import { NewslistComponent } from './components/newslist/newslist.component';
import { CookiewarningComponent } from './components/cookiewarning/cookiewarning.component';
import { SearchresultslistComponent } from './components/searchresultslist/searchresultslist.component';
import { ItemdetailsComponent } from './components/itemdetails/itemdetails.component';
import { CreatearchiveitemComponent } from './components/createarchiveitem/createarchiveitem.component';
import { EditarchiveitemComponent } from './components/editarchiveitem/editarchiveitem.component';
import { EditcarouselfeaturesComponent } from './components/editcarouselfeatures/editcarouselfeatures.component';
import { EditcompliancepagesComponent } from './components/editcompliancepages/editcompliancepages.component';
import { EditnewspagesComponent } from './components/editnewspages/editnewspages.component';
import { ArchivecategoriesComponent } from './components/archivecategories/archivecategories.component';
import { HomeComponent } from './pages/home/home.component';
import { CategorylistpageComponent } from './pages/categorylistpage/categorylistpage.component';
import { ItemlistpageComponent } from './pages/itemlistpage/itemlistpage.component';
import { ItemdetailspageComponent } from './pages/itemdetailspage/itemdetailspage.component';
import { NewslistpageComponent } from './pages/newslistpage/newslistpage.component';
import { NewsarticlepageComponent } from './pages/newsarticlepage/newsarticlepage.component';
import { UserprofilepageComponent } from './pages/userprofilepage/userprofilepage.component';
import { EdititemspageComponent } from './pages/edititemspage/edititemspage.component';
import { CompliancepageComponent } from './pages/compliancepage/compliancepage.component';
import { ContactpageComponent } from './pages/contactpage/contactpage.component';
import { SearchresultspageComponent } from './pages/searchresultspage/searchresultspage.component';
import { SearchallComponent } from './components/searchall/searchall.component';
import { SearchitemsComponent } from './components/searchitems/searchitems.component';
import { ArchiveComponent } from './pages/archive/archive.component';
import { FooterComponent } from './components/footer/footer.component';
import { CompliancearticleComponent } from './components/compliancearticle/compliancearticle.component';
import { ContactformComponent } from './components/contactform/contactform.component';
import { NewsarticleComponent } from './components/newsarticle/newsarticle.component';
import { AuthprofileComponent } from './components/authprofile/authprofile.component';
import { TrackingComponent } from './components/tracking/tracking.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    CategorylistComponent,
    NewslistComponent,
    CookiewarningComponent,
    SearchresultslistComponent,
    ItemdetailsComponent,
    CreatearchiveitemComponent,
    EditarchiveitemComponent,
    EditcarouselfeaturesComponent,
    EditcompliancepagesComponent,
    EditnewspagesComponent,
    ArchivecategoriesComponent,
    HomeComponent,
    CategorylistpageComponent,
    ItemlistpageComponent,
    ItemdetailspageComponent,
    NewslistpageComponent,
    NewsarticlepageComponent,
    UserprofilepageComponent,
    EdititemspageComponent,
    CompliancepageComponent,
    ContactpageComponent,
    SearchresultspageComponent,
    SearchallComponent,
    SearchitemsComponent,
    ArchiveComponent,
    FooterComponent,
    CompliancearticleComponent,
    ContactformComponent,
    NewsarticleComponent,
    AuthprofileComponent,
    TrackingComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [ApirequestsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
