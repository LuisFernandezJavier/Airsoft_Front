import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TiradorService } from 'src/app/services/tirador.service';

@Component({
  selector: 'app-crear-tirador',
  templateUrl: './crear-tirador.component.html',
  styleUrls: ['./crear-tirador.component.css']
})
export class CrearTiradorComponent implements OnInit {
  tiradorForms: FormGroup;
  _codArma: any;
  titulo = 'Crear Vehiculo';
  constructor(private vb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _tiradorService: TiradorService,
    private aRouter: ActivatedRoute,
  ) {
    this.tiradorForms = this.vb.group({
      _codArma: ['', Validators.required],
      _codEquipo: ['', Validators.required],
      _nombre: ['', Validators.required],
      _rolTirador: ['', Validators.required],
      _bajas: ['', Validators.required],
      _muertes: ['', Validators.required],
      _fechaInscripcion: ['', Validators.required]

    })
    this._codArma = this.aRouter.snapshot.paramMap.get('_codArma');
  }

  ngOnInit(): void {
    this.editarTirador();
  }
  agregarVehiculo() {
    console.log(this.tiradorForms);
    const Creotirador: any = {
      _codArma: this.tiradorForms.get('_codArma')?.value,
      _codEquipo: this.tiradorForms.get('_codEquipo')?.value,
      _nombre: this.tiradorForms.get('_nombre')?.value,
      _rolTirador: this.tiradorForms.get('_rolTirador')?.value,
      _bajas: this.tiradorForms.get('_bajas')?.value,
      _muertes: this.tiradorForms.get('_muertes')?.value,
      _fechaInscripcion: this.tiradorForms.get('_fechaInscripcion')?.value,
    }
    if (this._codArma == null) {
      //creo un tirador nuevo
      console.log(Creotirador);
      this._tiradorService.creoTirador(Creotirador).subscribe(data => {
        this.toastr.success('El vehiculo fue creado con exito', 'CREADO');
        this.router.navigate(['/'])
      })
    } else {
      //edito un tirador
      this._tiradorService.editoTirador(this._codArma, Creotirador).subscribe(data => {
        this.toastr.info('El vehiculo fue editado con exito', 'EDITADO');
        this.router.navigate(['/'])
      })
    }
  }

  editarTirador(){
    if(this._codArma !== null){
      this.titulo="EDITAR TIRADOR";
      this._tiradorService.obtengoTirador(this._codArma).subscribe(data=>{
        console.log(data);
        console.log(this._codArma)
        this.tiradorForms.patchValue({
          _codArma: data[0]._codArma ,
          _codEquipo: data[0]._codEquipo,
          _nombre: data[0]._nombre ,
          _rolTirador: data[0]._rolTirador ,
          _bajas: data[0]._bajas,
          _muertes: data[0]._muertes,
          _fechaInscripcion: data[0]._fechaInscripcion
        })
        
      })
    }
  }
}




