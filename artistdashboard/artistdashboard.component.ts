import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface Artwork {
  title: string;
  imageUrl: string;
  description: string;
}

@Component({
  selector: 'app-artistdashboard',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './artistdashboard.component.html',
  styleUrls: ['./artistdashboard.component.css'] // Corrected to styleUrls
})
export class ArtistdashboardComponent implements OnInit {
  artistId: number = 10; // Initialize artistId
  profileExists: boolean = false; // Flag to check if profile exists
  apiUrl = 'http://localhost:8081/api/artist'; // Adjust the URL as needed

  
  artworks: Artwork[] = [
    {
      title: 'Sunset Bliss',
      imageUrl: 'https://via.placeholder.com/150',
      description: 'A beautiful sunset over the mountains.'
    },
    {
      title: 'Ocean Waves',
      imageUrl: 'https://via.placeholder.com/150',
      description: 'A serene view of the ocean waves.'
    },
    {
      title: 'Forest Path',
      imageUrl: 'https://via.placeholder.com/150',
      description: 'A tranquil path through a lush forest.'
    }
  ];

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.artistId = this.getLoggedInArtistId(); // Get the logged-in artist's ID
  }


  onLogout() {
    // Clear the artist ID from local storage
    localStorage.removeItem('artistId');

    // Redirect to the home page
    this.router.navigate(['/home']); // Change '/home' to your actual home route
  }

  getLoggedInArtistId(): number {
    // Implement logic to retrieve the logged-in artist's ID
    if (typeof window !== 'undefined') {
      return Number(localStorage.getItem('artistId')) || 10; // Replace with actual logic
    }
    return 1; // Fallback value if not in a browser environment
  }

  // Method to format the artwork title for URL
  formatTitleForUrl(title: string): string {
    return title.toLowerCase().replace(/\s+/g, '-'); // Replace spaces with hyphens
  }
}