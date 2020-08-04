import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { SearchComponent } from './search/search.component';
import { ArchivelistComponent } from './archivelist/archivelist.component';
import { FeaturesComponent } from './features/features.component';
import { NewsComponent } from './news/news.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NewslistComponent } from './newslist/newslist.component';
import { ArchiveComponent } from './archive/archive.component';
import { StandardheaderComponent } from './standardheader/standardheader.component';
import { NewsarticleComponent } from './newsarticle/newsarticle.component';
import { ArchivedetailComponent } from './archivedetail/archivedetail.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ItemdetailsComponent } from './itemdetails/itemdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    IntroComponent,
    SearchComponent,
    ArchivelistComponent,
    FeaturesComponent,
    NewsComponent,
    FooterComponent,
    HomeComponent,
    NewslistComponent,
    ArchiveComponent,
    StandardheaderComponent,
    NewsarticleComponent,
    ArchivedetailComponent,
    AboutComponent,
    ContactComponent,
    ItemdetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
