import { Component, signal, computed, effect, inject, Inject, Injector } from '@angular/core';
import { CommonModule } from '@angular/common' //Agregarlo para versiones recientes para usar las directivas de control antiguas como el *ngFor
import { Task } from '../../models/task.model';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms'; //Implementar formularios reactivos

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tasks = signal<Task[]>([]);

  text = new FormControl("", {
    nonNullable: true,
    validators: [
      Validators.required
    ]
  });

  filter = signal<'All' | 'Pending' | 'Completed'>("All")

  injector = inject(Injector);

  ngOnInit() {
    const storage = localStorage.getItem("tasks");
    if (storage) {
      const tasks = JSON.parse(storage);
      this.tasks.set(tasks);
    }
    this.trackTasks();
  }

  trackTasks() {
    effect(() => {
      const tasks = this.tasks();
      localStorage.setItem("tasks", JSON.stringify(tasks));

    }, { injector: this.injector })
  }

  filterTask = computed(() => {
    const filter = this.filter();
    const tasks = this.tasks();

    if (filter == 'Pending') {
      return tasks.filter((task) => !task.completed)
    }
    if (filter == 'Completed') {
      return tasks.filter((task) => task.completed)
    }
    return tasks
  })

  addHandlerItem() {
    const newValue = this.text.value;
    if (this.text.valid && newValue.trim() != "") {
      const newItem = {
        id: Date.now(),
        title: newValue,
        completed: false
      };
      this.tasks.update((tasks) => [...tasks, newItem]); // Se crea un nuevo estado para seguir el patron de no mutar se agrega al final de la lista este nuevo elemento
      this.text.setValue("")
    }
  }
  deleteTask(index: number) {
    this.tasks.update((tasks) => tasks.filter((task, pos) => pos !== index))
  }

  updateTask(index: number) {
    this.tasks.update((tasks) => {
      return tasks.map((task, pos) => {
        if (pos === index) {
          return {
            ...task,
            completed: !task.completed
          }
        }
        return task;
      })
    })
  }

  updateTaskEditingHtML(index: number) {
    this.tasks.update(prevState => prevState.map((task, pos) => {
      if (pos === index) {
        return {
          ...task,
          editing: true
        }
      } else {
        return task
      }
    }))
  }

  updateTaskEditingInput(index: number, event: Event) {
    const input = event.target as HTMLInputElement;
    console.log(input.value)
    this.tasks.update(prevState => prevState.map((task, pos) => {
      if (pos === index) {
        return {
          ...task,
          title: input.value,
          editing: false
        }
      } else {
        return task
      }
    }))
  }

  changeFilter(filter: 'All' | 'Pending' | 'Completed') {
    this.filter.set(filter);
  }
}
