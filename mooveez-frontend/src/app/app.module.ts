import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faSearch, faStar as fasStar, faArrowCircleUp,
  faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

import { appRoutingModule } from './app.routing';

import { AppComponent } from './app.component';

import { HomeComponent } from './_components/home/home.component';
import { AlertComponent } from './_components/alert/alert.component';
import { LoginComponent } from './_components/login/login.component';
import { HtmlLogoComponent } from './_components/html-logo/html-logo.component';
import { RegisterComponent } from './_components/register/register.component';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.inerceptor';
import { SmallHtmlLogoComponent } from './_components/small-html-logo/small-html-logo.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { UserLogoutComponent } from './_components/user-logout/user-logout.component';
import { SidebarComponent } from './_components/sidebar/sidebar.component';
import { HomeContentComponent } from './_components/home-content/home-content.component';
import { MoviesCarouselComponent } from './_components/movies-carousel/movies-carousel.component';
import { MovieDataContainerComponent } from './_components/movie-data-container/movie-data-container.component';
import { SpinnerComponent } from './_components/spinner/spinner.component';
import { MoviesCarouselItemElemComponent } from './_components/movies-carousel-item-elem/movies-carousel-item-elem.component';
import { ArtistsListsElemComponent } from './_components/artists-lists-elem/artists-lists-elem.component';
import { ClickableStarComponent } from './_components/clickable-star/clickable-star.component';
import { RatingChartComponent } from './_components/rating-chart/rating-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlertComponent,
    LoginComponent,
    RegisterComponent,
    HtmlLogoComponent,
    SmallHtmlLogoComponent,
    NavbarComponent,
    UserLogoutComponent,
    SidebarComponent,
    HomeContentComponent,
    MoviesCarouselComponent,
    MovieDataContainerComponent,
    SpinnerComponent,
    MoviesCarouselItemElemComponent,
    ArtistsListsElemComponent,
    ClickableStarComponent,
    RatingChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    appRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    // Add an icon to the library for convenient access in other components
    library.add(faHome, faSearch, fasStar, farStar, faArrowCircleUp, faArrowCircleDown);
  }
}
