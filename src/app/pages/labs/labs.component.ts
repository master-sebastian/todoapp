import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common' //Agregarlo para versiones recientes para usar las directivas de control antiguas como el *ngFor
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {

  contador = signal(0);

  title = ' Estamos probando';
  programmingLanguages = [
    "Java",
    "Python",
    "PHP",
    "Javascript"
  ];

  nameCourse = "";

  colorControl = new FormControl("#000000");
  anchoControl = new FormControl("10", {
    validators: [
      Validators.required,
      //Validators.minLength(2),
      Validators.min(10),
    ]
  });

  private ID = 31233; //Propiedades privadas solo accesibles desde la clase

  viewNameCourse(){
    alert(this.nameCourse);
  }

  changeHandlerCounter(event: Event){
    const input = event.target as HTMLInputElement;
    const newValue = parseInt(input.value);
    this.contador.set(newValue); //Mas esficiente usar signal
  }
  
  viewNameCoursex2(){
    alert(this.nameCourse.repeat(2));
  }

  changeHandlerNameCourse(event: Event){
    const input = event.target as HTMLInputElement;
    this.nameCourse = input.value;
  }
}
