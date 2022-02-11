import { Component, OnInit } from '@angular/core';


import { ToastrService } from 'ngx-toastr';

import { Accesorio } from 'src/app/models/accesorio/accesorio';
import { Cargador } from 'src/app/models/accesorio/cargador';
import { Cañon } from 'src/app/models/accesorio/cañon';
import { Mirilla } from 'src/app/models/accesorio/mirilla';
import { AccesorioService } from 'src/app/services/accesorio.service';

@Component({
  selector: 'app-listar-accesorio',
  templateUrl: './listar-accesorio.component.html',
  styleUrls: ['./listar-accesorio.component.css']
})
export class ListarAccesorioComponent implements OnInit {
  objCargador: Cargador[] = []
  objMirilla: Mirilla[] = []
  objCanon: Cañon[] = []
  showC=false;
  showX= false;
  showM= false;
   tipo="";

  accesorio: any
  constructor(private _accesorioService: AccesorioService,
    private toastr: ToastrService,
  ) { }
  ngOnInit(): void {
    this.obtenerAccesorio()
  }
  obtenerAccesorio() {
    this._accesorioService.listarAccesorio().subscribe((accesorio: any) => {
      this.objCargador = accesorio.filter((y: any) => y._tipoAccesorio == "Cargador").map((x: any) => new Cargador(
        x._codArma,
        x._idAccesorio,
        x._nombre,
        x._tipoAccesorio,
        x._precio,
        x._numeroBalas
      ))
     
      this.objMirilla = accesorio.filter((y: any) => y._tipoAccesorio == "Mirilla").map((x: any) => new Mirilla(
        x._codArma,
        x._idAccesorio,
        x._nombre,
        x._tipoAccesorio,
        x._precio,
        x._zoom,
        x._tipoMirilla
      ))

      this.objCanon = accesorio.filter((y: any) => y._tipoAccesorio == "Cañon").map((x: any) => new Cañon(
        x._codArma,
        x._idAccesorio,
        x._nombre,
        x._tipoAccesorio,
        x._precio,
        x._longitudCanon
      ))

      //this.accesorio = this.objCargador;
      console.log(this.objCargador);
    })
  }
window(){
  location.reload()
}
  eliminoAccesorio(codArma: any) {
    this._accesorioService.eliminarAccesorio(codArma).subscribe(data => {
      this.toastr.error('El accesorio fue eliminado con exito', 'ELIMINADO');
      this.obtenerAccesorio();
    })
  }

}
