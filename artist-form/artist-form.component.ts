import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-artist-form',
  imports: [CommonModule,RouterModule,FormsModule,HttpClientModule],
  templateUrl: './artist-form.component.html',
  styleUrl: './artist-form.component.css'
})
export class ArtistFormComponent {


  artistFormModel = {
    name: '', 
    artStyle: '',
    location: '',
    medium: '',
    bio: ''
  };

  constructor(private http: HttpClient, private router: Router)  { }

  onSubmit() {
    // Replace with your actual API endpoint
    const apiUrl = 'http://localhost:8081/api/artists/details'; 

    this.http.post(apiUrl, this.artistFormModel).subscribe(
      response => {
        console.log('Artist details saved successfully', response);
        // Optionally reset the form or navigate to another page
        this.router.navigate(['/under-development']);
      },
      error => {
        console.error('Error saving artist details', error);
      }
    );
  }

}



