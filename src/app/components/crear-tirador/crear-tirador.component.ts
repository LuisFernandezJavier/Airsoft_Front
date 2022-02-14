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
  

  showC = false;
  showB = false;
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
      _fechaInscripcion: ['', Validators.required],
      _revivido: [''],
      _explosivoDetonado: ['']

    })
    this._codArma = this.aRouter.snapshot.paramMap.get('_codArma');
    
  }

  ngOnInit(): void {
    this.editarTirador();
  }
  agregarTirador() {
    let Creotirador: any
    
    let comparo = this.tiradorForms.get('_rolTirador')?.value
    console.log("soy",comparo)
    if (comparo == "Curador") {
      Creotirador = {
        _codArma: this.tiradorForms.get('_codArma')?.value,
        _codEquipo: this.tiradorForms.get('_codEquipo')?.value,
        _nombre: this.tiradorForms.get('_nombre')?.value,
        _rolTirador: this.tiradorForms.get('_rolTirador')?.value,
        _bajas: this.tiradorForms.get('_bajas')?.value,
        _muertes: this.tiradorForms.get('_muertes')?.value,
        _fechaInscripcion: this.tiradorForms.get('_fechaInscripcion')?.value,
        _revivido: this.tiradorForms.get('_revivido')?.value,
      }
    } else if (comparo = "Bombardero") {
      Creotirador = {
        _codArma: this.tiradorForms.get('_codArma')?.value,
        _codEquipo: this.tiradorForms.get('_codEquipo')?.value,
        _nombre: this.tiradorForms.get('_nombre')?.value,
        _rolTirador: this.tiradorForms.get('_rolTirador')?.value,
        _bajas: this.tiradorForms.get('_bajas')?.value,
        _muertes: this.tiradorForms.get('_muertes')?.value,
        _fechaInscripcion: this.tiradorForms.get('_fechaInscripcion')?.value,
        _explosivoDetonado: this.tiradorForms.get('_explosivoDetonado')?.value,
      }
    } else if (comparo == "Tirador") {
      Creotirador = {
        _codArma: this.tiradorForms.get('_codArma')?.value,
        _codEquipo: this.tiradorForms.get('_codEquipo')?.value,
        _nombre: this.tiradorForms.get('_nombre')?.value,
        _rolTirador: this.tiradorForms.get('_rolTirador')?.value,
        _bajas: this.tiradorForms.get('_bajas')?.value,
        _muertes: this.tiradorForms.get('_muertes')?.value,
        _fechaInscripcion: this.tiradorForms.get('_fechaInscripcion')?.value,
      }
    }
console.log("llega del formulario",Creotirador)

    if (this._codArma == null) {
      //creo un tirador nuevo
      console.log(Creotirador);
      this._tiradorService.creoTirador(Creotirador).subscribe(data => {
        this.toastr.success('El tirador fue creado con exito', 'CREADO');
        this.router.navigate(['/listar-tirador'])
      })
    } else {
      //edito un tirador
      this._tiradorService.editoTirador(this._codArma, Creotirador).subscribe(data => {
        this.toastr.info('El tirador fue editado con exito', 'EDITADO');
        this.router.navigate(['/listar-tirador'])
      })
    }
  }

  editarTirador() {
    if (this._codArma !== null) {
      this.titulo = "EDITAR TIRADOR";

    

    this._tiradorService.obtengoTirador2(this._codArma).subscribe(data => {
      console.log("esto es data", data);

      if (data[0]._rolTirador == "Tirador") {
        this.tiradorForms.patchValue({
          _codArma: data[0]._codArma,
          _codEquipo: data[0]._codEquipo,
          _nombre: data[0]._nombre,
          _rolTirador: data[0]._rolTirador,
          _bajas: data[0]._bajas,
          _muertes: data[0]._muertes,
          _fechaInscripcion: data[0]._fechaInscripcion
        })
      } else if (data[0]._rolTirador == "Curador") {
        this.showC = true;
        this.tiradorForms.patchValue({
          _codArma: data[0]._codArma,
          _codEquipo: data[0]._codEquipo,
          _nombre: data[0]._nombre,
          _rolTirador: data[0]._rolTirador,
          _bajas: data[0]._bajas,
          _muertes: data[0]._muertes,
          _fechaInscripcion: data[0]._fechaInscripcion,
          _revivido: data[0]._revivido
        })
      } else if (data[0]._rolTirador == "Bombardero"){
        this.showB = true;
        this.tiradorForms.patchValue({
          _codArma: data[0]._codArma,
          _codEquipo: data[0]._codEquipo,
          _nombre: data[0]._nombre,
          _rolTirador: data[0]._rolTirador,
          _bajas: data[0]._bajas,
          _muertes: data[0]._muertes,
          _fechaInscripcion: data[0]._fechaInscripcion,
          _explosivoDetonado: data[0]._explosivoDetonado
          
        })
      }

    })  }

  }
}




