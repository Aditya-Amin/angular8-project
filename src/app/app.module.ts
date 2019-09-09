import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { MoviegallaryComponent } from './moviegallary/moviegallary.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { TvshowsgallaryComponent } from './tvshowsgallary/tvshowsgallary.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { AppRoutingModuleModule } from './app-routing-module.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MovieDetailsModule } from './movie-details/movie-details.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    MoviegallaryComponent,
    SubscribeComponent,
    FooterComponent,
    TvshowsgallaryComponent,
    MovieDetailsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModuleModule,
    NgbModule,
    MovieDetailsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
