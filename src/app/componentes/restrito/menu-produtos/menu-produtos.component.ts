import { Component } from '@angular/core';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu-produtos',
  standalone: true,
  imports: [MatToolbar, MatToolbarRow],
  templateUrl: './menu-produtos.component.html',
  styleUrl: './menu-produtos.component.css'
})
export class MenuProdutosComponent {

  logout(){
    localStorage.clear();

  }
}
