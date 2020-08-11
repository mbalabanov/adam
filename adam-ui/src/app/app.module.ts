import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IntroComponent } from './intro/intro.component';
import { ArchivelistComponent } from './archivelist/archivelist.component';
import { FeaturesComponent } from './features/features.component';
import { NewsComponent } from './news/news.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NewslistComponent } from './newslist/newslist.component';
import { ArchiveComponent } from './archive/archive.component';
import { NewsarticleComponent } from './newsarticle/newsarticle.component';
import { ArchivedetailComponent } from './archivedetail/archivedetail.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ItemdetailsComponent } from './itemdetails/itemdetails.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ApirequestsService } from './apirequests.service';
import { ComplianceComponent } from './compliance/compliance.component';
import { SearchresultsComponent } from './searchresults/searchresults.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroComponent,
    ArchivelistComponent,
    FeaturesComponent,
    NewsComponent,
    FooterComponent,
    HomeComponent,
    NewslistComponent,
    ArchiveComponent,
    NewsarticleComponent,
    ArchivedetailComponent,
    ContactComponent,
    ItemdetailsComponent,
    CarouselComponent,
    ComplianceComponent,
    SearchresultsComponent,
  ],
  imports: [
    BrowserModule,
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
