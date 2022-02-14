import { Component, OnInit } from '@angular/core';
import * as Highcharts from "highcharts";
import { TiradorService } from 'src/app/services/tirador.service';

import { ToastrService } from 'ngx-toastr';
import { Tirador } from '../../models/tirador/tirador';
import { Curador } from 'src/app/models/tirador/curador';
import { Bombardero } from 'src/app/models/tirador/bombardero';
import { ActivatedRoute, Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';
import { ArmaService } from 'src/app/services/arma.service';
import { Arma } from 'src/app/models/arma';
import { AccesorioService } from 'src/app/services/accesorio.service';

@Component({
  selector: 'app-veo-tirador',
  templateUrl: './veo-tirador.component.html',
  styleUrls: ['./veo-tirador.component.css']
})
export class VeoTiradorComponent implements OnInit {
  [x: string]: any;
  TiradorO: Tirador[] = []
  objCuradores: Curador[] = []
  objBombarderos: Bombardero[] = []
  nombreArma: string =""
  categoriaArma: string = ""
  nombresAccesorios: Array<string> =[]
  valorT: string = ""
  nameT: string = ""
  kda: string = ""
 
  Highcharts: typeof Highcharts = Highcharts;


  chartOptions: any = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false,
      backgroundColor: 'rgb(31, 29, 29)'
    },
    title: {
      text: 'Letalidad<br>Mortalidad<br>',
      style: {
        color: 'rgb(252, 204, 46, 0.8)',
      },
      align: 'center',
      verticalAlign: 'middle',
      y: 80
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          distance: -50,
          style: {
            fontWeight: 'bold',
            color: 'white'
          }
        },
        startAngle: -90,
        endAngle: 90,
        center: ['50%', '75%'],
        size: '110%'
      }
    },
    series: [
      {
        type: 'pie',
        name: 'Letalidad - Mortalidad',
        innerSize: '50%',
        data: [],
      }],
  }



  constructor(private _tiradorService: TiradorService,
    private _armaService: ArmaService,
    private _accesorioService : AccesorioService,
    private toastr: ToastrService,
    private router: Router,
    private aRouter: ActivatedRoute,
  ) {
    //let _codArma = this.aRouter.snapshot.paramMap.get('_codArma');
  }
  ngOnInit(): void {
    this.obtenerTirador()
    this.obtengosuArma()
  }
  obtenerTirador() {
    let _codArma = this.aRouter.snapshot.paramMap.get('_codArma');
    this._tiradorService.calculoKDA(_codArma).subscribe((BM: any) => {
      this.kda = BM.toFixed(3).toString()
    })

    this._tiradorService.obtengoTirador2(_codArma).subscribe((objTirador: any) => {


      this.TiradorO = objTirador.map((x: any) => new Tirador(
        x._codArma,
        x._codEquipo,
        x._nombre,
        x._rolTirador,
        x._bajas,
        x._muertes,
        x._fechaInscripcion
      ))

      // mando datos al highcharts
      let b: Array<any>
      let a: string = "Bajas"
      let j: string = "Muertes"
      this.nameT = this.TiradorO[0].nombre

      b = [
        [a, this.TiradorO[0].bajas],
        [j, this.TiradorO[0].muertes]
      ]

      console.log(b)
      this.chartOptions.series[0]["data"] = b
      this.chartOptions.series["name"] = a


      Highcharts.chart('miGrafico01', this.chartOptions)

    })
  }

  obtengosuArma() {
    let _codArma = this.aRouter.snapshot.paramMap.get('_codArma');
    console.log(_codArma)
    this._armaService.ArmaxAccesorio(_codArma).subscribe((valorT: any) => {
      
      console.log("esto",valorT)
    })
    this._armaService.obtengoArma(_codArma).subscribe((arma: any) => {
      this.nombreArma = arma[0]._nombreArma
      this.categoriaArma = arma[0]._categoriaArma
    })
    this._accesorioService.obtengoAccesorio3(_codArma).subscribe((accesorio: any) =>{
    
      for (let a of accesorio){
        this.nombresAccesorios.push(a._nombre)
      }
      console.log(this.nombresAccesorios)
    })
    
}

}

