import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from 'src/app/Service/quiz.service';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent {

  quizTitle: string = '';
  quizCategory: string = '';
  numQuestions: number = 0;

  constructor(private quizService: QuizService ,private router:Router) { }

  createQuiz() {
    if(this.quizTitle==null||this.quizTitle==''){
      console.log("Invalid data!! quiz title can't be empty or null");
      return;
  }

    if(this.quizCategory==null||this.quizCategory==''){
      console.log("Invalid data!! quiz title can't be empty or null");
      return;
  }
  if(this.numQuestions==null||this.numQuestions== 0){
    console.log("Invalid data!! quiz title can't be empty or null");
    return;
}
  if (this.quizTitle && this.quizCategory && this.numQuestions > 0) {
      this.quizService.createQuiz(this.quizCategory, this.numQuestions, this.quizTitle).subscribe(
        response => {
          console.log('Quiz created successfully:', response);
          this.router.navigate(['/list-quiz']);

        },
        error => {
          console.error('Error creating quiz:', error);
        }
      );
    } 
  }
}
