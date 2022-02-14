import { Component, OnInit } from '@angular/core';

import { TiradorService } from 'src/app/services/tirador.service';
import { ToastrService } from 'ngx-toastr';
import { Tirador } from '../../models/tirador/tirador';
import { Curador } from 'src/app/models/tirador/curador';
import { Bombardero } from 'src/app/models/tirador/bombardero';

@Component({
  selector: 'app-listar-tirador',
  templateUrl: './listar-tirador.component.html',
  styleUrls: ['./listar-tirador.component.css']
})
export class ListarTiradorComponent implements OnInit {
  objTiradores: Tirador[] = []
  objCuradores: Curador[] = []
  objBombarderos: Bombardero[] = []
 
  show = false;
  showC = false;
  showB = false;
  constructor(private _tiradorService: TiradorService,
    private toastr: ToastrService,
  ) { }
  ngOnInit(): void {
    this.obtenerTirador()
    
  }
  obtenerTirador() {
    this._tiradorService.listarTiradores().subscribe((tirador: any) => {
      console.log("llega" , tirador[0])

      this.objTiradores = tirador.filter((y: any) => y._rolTirador == "Tirador").map((x: any) => new Tirador(
        x._codArma,
        x._codEquipo,
        x._nombre,
        x._rolTirador,
        x._bajas,
        x._muertes,
        x._fechaInscripcion,
      ))
      console.log("this.objTiradores", this.objTiradores)
      this.objCuradores = tirador.filter((y: any) => y._rolTirador == "Curador").map((x: any) => new Curador(
        x._codArma,
        x._codEquipo,
        x._nombre,
        x._rolTirador,
        x._bajas,
        x._muertes,
        x._fechaInscripcion,
        x._revivido
      ))

      this.objBombarderos = tirador.filter((y: any) => y._rolTirador == "Bombardero").map((x: any) => new Bombardero(
        x._codArma,
        x._codEquipo,
        x._nombre,
        x._rolTirador,
        x._bajas,
        x._muertes,
        x._fechaInscripcion,
        x._explosivoDetonado
      ))
      
      
    })

    
    
  }

  






  eliminoTirador(codArma: any) {
    this._tiradorService.eliminarTirador(codArma).subscribe(data => {
      this.toastr.error('El tirador fue eliminado con exito', 'ELIMINADO');
      this.obtenerTirador();
    })
  }

}
