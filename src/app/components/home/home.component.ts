import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tirador } from 'src/app/models/tirador/tirador';
import { TiradorService } from 'src/app/services/tirador.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  objTiradores: Tirador[] = []
  codEquipo4: string = "4"
  codEquipo3: string = "3"
  codEquipo2: string = "2"
  codEquipo1: string = "1"
  


  constructor(private _tiradorService: TiradorService,
    private aRouter: ActivatedRoute,) { }

  ngOnInit(): void {
    
  }
}


  
