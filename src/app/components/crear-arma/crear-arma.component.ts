import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ArmaService } from 'src/app/services/arma.service';

@Component({
  selector: 'app-crear-arma',
  templateUrl: './crear-arma.component.html',
  styleUrls: ['./crear-arma.component.css']
})
export class CrearArmaComponent implements OnInit {
  armaForms: FormGroup;
  _codArma: any;
  titulo = 'CREAR ARMA';
  constructor(private vb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _armaService: ArmaService,
    private aRouter: ActivatedRoute,
  ) {
    this.armaForms = this.vb.group({
      _codArma: ['', Validators.required],
      _nombreArma: ['', Validators.required],
      _fechaProduccion: ['', Validators.required],
      _precioBase: ['', Validators.required],
      _disparoAutomatico: [],
      _categoriaArma: ['', Validators.required],
      _animaRayada: ['', Validators.required],
      _calibre: ['', Validators.required],
    })
    this._codArma = this.aRouter.snapshot.paramMap.get('_codArma');
  }

  ngOnInit(): void {
    this.editarArma();
  }
  agregarArma() {
    console.log(this.armaForms);
    const Creoarma: any = {
      _codArma: this.armaForms.get('_codArma')?.value,
      _nombreArma: this.armaForms.get('_nombreArma')?.value,
      _fechaProduccion: this.armaForms.get('_fechaProduccion')?.value,
      _precioBase: this.armaForms.get('_precioBase')?.value,
      _disparoAutomatico: this.armaForms.get('_disparoAutomatico')?.value,
      _categoriaArma: this.armaForms.get('_categoriaArma')?.value,
      _animaRayada: this.armaForms.get('_animaRayada')?.value,
      _calibre: this.armaForms.get('_calibre')?.value
    }
    if (this._codArma == null) {
      //creo un tirador nuevo
      console.log(Creoarma);
      this._armaService.creoArma(Creoarma).subscribe(data => {
        this.toastr.success('El arma fue creada con exito', 'CREADA');
        this.router.navigate(['/listar-arma'])
      })
    } else {
      //edito un tirador
      this._armaService.editoArma(this._codArma, Creoarma).subscribe(data => {
        this.toastr.info('El arma fue editada con exito', 'EDITADA');
        this.router.navigate(['/listar-arma'])
      })
    }
  }

  editarArma(){
    if(this._codArma !== null){
      this.titulo="EDITAR ACCESORIO";
      this._armaService.obtengoArma(this._codArma).subscribe(data=>{
        console.log(data);
        console.log(this._codArma)
        this.armaForms.patchValue({
          _codArma: data[0]._codArma ,
          _nombreArma: data[0]._nombreArma ,
          _fechaProduccion: data[0]._fechaProduccion ,
          _precioBase: data[0]._precioBase,
          _disparoAutomatico: data[0]._disparoAutomatico,
          _categoriaArma: data[0]._categoriaArma,
          _animaRayada: data[0]._animaRayada,
          _calibre: data[0]._calibre,
          
        })
        
      })
    }
  }
}
