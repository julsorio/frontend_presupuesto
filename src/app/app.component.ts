import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { PiePaginaComponent } from './components/pie-pagina/pie-pagina.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EncabezadoComponent, PiePaginaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'presupuesto';
}
