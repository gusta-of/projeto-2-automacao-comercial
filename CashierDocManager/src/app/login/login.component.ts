import { Component, OnInit } from '@angular/core';
import { LoginService } from '../data-access/rest/login/login.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Operador } from '../data-access/model/Index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  /** Representa o formulário na template */
  _form: FormGroup;

  _operador: Operador;

  constructor(_fb: FormBuilder,
    public _service: LoginService) {
    this._form = _fb.group({
      username: [null],
      password: [null]
    });
  }

  ngOnInit() {
  }

  _autentique() {
    this._service.login(this._form.value.username, this._form.value.password)
      .subscribe((op: Operador) => {
        console.log(op);
      });
  }
}
