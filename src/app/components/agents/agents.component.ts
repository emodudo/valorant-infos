import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importa o Router
import { ValorantService } from '../../services/valorant.service'; 

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent implements OnInit {
  agents: any[] = [];

  constructor(private valorantService: ValorantService, private router: Router) { }

  ngOnInit(): void {
    this.valorantService.getAgents().subscribe(data => {
      console.log('Dados recebidos:', data);
      this.agents = data.data;
    });
  }

  viewAgentInfo(agentId: string): void {
    this.router.navigate(['/agent-info', agentId]); // Navega para a rota de detalhes do agente
  }
}
