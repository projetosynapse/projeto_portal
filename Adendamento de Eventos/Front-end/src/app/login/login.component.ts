import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CadEventos } from '../cad-eventos/cad-eventos';
import { CadEventosService } from '../cad-eventos/cad-eventos.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUsuario!:FormGroup

  constructor(
    private FormBuilder:FormBuilder,
    private service: CadEventosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginUsuario = this.FormBuilder.group({
      email: [''],
      senha: ['']
    })
  }

  dadosLogin(){
    if(this.loginUsuario.valid){
      const enviarUsuario = this.loginUsuario.getRawValue() as CadEventos;
      this.service.enviarUsuario(enviarUsuario).subscribe(()=>{
        this.router.navigate(['/']);
        console.log(enviarUsuario)
      },
      (error)=>{
        console.log('Erro inesperado')
      })
    }
  }

  vazio(){
    this.router.navigate(['/']);
  }

}
