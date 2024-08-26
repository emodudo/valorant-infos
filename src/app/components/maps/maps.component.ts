import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ValorantService } from '../../services/valorant.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent {
  maps: any[] = [];

  constructor(private valorantService: ValorantService, private router: Router) { }

  ngOnInit(): void {
    this.valorantService.getMaps().subscribe(data => {
      console.log('Dados recebidos:', data);
      this.maps = data.data;
    },
      error => {
        console.error('Erro ao buscar os mapas:', error);
      }
    );
  }
}