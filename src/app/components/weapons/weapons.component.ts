import { Component, OnInit } from '@angular/core';
import { ValorantService } from '../../services/valorant.service';


@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrl: './weapons.component.css'
})
export class WeaponsComponent implements OnInit {
  weapons: any[] = [];

  constructor(private valorantService: ValorantService) { }

  ngOnInit(): void {
    this.valorantService.getWeapons().subscribe(data => {
      console.log('Dados recebidos:', data);
      this.weapons = data.data;
    });
  }
}
