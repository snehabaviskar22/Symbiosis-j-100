import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  FormsModule} from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-artist-profile',
  imports: [CommonModule,FormsModule,RouterModule,HttpClientModule],
  templateUrl: './artist-profile.component.html',
  styleUrl: './artist-profile.component.css'
})
export class ArtistProfileComponent implements OnInit {

  artist: any = null; // Initialize artist as null
  apiUrl = 'http://localhost:8081/api/artist'; // Adjust the URL as needed

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const artistId = this.route.snapshot.paramMap.get('id'); // Get artist ID from route parameters
    if (artistId) {
      this.fetchArtist(artistId); // Fetch artist details
    }
  }

  fetchArtist(id: string) {
    this.http.get(`${this.apiUrl}/${id}`).subscribe(
      (data) => {
        this.artist = data; // Assign fetched artist data
      },
      (error) => {
        console.error('Error fetching artist details:', error);
      }
    );
  }

  saveChanges() {
    if (this.artist) {
      this.http.put(`${this.apiUrl}/${this.artist.id}`, this.artist).subscribe(
        () => {
          alert('Profile updated successfully!'); // Notify user of success
          this.router.navigate(['/artistdashboard']); // Redirect to artist dashboard
        },
        (error) => {
          console.error('Error updating artist profile:', error);
        }
      );
    }
  }
}
 
