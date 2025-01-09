import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  artworks = [
    { title: 'Image 1', url: 'assets/images/pinkcat.jpg', price: 100 },
    { title: 'Image 2', url: 'assets/images/artwork1.jpeg', price: 150 },
    { title: 'Image 3', url: 'assets/images/artwork2.jpeg', price: 200 },
    { title: 'Image 3', url: 'assets/images/artwork3.jpeg', price: 300 },
    { title: 'Image 3', url: 'assets/images/walpaper.jpg' , price: 180},
  ];

}
