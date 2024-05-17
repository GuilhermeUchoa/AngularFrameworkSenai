import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { RestritoComponent } from './componentes/restrito/restrito.component';
import { CadastroProdutoComponent } from './componentes/restrito/cadastro-produto/cadastro-produto.component';
import { ListarProdutosComponent } from './componentes/restrito/listar-produtos/listar-produtos.component';
import { AtualizarProdutosComponent } from './componentes/restrito/atualizar-produtos/atualizar-produtos.component';

export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'login', component: LoginComponent },
    {
        path: 'restrito', component: RestritoComponent, children: [
            { path: 'cadastro', component: CadastroProdutoComponent },
            { path: 'listar', component: ListarProdutosComponent },
            { path: 'editar/:id', component: AtualizarProdutosComponent },
            { path: '', redirectTo: 'restrito/listar', pathMatch: 'full' }
        ]
    },
];
