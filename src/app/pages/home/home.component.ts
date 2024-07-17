import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common' //Agregarlo para versiones recientes para usar las directivas de control antiguas como el *ngFor

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
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
