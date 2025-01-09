import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';



@Component({
  selector: 'app-forartist',
  imports: [CommonModule,RouterModule,RouterLink],
  templateUrl: './forartist.component.html',
  styleUrl: './forartist.component.css'
})
export class ForartistComponent {

}
