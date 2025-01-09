import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// Import your components here
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ForartistComponent } from './forartist/forartist.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ArtistsignupComponent } from './artistsignup/artistsignup.component';
import { ArtistloginComponent } from './artistlogin/artistlogin.component';
import { BuyerdashboardComponent } from './buyerdashboard/buyerdashboard.component';
import { ArtistdashboardComponent } from './artistdashboard/artistdashboard.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MyCartComponent } from './my-cart/my-cart.component';
import { MyordersComponent } from './myorders/myorders.component';
import { ArtistFormComponent } from './artist-form/artist-form.component';
import { ArtistProfileComponent } from './artist-profile/artist-profile.component';
import { AddArtworksComponent } from './add-artworks/add-artworks.component';
import { UnderDevelopmentComponent } from './under-development/under-development.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'buyerdashboard', component: BuyerdashboardComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'forartist', component: ForartistComponent },
  { path: 'artistsignup', component: ArtistsignupComponent },
  { path: 'artistlogin', component: ArtistloginComponent },
  { path: 'artistdashboard', component: ArtistdashboardComponent },
  { path: 'adminlogin', component: AdminloginComponent},
  { path: 'contactus', component: ContactusComponent},
  { path: 'my-cart', component: MyCartComponent},
  { path: 'myorders', component: MyordersComponent},
  { path: 'artist-form', component: ArtistFormComponent },
  {path: 'artist-profile', component:ArtistProfileComponent},
  { path: 'artists/:id/details', component: ArtistProfileComponent },
  {path: 'add-artworks', component: AddArtworksComponent},
  {path:'under-development',component:UnderDevelopmentComponent},
  {path:'gallery', component:GalleryComponent},
  { path: 'gallery', component: GalleryComponent }, 
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },

  { path: '**', redirectTo: 'HomeComponent' }// Redirect all other routes to the default route
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ReactiveFormsModule,BrowserModule, HttpClientModule,FormsModule,CommonModule], 
  exports: [RouterModule], 
  providers: [provideHttpClient(withFetch())],
 
})
export class AppRoutingModule { }








