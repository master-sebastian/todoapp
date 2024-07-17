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
 ]);

 text = signal("");

 addHandlerItem(event: Event){
  const input = event.target as HTMLInputElement;
  const newValue = input.value;
  this.tasks.update((tasks)=>[...tasks, newValue]); // Se crea un nuevo estado para seguir el patron de no mutar se agrega al final de la lista este nuevo elemento
  input.value = ""
  this.text.set(newValue)
}
  deleteTask(index: number){
    this.tasks.update((tasks) => tasks.filter((task, pos) => pos !== index))
  }
}
