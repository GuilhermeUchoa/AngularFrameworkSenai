import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Produto } from '../../../interfaces/produtos/produto';
import { ProdutoService } from '../../../services/produtos/produto.service';
import { LoginService } from '../../../services/login/login.service';

@Component({
  selector: 'app-listar-produtos',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './listar-produtos.component.html',
  styleUrl: './listar-produtos.component.css'
})
export class ListarProdutosComponent {

  produtos:Produto[] = []


  constructor(
    private _ProdutoService: ProdutoService,
    private _Router:Router,
    private _LoginService:LoginService
  ) { }

  ngOnInit(): void {
    this.listar()

  }
  listar():void{
    this._ProdutoService.getProdutos().subscribe((data)=>{this.produtos = data})
  }
  excluir(id: any): void {
    
    this._ProdutoService.removerProduto(id).subscribe()
    this._Router.routeReuseStrategy.shouldReuseRoute = ()=> false
    this._Router.onSameUrlNavigation = 'reload'
    this._Router.navigate([this._Router.url])

  }
}
