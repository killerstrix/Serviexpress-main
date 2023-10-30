import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slideOpts = {
    initialSlide: 1,
    speed: 400,
  };
  constructor(private router: Router) {}
  ingresahome() {
    
    this.router.navigate(['/home']);
  }
  ingresaservicio() {
    
    this.router.navigate(['/servicios']);
  }
  ingresaperfil() {
    
    this.router.navigate(['/perfil']);
  }
  ingresaproductos() {
    
    this.router.navigate(['/productos']);
  }
  ingresapedidos() {
    
    this.router.navigate(['/pedidos']);
  }
  
}
