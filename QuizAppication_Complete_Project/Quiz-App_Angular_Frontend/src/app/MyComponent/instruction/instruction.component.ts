import { Component } from '@angular/core';
import { Quiz } from 'src/app/Model/Quiz';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.css']
})
export class InstructionComponent {
  quiz: Quiz = {
    id: 1, // Replace with the actual ID
    title: 'Sample Quiz', // Replace with the actual title
    questions: [],
    numberOfQuestions: undefined,
    description: undefined
  };
  startQuiz() {
    // Implementation of startQuiz method
    console.log('Quiz started!');
  }
}
