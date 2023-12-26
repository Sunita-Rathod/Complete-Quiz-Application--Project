import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Quiz } from 'src/app/Model/Quiz';
import { QuizService } from 'src/app/Service/quiz.service';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css']
})
export class StartQuizComponent implements OnInit {
  
  quiz: Quiz | undefined;

  // Inject Router in the constructor
  constructor(private route: ActivatedRoute, private quizService: QuizService, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const quizId = +params['id'];
      if (quizId) {
        this.loadQuizDetails(quizId);
      }
    });
  }

  loadQuizDetails(quizId: number) {
    this.quizService.getQuizQuestions(quizId).subscribe(
      (data: any) => {
        this.quiz = data;
        console.log("quizId:",quizId);
        console.log("quiztitle:",Title);
      },
      (error: any) => {
        console.log('Error fetching quiz details', error);
      }
    );
  }

  startQuiz() {
    if (this.quiz) {
      console.log('Start Quiz for ID:', this.quiz.id);
      alert('Start Quiz');
      // Add your logic to start the quiz (e.g., navigate to quiz questions page)
      this.router.navigate(['/quiz-questions', this.quiz.id]);
      console.log("quizId:",Quiz);

    }
  }
 
}