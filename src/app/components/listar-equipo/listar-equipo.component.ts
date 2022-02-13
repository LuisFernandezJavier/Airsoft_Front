

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { kdaEquipo } from 'src/app/models/equipo';
import * as Highcharts from "highcharts";

import { Tirador } from 'src/app/models/tirador/tirador';
import { TiradorService } from 'src/app/services/tirador.service';


@Component({
  selector: 'app-listar-equipo',
  templateUrl: './listar-equipo.component.html',
  styleUrls: ['./listar-equipo.component.css']
})
export class ListarEquipoComponent implements OnInit {
  tiradorEquipo : kdaEquipo [] = []
  Highcharts: typeof Highcharts = Highcharts;
  KDAequipo: number = 0
 contador : number = 0

  chartOptions:any ={
    chart: {
      type: 'column',
      backgroundColor: 'rgb(31, 29, 29)'
  },
  xAxis: {
      categories: [],
      crosshair: true
  },
  yAxis: {
          title: {
                  text: 'Tiradores'
          }    		
  },
  title: {
      text: 'KDA DEL EQUIPO'
  },
  subtitle: {
      text: 'BAJAS - MUERTES DE CADA TIRADOR'
  },
  tooltip: {
      headerFormat: '<span style="font-size:11px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y}</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
  },
  series: [{
      name: 'Bajas',
      data: []
  }, {
      name: 'Muertes',
      data: []
  
  }]
  }
  
  



  constructor(private _tiradorService: TiradorService,
    private aRouter: ActivatedRoute,) { }

  ngOnInit(): void {
    this.obtenerTirador()
  }


  obtenerTirador() {
    //let _codEquipo = this.aRouter.snapshot.paramMap.get('_codEquipo');
    let _codEquipo = this.aRouter.snapshot.paramMap.get('_codEquipo');
    
   
    this._tiradorService.equipoKDA(_codEquipo).subscribe((BM: any) => {
      
      this.tiradorEquipo = BM.map((x: any) => new kdaEquipo(
        x.nombre,
        x.tmpkda,
        x.codArma,
        x.bajas,
        x.muertes
      ))

      this.tiradorEquipo.forEach(element => {

        this.KDAequipo += element.tmpkda
        this.contador ++
        
      });
      this.KDAequipo = (this.KDAequipo/this.contador)
      

      console.log(this.KDAequipo)

      this.chartOptions.series[0]["data"] = this.tiradorEquipo.map((x: any) => x.bajas)
      this.chartOptions.series[1]["data"] = this.tiradorEquipo.map((x: any) => x.muertes)
      this.chartOptions.xAxis["categories"] = this.tiradorEquipo.map((x: any) => x.nombre)


      Highcharts.chart('miGrafico01', this.chartOptions)
       
      console.log(this.tiradorEquipo[0])
      
    })
  
  }
}
    
    

  
  
