import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProdutoService } from '../../../services/produtos/produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-produto',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './cadastro-produto.component.html',
  styleUrl: './cadastro-produto.component.css'
})
export class CadastroProdutoComponent {

  produtoFormulario!: FormGroup
  
  constructor(
    private _ProdutoService: ProdutoService,
    private _Router: Router,
    private _FormBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.produtoFormulario = this._FormBuilder.group({
      produto:[,Validators.compose([Validators.required,Validators.pattern(/(.|\s)*\S(.|\s)*/)])],
      descricao:[],
      foto:[],
      preco:[,Validators.compose([Validators.required])]

    })
  }

  cadastrar(): void {
    if(this.produtoFormulario.valid){
      console.log('controle form')
      this._ProdutoService.cadastrarProduto(this.produtoFormulario.value).subscribe(()=>{
        alert('Cadastrado com sucesso!!!')
        this._Router.navigate(['/restrito/listar'])
      })
    }
  }
}
