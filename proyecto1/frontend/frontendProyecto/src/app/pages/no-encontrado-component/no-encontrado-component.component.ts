import { Component } from '@angular/core';
import { NavegacionComponent } from '../../components/navegacion/navegacion.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-no-encontrado-component',
  standalone: true,
  imports: [NavegacionComponent, FooterComponent, RouterLink],
  templateUrl: './no-encontrado-component.component.html',
  styleUrl: './no-encontrado-component.component.css'
})
export class NoEncontradoComponentComponent {

}
