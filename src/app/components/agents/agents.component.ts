import { Component, OnInit } from '@angular/core';
import { ValorantService } from '../../services/valorant.service'; 

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent implements OnInit {
  agents: any[] = [];

  constructor(private valorantService: ValorantService) { }

  ngOnInit(): void {
    this.valorantService.getAgents().subscribe(data => {
      console.log('Dados recebidos:', data);
      this.agents = data.data;  // A API retorna os dados em uma chave 'data'
    });
  }
}
