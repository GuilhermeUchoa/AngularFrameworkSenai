import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuProdutosComponent } from './menu-produtos/menu-produtos.component';
import { LoginService } from '../../services/login/login.service';


@Component({
  selector: 'app-restrito',
  standalone: true,
  imports: [RouterOutlet, MenuProdutosComponent],
  templateUrl: './restrito.component.html',
  styleUrl: './restrito.component.css'
})
export class RestritoComponent {
  constructor(

    private _LoginService:LoginService
  ) { }

  ngOnInit(): void {

    this._LoginService.setMostraMenu(true)
  }
}
