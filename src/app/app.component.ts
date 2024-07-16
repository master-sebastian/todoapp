import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common' //Agregarlo para versiones recientes para usar las directivas de control antiguas como el *ngFor

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule], //no olvidar incluir el CommonModule en el arreglo de imports
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = ' Estamos probando';
  programmingLanguages = [
    "Java",
    "Python",
    "PHP",
    "Javascript"
  ];
}
