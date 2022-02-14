import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AccesorioService } from 'src/app/services/accesorio.service';

@Component({
  selector: 'app-crear-tirador',
  templateUrl: './crear-accesorio.component.html',
  styleUrls: ['./crear-accesorio.component.css']
})
export class CrearAccesorioComponent implements OnInit {
  accesorioForms: FormGroup;
  _idAccesorio: any;
  _codArma: any;

  showC = false;
  showX = false;
  showM = false;
  titulo = 'CREAR ACCESORIO';
  constructor(private vb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _accesorioService: AccesorioService,
    private aRouter: ActivatedRoute,
  ) {
    this.accesorioForms = this.vb.group({
      _codArma: ['', Validators.required],
      _idAccesorio: [''],
      _nombre: ['', Validators.required],
      _tipoAccesorio: ['', Validators.required],
      _precio: ['', Validators.required],
      _zoom: [''],
      _tipoMirilla: [''],
      _numeroBalas: [''],
      _longitudCanon: ['']
    })
    this._idAccesorio = this.aRouter.snapshot.paramMap.get('_idAccesorio');
    console.log()
  }

  ngOnInit(): void {
    this.editarAccesorio();
  }


  agregarAccesorio() {
    
    let Creoaccesorio: any

    
    let tipo = this.accesorioForms.get('_tipoAccesorio')?.value;
    console.log("esto es tipo", tipo)
    if (tipo == "Cargador") {
      this.titulo = "CARGADOR"
      Creoaccesorio = {
        _codArma: this.accesorioForms.get('_codArma')?.value,
        _idAccesorio: this.accesorioForms.get('_idAccesorio')?.value,
        _nombre: this.accesorioForms.get('_nombre')?.value,
        _tipoAccesorio: this.accesorioForms.get('_tipoAccesorio')?.value,
        _precio: this.accesorioForms.get('_precio')?.value,
        _numeroBalas: this.accesorioForms.get('_numeroBalas')?.value
      }
    } else if (tipo == "Mirilla") {
      Creoaccesorio = {
        _codArma: this.accesorioForms.get('_codArma')?.value,
        _idAccesorio: this.accesorioForms.get('_idAccesorio')?.value,
        _nombre: this.accesorioForms.get('_nombre')?.value,
        _tipoAccesorio: this.accesorioForms.get('_tipoAccesorio')?.value,
        _precio: this.accesorioForms.get('_precio')?.value,
        _zoom: this.accesorioForms.get('_zoom')?.value,
        _tipoMirilla: this.accesorioForms.get('_tipoMirilla')?.value,
      }
    } else {
      Creoaccesorio = {
        _codArma: this.accesorioForms.get('_codArma')?.value,
        _idAccesorio: this.accesorioForms.get('_idAccesorio')?.value,
        _nombre: this.accesorioForms.get('_nombre')?.value,
        _tipoAccesorio: this.accesorioForms.get('_tipoAccesorio')?.value,
        _precio: this.accesorioForms.get('_precio')?.value,
        _longitudCanon: this.accesorioForms.get('_longitudCanon')?.value
      }
    }
    if (this._idAccesorio == null) {
      //creo un tirador nuevo
      console.log(Creoaccesorio);
      this._accesorioService.creoAccesorio(Creoaccesorio).subscribe(data => {
        this.toastr.success('El accesorio fue creado con exito', 'CREADO');
        this.router.navigate(['/listar-accesorio'])
      })
    } else {
      //edito un tirador
      this._accesorioService.editoAccesorio(this._idAccesorio, Creoaccesorio).subscribe(data => {
        this.toastr.info('El accesorio fue editado con exito', 'EDITADO');
        this.router.navigate(['/listar-accesorio'])
      })
    }


  }



  editarAccesorio() {
    let Creoaccesorio: any
    if (this._idAccesorio !== null) {
      this.titulo = "EDITAR ACCESORIO";
    

    this._accesorioService.obtengoAccesorio2(this._idAccesorio).subscribe(data => {

      console.log(data)

      if (data[0]._tipoAccesorio == "Cargador") {
        this.showC = true;
        this.accesorioForms.patchValue({
          _codArma: data[0]._codArma,
          _idAccesorio: data[0]._idAccesorio,
          _nombre: data[0]._nombre,
          _tipoAccesorio: data[0]._tipoAccesorio,
          _precio: data[0]._precio,
          _numeroBalas: data[0]._numeroBalas
        })
      } else if (data[0]._tipoAccesorio == "Mirilla") {
        this.showM = true;
        this.accesorioForms.patchValue({
          _codArma: data[0]._codArma,
          _idAccesorio: data[0]._idAccesorio,
          _nombre: data[0]._nombre,
          _tipoAccesorio: data[0]._tipoAccesorio,
          _precio: data[0]._precio,
          _zoom: data[0]._zoom,
          _tipoMirilla: data[0]._tipoMirilla
        })
      } else {
        this.showX = true;
        this.accesorioForms.patchValue({
          _codArma: data[0]._codArma,
          _idAccesorio: data[0]._idAccesorio,
          _nombre: data[0]._nombre,
          _tipoAccesorio: data[0]._tipoAccesorio,
          _precio: data[0]._precio,
          _longitudCanon: data[0]._longitudCanon,
        })
      }

    }) }

  }
}
