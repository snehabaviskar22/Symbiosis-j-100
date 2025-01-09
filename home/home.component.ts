import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule,RouterModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  categories = [
    { name: 'Paintings', link: '/paintings' },
    { name: 'Prints', link: '/prints' },
    { name: 'Photographs', link: '/photographs' }
  ];
}


