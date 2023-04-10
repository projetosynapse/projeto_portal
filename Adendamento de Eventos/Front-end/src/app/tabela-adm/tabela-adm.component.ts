import { Component, OnInit } from '@angular/core';
import { Table } from './table';
import { TableService } from './table.service';
import { CadEventos } from '../cad-eventos/cad-eventos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabela-adm',
  templateUrl: './tabela-adm.component.html',
  styleUrls: ['./tabela-adm.component.scss']
})
export class TabelaAdmComponent implements OnInit {

  tabela:Table[]=[]

  constructor(
    private service: TableService,
    private router: Router  
  ) { }

  ngOnInit(): void {
    this.service.listarTable().subscribe((event)=>{
      this.tabela = event.result as Table[]
      console.log(this.tabela)
    })
  }

  deletar(email: string){
    this.service.deletarUsuario(email).subscribe(()=>{
      console.log(email)
      this.router.navigate(["/tabela-adm"])
    },
    (error) => console.log(error)
    )
  }
  
}
