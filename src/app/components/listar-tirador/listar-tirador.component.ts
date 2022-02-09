import { Component, OnInit } from '@angular/core';

import { TiradorService } from 'src/app/services/tirador.service';
import { ToastrService } from 'ngx-toastr';
import { Tirador } from '../../models/tirador/tirador';

@Component({
  selector: 'app-listar-tirador',
  templateUrl: './listar-tirador.component.html',
  styleUrls: ['./listar-tirador.component.css']
})
export class ListarTiradorComponent implements OnInit {
  objTiradores: Tirador[] = []
  tirador: any
  constructor(private _tiradorService: TiradorService,
    private toastr: ToastrService,
  ) { }
  ngOnInit(): void {
    this.obtenerTirador()
  }
  obtenerTirador() {
    this._tiradorService.listarTiradores().subscribe((tirador: any) => {
      this.objTiradores = tirador.map((x: any) => new Tirador(
        x._codArma,
        x._codEquipo,
        x._nombre,
        x._rolTirador,
        x._bajas,
        x._muertes,
        x._fechaInscripcion
      ))
      this.tirador = this.objTiradores
      console.log(tirador);



    })
  }








  eliminoTirador(codArma: any) {
    this._tiradorService.eliminarTirador(codArma).subscribe(data => {
      this.toastr.error('El tirador fue eliminado con exito', 'ELIMINADO');
      this.obtenerTirador();
    })
  }

}
