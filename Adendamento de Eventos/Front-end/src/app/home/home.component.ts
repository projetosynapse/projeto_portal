import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CardComponent } from '../card/card.component';
import { TabelaAdmComponent } from '../tabela-adm/tabela-adm.component';
import { Evento } from './evento';
import { EventoService } from './evento.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  

  agendamentos:Evento[]=[];

  constructor(private modalController:ModalController, private service: EventoService) { }

  async openModal() {
    const modal = await this.modalController.create({
      component: CardComponent,
      cssClass: 'modal'
    });
    await modal.present();

    const res= await modal.onDidDismiss();
  }

  ngOnInit(): void {
    this.service.listarEvento().subscribe((event)=>{
      this.agendamentos = event.result as Evento[]
      console.log(this.agendamentos)
    })
  }
  
}
