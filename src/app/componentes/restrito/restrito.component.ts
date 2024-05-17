import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuProdutosComponent } from './menu-produtos/menu-produtos.component';

@Component({
  selector: 'app-restrito',
  standalone: true,
  imports: [RouterOutlet, MenuProdutosComponent],
  templateUrl: './restrito.component.html',
  styleUrl: './restrito.component.css'
})
export class RestritoComponent {

}
