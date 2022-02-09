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
  _codArma: any;
  titulo = 'CREAR ACCESORIO';
  constructor(private vb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _accesorioService: AccesorioService,
    private aRouter: ActivatedRoute,
  ) {
    this.accesorioForms = this.vb.group({
      _codArma: ['', Validators.required],
      _nombre: ['', Validators.required],
      _tipoAccesorio: ['', Validators.required],
      _precio: ['', Validators.required],
    })
    this._codArma = this.aRouter.snapshot.paramMap.get('_codArma');
  }

  ngOnInit(): void {
    this.editarAccesorio();
  }
  agregarVehiculo() {
    console.log(this.accesorioForms);
    const Creoaccesorio: any = {
      _codArma: this.accesorioForms.get('_codArma')?.value,
      _nombre: this.accesorioForms.get('_nombre')?.value,
      _tipoAccesorio: this.accesorioForms.get('_tipoAccesorio')?.value,
      _precio: this.accesorioForms.get('_precio')?.value
    }
    if (this._codArma == null) {
      //creo un tirador nuevo
      console.log(Creoaccesorio);
      this._accesorioService.creoAccesorio(Creoaccesorio).subscribe(data => {
        this.toastr.success('El accesorio fue creado con exito', 'CREADO');
        this.router.navigate(['/listar-accesorio'])
      })
    } else {
      //edito un tirador
      this._accesorioService.editoAccesorio(this._codArma, Creoaccesorio).subscribe(data => {
        this.toastr.info('El accesorio fue editado con exito', 'EDITADO');
        this.router.navigate(['/listar-accesorio'])
      })
    }
  }

  editarAccesorio(){
    if(this._codArma !== null){
      this.titulo="EDITAR ACCESORIO";
      this._accesorioService.obtengoAccesorio(this._codArma).subscribe(data=>{
        console.log(data);
        console.log(this._codArma)
        this.accesorioForms.patchValue({
          _codArma: data[0]._codArma ,
          _nombre: data[0]._nombre ,
          _tipoAccesorio: data[0]._tipoAccesorio ,
          _precio: data[0]._precio,
        })
        
      })
    }
  }
}
