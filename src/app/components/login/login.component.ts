import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForms: FormGroup
  hide = true;
  
  usuarioB : string = ""
  passB : string = ""
  
  

  constructor(private vb: FormBuilder,
    private _loginService: LoginService,
    private __snackBar: MatSnackBar,
    private router: Router,
  ) {
    this.loginForms = this.vb.group({
      _usuario: ['', Validators.required],
      _pass: ['', Validators.required]
    })

  }
  ngOnInit(): void {
    this.ingresar()
    
  }

  ingresar() {
   
    let _codLogin = "1"
    
    
    

    this._loginService.obtengoLOGIN(_codLogin).subscribe((infoLogin: any) => {

      this.passB = infoLogin._pass
      this.usuarioB = infoLogin._usuario
      
    })
  }
 testIngresar() {
   
   let usuario = this.loginForms.get('_usuario')?.value
    let pass = this.loginForms.get('_pass')?.value
  if (this.usuarioB == usuario && this.passB == pass) {
    this.router.navigate(['/home'])
   
    
  }else {
    this.error()
  }
 }
  error() {
    this.__snackBar.open("Error usuario o contraseña invalidos"),{
      duration:5000
  }
    }
    
}