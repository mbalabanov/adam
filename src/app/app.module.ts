import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CookieService } from 'ngx-cookie-service';
import { DpDatePickerModule } from 'ng2-date-picker';
import { EditorModule } from '@tinymce/tinymce-angular';

import { ApirequestsService } from './services/apirequests.service';

import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CategorylistComponent } from './components/categorylist/categorylist.component';
import { NewslistComponent } from './components/newslist/newslist.component';
import { CookiewarningComponent } from './components/cookiewarning/cookiewarning.component';
import { ItemdetailsComponent } from './components/itemdetails/itemdetails.component';
import { CreatearchiveitemComponent } from './components/createarchiveitem/createarchiveitem.component';
import { EditcarouselfeaturesComponent } from './components/editcarouselfeatures/editcarouselfeatures.component';
import { EditcompliancepagesComponent } from './components/editcompliancepages/editcompliancepages.component';
import { EditnewspagesComponent } from './components/editnewspages/editnewspages.component';
import { ArchivecategoriesComponent } from './components/archivecategories/archivecategories.component';
import { HomeComponent } from './pages/home/home.component';
import { CategorylistpageComponent } from './pages/categorylistpage/categorylistpage.component';
import { ItemdetailspageComponent } from './pages/itemdetailspage/itemdetailspage.component';
import { NewslistpageComponent } from './pages/newslistpage/newslistpage.component';
import { NewsarticlepageComponent } from './pages/newsarticlepage/newsarticlepage.component';
import { UserprofilepageComponent } from './pages/userprofilepage/userprofilepage.component';
import { EdititemspageComponent } from './pages/edititemspage/edititemspage.component';
import { CompliancepageComponent } from './pages/compliancepage/compliancepage.component';
import { ContactpageComponent } from './pages/contactpage/contactpage.component';
import { SearchresultspageComponent } from './pages/searchresultspage/searchresultspage.component';
import { SearchallComponent } from './components/searchall/searchall.component';
import { ArchiveComponent } from './pages/archive/archive.component';
import { FooterComponent } from './components/footer/footer.component';
import { CompliancearticleComponent } from './components/compliancearticle/compliancearticle.component';
import { ContactformComponent } from './components/contactform/contactform.component';
import { NewsarticleComponent } from './components/newsarticle/newsarticle.component';
import { AuthprofileComponent } from './components/authprofile/authprofile.component';
import { TrackingComponent } from './components/tracking/tracking.component';
import { UploadService } from './services/uploadimage.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    CategorylistComponent,
    NewslistComponent,
    CookiewarningComponent,
    ItemdetailsComponent,
    CreatearchiveitemComponent,
    EditcarouselfeaturesComponent,
    EditcompliancepagesComponent,
    EditnewspagesComponent,
    ArchivecategoriesComponent,
    HomeComponent,
    CategorylistpageComponent,
    ItemdetailspageComponent,
    NewslistpageComponent,
    NewsarticlepageComponent,
    UserprofilepageComponent,
    EdititemspageComponent,
    CompliancepageComponent,
    ContactpageComponent,
    SearchresultspageComponent,
    SearchallComponent,
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
    NgxPaginationModule,
    DpDatePickerModule,
    EditorModule
  ],
  providers: [ApirequestsService, CookieService, UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
