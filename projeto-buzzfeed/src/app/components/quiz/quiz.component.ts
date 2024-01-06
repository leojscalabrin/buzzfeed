import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})

export class QuizComponent {
  title:string = ""

  questions:any
  questionSelected:any

  constructor () {

  }

  ngOnInit(): void {

  }
}
