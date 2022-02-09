import { Component, OnInit } from '@angular/core';


import { ToastrService } from 'ngx-toastr';

import { Accesorio } from 'src/app/models/accesorio/accesorio';
import { AccesorioService } from 'src/app/services/accesorio.service';

@Component({
  selector: 'app-listar-accesorio',
  templateUrl: './listar-accesorio.component.html',
  styleUrls: ['./listar-accesorio.component.css']
})
export class ListarAccesorioComponent implements OnInit {
  objAccesorios: Accesorio[] = []
  accesorio: any
  constructor(private _accesorioService: AccesorioService,
    private toastr: ToastrService,
  ) { }
  ngOnInit(): void {
    this.obtenerAccesorio()
  }
  obtenerAccesorio() {
    this._accesorioService.listarAccesorio().subscribe((accesorio: any) => {
      this.objAccesorios = accesorio.map((x: any) => new Accesorio(
        x._codArma,
        x._nombre,
        x._tipoAccesorio,
        x._precio,
      ))
      this.accesorio = this.objAccesorios;
      console.log(accesorio);
    })
  }

  eliminoAccesorio(codArma: any) {
    this._accesorioService.eliminarAccesorio(codArma).subscribe(data => {
      this.toastr.error('El tirador fue eliminado con exito', 'ELIMINADO');
      this.obtenerAccesorio();
    })
  }

}
