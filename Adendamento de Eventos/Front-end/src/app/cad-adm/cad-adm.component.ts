import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CadEventos } from '../cad-eventos/cad-eventos';
import { CadEventosService } from '../cad-eventos/cad-eventos.service';

@Component({
  selector: 'app-cad-adm',
  templateUrl: './cad-adm.component.html',
  styleUrls: ['./cad-adm.component.scss']
})
export class CadAdmComponent implements OnInit {

  inputsCadAdm!:FormGroup

  constructor(
    private FormBuilder:FormBuilder,
    private service: CadEventosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.inputsCadAdm = this.FormBuilder.group({
      email:[''],
      senha:[''],
      nome:[''],
      cargo:[''],
      instituicao:['']
    })
  }

  enviarDadosUsuarios(){
    if(this.inputsCadAdm.valid){
      const novoUsuario = this.inputsCadAdm.getRawValue() as CadEventos;
      this.service.cadastrarUsuario(novoUsuario).subscribe(()=>{
        this.router.navigate(['/tabela-adm']);
        console.log(novoUsuario);
      },
      (error)=>{
        console.log('Erro inesperado')
      }
      );
    }
  }


}
