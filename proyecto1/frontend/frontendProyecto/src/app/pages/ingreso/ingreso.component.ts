import { Component } from '@angular/core';
import { NavegacionComponent } from '../../components/navegacion/navegacion.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ingreso',
  standalone: true,
  imports: [NavegacionComponent, FooterComponent, RouterLink],
  templateUrl: './ingreso.component.html',
  styleUrl: './ingreso.component.css'
})
export class IngresoComponent {

}
