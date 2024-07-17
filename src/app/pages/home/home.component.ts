import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common' //Agregarlo para versiones recientes para usar las directivas de control antiguas como el *ngFor
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 tasks = signal<Task[]>([
  {
    id: Date.now(),
    title: "Ir a la plaza hacer mercado",
    completed: false  
  },
  {
    id: Date.now(),
    title: "Ir a la cita medica",
    completed: false  
  },
  {
    id: Date.now(),
    title: "Visitar a la familia",
    completed: false  
  }
 ]);

 text = signal("");

 addHandlerItem(event: Event){
  const input = event.target as HTMLInputElement;
  const newValue = input.value;
  if(newValue != ""){
    const newItem = {
      id: Date.now(),
      title: newValue,
      completed: false
    };
    this.tasks.update((tasks)=>[...tasks, newItem]); // Se crea un nuevo estado para seguir el patron de no mutar se agrega al final de la lista este nuevo elemento
    input.value = ""
    this.text.set(newValue)
  }
}
  deleteTask(index: number){
    this.tasks.update((tasks) => tasks.filter((task, pos) => pos !== index))
  }
}
