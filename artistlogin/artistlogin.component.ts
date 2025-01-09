import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-artistlogin',
  imports: [CommonModule,RouterModule,RouterLink,FormsModule,HttpClientModule],
  templateUrl: './artistlogin.component.html',
  styleUrl: './artistlogin.component.css'
})
export class ArtistloginComponent {

  artist = {
    email: '',
    password: ''
  };

   private apiUrl = 'http://localhost:8081/api/artistlogin'; // Adjust the URL if needed
    
      constructor(private http: HttpClient, private router: Router) { }

      onSubmit() {
        this.http.post(this.apiUrl, this.artist).subscribe(
          response => {
            console.log('Artist Login successful:', response);
            // Optionally, store user data in local storage or a service
            this.router.navigate(['/artistdashboard']); // Redirect to dashboard or another page
          },
          error => {
            console.error('Artist Login failed:', error);
            alert('Invalid email or password. Please try again.'); // Show error message
          }
        );
      }
}
