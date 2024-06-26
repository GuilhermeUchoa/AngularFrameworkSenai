import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { LoginService } from '../../services/login/login.service';



@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  mostrarMenu!: boolean 

  constructor(private _LoginService: LoginService) { }

  ngOnInit(): void {

    if(localStorage.getItem('token') !== null){

      this._LoginService.setMostraMenu(true)
      this.mostrarMenu = true
    }

    this._LoginService.getMostraMenu().subscribe((res) => {
      this.mostrarMenu = res;


    })
  }

  ngOnDestroy(): void {
    localStorage.clear()

  }
}
