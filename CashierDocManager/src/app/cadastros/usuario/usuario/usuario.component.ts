import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import {
  UsuarioComponentService,
} from './usuario-component.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsuarioComponent {

  constructor(private _componentService: UsuarioComponentService) {}
}
