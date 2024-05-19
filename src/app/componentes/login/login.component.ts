import { Component } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  usuario!: string
  senha!: string

  constructor(private _LoginService:LoginService, private _Router:Router){}

  fazerLogin():void{
    this._LoginService.login(this.usuario,this.senha)
    this._Router.navigate(['/restrito/listar'])
    this._LoginService.setMostraMenu(true)
  }


   
}
