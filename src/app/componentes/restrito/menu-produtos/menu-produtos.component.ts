import { Component } from '@angular/core';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';
import { Router, RouterLink } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { LoginService } from '../../../services/login/login.service';

@Component({
  selector: 'app-menu-produtos',
  standalone: true,
  imports: [MatToolbar, MatToolbarRow, RouterLink, MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule],
  templateUrl: './menu-produtos.component.html',
  styleUrl: './menu-produtos.component.css'
})
export class MenuProdutosComponent {

  constructor(
    private _Router:Router,
    private _LoginService:LoginService
  ) { }

  logout(){
    localStorage.clear();
    this._LoginService.setMostraMenu(false)
    this._Router.navigate(['/login'])

  }
}
