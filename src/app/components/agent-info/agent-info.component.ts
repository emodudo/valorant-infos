import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ValorantService } from '../../services/valorant.service';

@Component({
  selector: 'app-agent-info',
  templateUrl: './agent-info.component.html',
  styleUrls: ['./agent-info.component.css']
})
export class AgentInfoComponent implements OnInit {
  agent: any;

  constructor(
    private route: ActivatedRoute,
    private valorantService: ValorantService
  ) { }

  ngOnInit(): void {
    const agentName = this.route.snapshot.paramMap.get('name');
    this.valorantService.getAgents().subscribe(data => {
      this.agent = data.data.find((a: any) => a.displayName === agentName);
      console.log('Agente encontrado:', this.agent);
    });
  }
}
