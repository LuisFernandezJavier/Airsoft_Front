import { Component, OnInit } from '@angular/core';


import { ToastrService } from 'ngx-toastr';

import { Accesorio } from 'src/app/models/accesorio/accesorio';
import { Arma } from 'src/app/models/arma';
import { ArmaService } from 'src/app/services/arma.service';

@Component({
  selector: 'app-listar-arma',
  templateUrl: './listar-arma.component.html',
  styleUrls: ['./listar-arma.component.css']
})
export class ListarArmaComponent implements OnInit {
  objArmas: Arma[] = []
  arma: any
  constructor(private _armaService: ArmaService,
    private toastr: ToastrService,
  ) { }
  ngOnInit(): void {
    this.obtenerArma()
  }
  obtenerArma() {
    this._armaService.listarArma().subscribe((arma: any) => {
      this.objArmas = arma.map((x: any) => new Arma(
        x._codArma,
        x._nombreArma,
        x._fechaProduccion,
        x._precioBase,
        x._disparoAutomatico ,
        x._categoriaArma ,
        x._animaRayada ,
        x._calibre , 

      ))
      this.arma = this.objArmas;
      console.log(arma);
    })
  }

  eliminoArma(codArma: any) {
    this._armaService.eliminarArma(codArma).subscribe(data => {
      this.toastr.error('El arma fue eliminada con exito', 'ELIMINADA');
      this.obtenerArma();
    })
  }

}
