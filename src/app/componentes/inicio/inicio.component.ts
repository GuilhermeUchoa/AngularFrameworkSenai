import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule, MatGridListModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
}
