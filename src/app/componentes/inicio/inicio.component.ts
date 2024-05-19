import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { Produto } from '../../interfaces/produtos/produto';
import { ProdutoService } from '../../services/produtos/produto.service';
import { LoginService } from '../../services/login/login.service';


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule, MatGridListModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  public produtos: Produto[] = []

  constructor(private _ProdutoService: ProdutoService) { }

  ngOnInit(): void {
    this._ProdutoService.getProdutos().subscribe((data)=>{this.produtos = data})

  }


}
