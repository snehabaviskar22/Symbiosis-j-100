import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-artistsignup',
  imports: [CommonModule,RouterModule,FormsModule,HttpClientModule],
  templateUrl: './artistsignup.component.html',
  styleUrl: './artistsignup.component.css'
})
export class ArtistsignupComponent {

  artist = {
    name: '',
    email: '',
    password: ''
  };

       private apiUrl = 'http://localhost:8081/api/artist'; // Adjust the URL if needed
    
      constructor(private http: HttpClient, private router: Router)  { }
    
      onSubmit() {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        this.http.post(this.apiUrl, this.artist, { headers })
          .subscribe(
            response => {
              console.log('User  signed up successfully:', response);
              // Optionally, redirect or show a success message
              this.router.navigate(['/artistlogin']);
            },
            error => {
              console.error('Error signing up:', error);
            }
          );
      }


}
