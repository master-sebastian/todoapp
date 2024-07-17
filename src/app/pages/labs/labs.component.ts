import { Component } from '@angular/core';
import { CommonModule } from '@angular/common' //Agregarlo para versiones recientes para usar las directivas de control antiguas como el *ngFor

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  title = ' Estamos probando';
  programmingLanguages = [
    "Java",
    "Python",
    "PHP",
    "Javascript"
  ];

  nameCourse = "";

  private ID = 31233; //Propiedades privadas solo accesibles desde la clase

  viewNameCourse(){
    alert(this.nameCourse);
  }
  
  viewNameCoursex2(){
    alert(this.nameCourse.repeat(2));
  }

  changeHandlerNameCourse(event: Event){
    const input = event.target as HTMLInputElement;
    this.nameCourse = input.value;
  }
}
