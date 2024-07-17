import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 tasks = signal([
  "Ir a la plaza hacer mercado",
  "Ir a la cita medica",
  "Visitar a la familia"
 ])
}
