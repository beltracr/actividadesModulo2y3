import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AdminComponent} from "./pages/admin/admin.component";
import {IngresoComponent} from "./pages/ingreso/ingreso.component";
import {InicioComponent} from "./pages/inicio/inicio.component";
import {ProductosComponent} from "./pages/productos/productos.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AdminComponent, IngresoComponent,InicioComponent, ProductosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
