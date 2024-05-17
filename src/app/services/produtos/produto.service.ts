import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../../interfaces/produtos/produto';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private readonly url = "http://localhost:3000/produtos";

  constructor(private _HttpClient: HttpClient) { }

  getProduto(id: any): Observable<Produto> {
    let linkGetProduto = `${this.url}?id=${id}`;
    return this._HttpClient.get<Produto>(linkGetProduto);
  }

  getProdutos():Observable<Produto[]>{
    return this._HttpClient.get<Produto[]>(this.url);
  }

  cadastrarProduto(produto:Produto):Observable<Produto[]>{
    return this._HttpClient.post<Produto[]>(this.url,produto)
  }

  atualizarProduto(id:any, produto:Produto):Observable<Produto>{
    let linkAtualizarProduto = `${this.url}?id=${id}`;
    return this._HttpClient.put<Produto>(linkAtualizarProduto,produto)
  }

  removerProduto(id:any):Observable<Produto>{
    let linkRemoverProduto = `${this.url}?id=${id}`;
    return this._HttpClient.delete<Produto>(linkRemoverProduto)
  }

}
