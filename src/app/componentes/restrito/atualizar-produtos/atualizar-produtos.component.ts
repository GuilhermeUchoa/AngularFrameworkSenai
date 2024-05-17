import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produto } from '../../../interfaces/produtos/produto';
import { ProdutoService } from '../../../services/produtos/produto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-atualizar-produtos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './atualizar-produtos.component.html',
  styleUrl: './atualizar-produtos.component.css'
})
export class AtualizarProdutosComponent {

  public id: any
  public produto: Produto = {
    "id": 0,
    "produto": "",
    "descricao": "",
    "foto": "",
    "preco": 0
  }

  constructor(
    private _ProdutoService: ProdutoService,
    private _ActivatedRoute: ActivatedRoute,
    private _Router: Router,
  ) {
    this.id = this._ActivatedRoute.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this._ProdutoService.getProduto(this.id).subscribe((data) => {
      this.produto = data
    })

  }
  atualizar(): void {
    this._ProdutoService.atualizarProduto(this.id, this.produto).subscribe(() => {
      alert('Atualizado com sucesso!!!')
      this._Router.navigate(['/restrito/listar'])
    })

  }
}
