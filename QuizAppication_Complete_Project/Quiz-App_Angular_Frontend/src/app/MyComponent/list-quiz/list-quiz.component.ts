import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from 'src/app/Service/quiz.service';

@Component({
  selector: 'app-list-quiz',
  templateUrl: './list-quiz.component.html',
  styleUrls: ['./list-quiz.component.css']
})
export class ListQuizComponent {

  quizzes: any[] = [];

  constructor(private quizService: QuizService, private router: Router) {}

  ngOnInit(): void {
    this.loadQuizzes();
  }

  loadQuizzes() {
    this.quizService.getAllQuizzes().subscribe(
      (data: any[]) => {
        this.quizzes = data;
      },
      error => {
        console.log('Error fetching quizzes', error);
      }
    );
  }

  MoveToInstructionPage(quizId: number) {
    return this.router.navigate(['/instruction', quizId]);
  }
}
