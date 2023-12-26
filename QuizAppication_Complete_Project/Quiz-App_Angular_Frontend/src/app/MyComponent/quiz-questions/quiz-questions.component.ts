import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from 'src/app/Model/question';
import { QuizService } from 'src/app/Service/quiz.service';

@Component({
  selector: 'app-quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.css']
})
export class QuizQuestionsComponent implements OnInit {
  quizId: number | undefined;
  questions: Question[] = [];

  constructor(private route: ActivatedRoute, private quizService: QuizService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.quizId = +params['id'];
      this.loadQuizQuestions();
    });
  }

  loadQuizQuestions() {
    if (this.quizId) {
      this.quizService.getQuizQuestions(this.quizId).subscribe(
        (data: Question[]) => {
          this.questions = data;
        },
        (error: any) => {
          console.log('Error fetching quiz questions', error);
        }
      );
    }
  }
  }

