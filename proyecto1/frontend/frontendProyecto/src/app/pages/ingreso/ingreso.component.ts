import { Component } from '@angular/core';
import { NavegacionComponent } from '../../components/navegacion/navegacion.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-ingreso',
  standalone: true,
  imports: [NavegacionComponent, FooterComponent],
  templateUrl: './ingreso.component.html',
  styleUrl: './ingreso.component.css'
})
export class IngresoComponent {

}
