// quiz-attempt.model.ts
export class QuizAttempt {
    id: number;
    user_id: any; 
    quiz_id: any; 
    score: number;
  
  
    constructor(id: number, user_id: any, quiz_id: any, score: number) {
      this.id = id;
      this.user_id = user_id;
      this.quiz_id = quiz_id;
      this.score = score;
    }
  }
  