import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-artworks',
  imports: [CommonModule,FormsModule,HttpClientModule,RouterModule,ReactiveFormsModule],
  templateUrl: './add-artworks.component.html',
  styleUrl: './add-artworks.component.css'
})
export class AddArtworksComponent {
  artworkForm: FormGroup;
  private baseUrl = 'http://localhost:8081/api/artworks'; // Your API endpoint
  selectedFile: File | null = null; // To hold the selected file

  constructor(private fb: FormBuilder, private http: HttpClient) {
    // Initialize the form
    this.artworkForm = this.fb.group({
      artistId: [null, Validators.required], // Added artistId field
      artistEmail: ['', [Validators.required, Validators.email]],
      title: ['', Validators.required],
      medium: ['', Validators.required],
      style: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
      size: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {}

  // Handle file change
  onFileChange(event: any ) {
    if (event.target.files.length > 0) {
        this.selectedFile = event.target.files[0]; // Store the selected file
    }
  }

  // Handle form submission
  onSubmit() {
    if (this.artworkForm.valid) {
        const formData = new FormData();
        formData.append('artistEmail', this.artworkForm.get('artistEmail')?.value);
        formData.append('title', this.artworkForm.get('title')?.value);
        formData.append('medium', this.artworkForm.get('medium')?.value);
        formData.append('style', this.artworkForm.get('style')?.value);
        formData.append('category', this.artworkForm.get('category')?.value);
        formData.append('description', this.artworkForm.get('description')?.value);
        formData.append('size', this.artworkForm.get('size')?.value);
        formData.append('price', this.artworkForm.get('price')?.value);
        
        if (this.selectedFile) {
            formData.append('image', this.selectedFile); // Append the image file
        }

        // Send the form data to the backend
        this.http.post(this.baseUrl, formData).subscribe(
            response => {
                console.log('Artwork added successfully:', response);
                // Optionally reset the form or navigate to another page
                this.artworkForm.reset();
                this.selectedFile = null; // Clear the selected file
            },
            error => {
                console.error('Error adding artwork:', error);
            }
        );
    }
  }
}
