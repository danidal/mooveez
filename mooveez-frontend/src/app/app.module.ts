import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faSearch, faStar } from '@fortawesome/free-solid-svg-icons';
/*import { faStar } from '@fortawesome/free-regular-svg-icons';*/

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
import { MoviesCarouselItemComponent } from './_components/movies-carousel-item/movies-carousel-item.component';
import { MovieDataContainerComponent } from './_components/movie-data-container/movie-data-container.component';

// used to create fake backend
// import { fakeBackendProvider } from './_helpers/fake-backend';


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
    MoviesCarouselItemComponent,
    MovieDataContainerComponent
  ],
  imports: [
    BrowserModule,
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
    library.add(faHome, faSearch, faStar);
  }
}
