import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-under-development',
  imports: [RouterModule,CommonModule],
  templateUrl: './under-development.component.html',
  styleUrl: './under-development.component.css'
})
export class UnderDevelopmentComponent {

}
