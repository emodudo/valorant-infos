import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValorantService } from '../../services/valorant.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  maps: any[] = [];

  constructor(private valorantService: ValorantService, private router: Router) { }

  ngOnInit(): void {
    const excludedMapNames = ['The Range', 'Basic Training']; 
  
    this.valorantService.getMaps().subscribe(data => {
      console.log('Dados recebidos:', data);
      this.maps = data.data
        .filter((map: any) => !excludedMapNames.includes(map.displayName) && map.displayName)
        .map((map: any) => ({ ...map, loaded: false }));
    },
    error => {
      console.error('Erro ao buscar os mapas:', error);
    });
  }

  onImageLoad(map: any): void {
    map.loaded = true;
  }
}
