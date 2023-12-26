import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private apiUrl = 'http://localhost:8080/quiz'; // Update with your backend API URL

  constructor(private http: HttpClient) { }

  getAllQuizzes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/allquiz`);
  }

  createQuiz(category: string, numQ: number, title: string): Observable<any> {
    const quizData = { category, numQ, title };
    console.log(quizData);
    return this.http.post<any>(`${this.apiUrl}/create`, quizData).pipe(
      catchError((error) => {
        console.error('Error creating quiz:', error);
        throw error; 
      })
    ); 
   }

  // getQuizById(id: number): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}/getbyid/${id}`);
  // }

  submitQuiz(id: number, responses: any[]): Observable<number> {
    return this.http.post<number>(`${this.apiUrl}/submit/${id}`, responses).pipe(
      catchError((error) => {
        console.error('Error submitting quiz:', error);
        throw error; // Rethrow the error to propagate it to the component
      })
    ); 
   }

   getQuizQuestions(quizId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getbyid/${quizId}`);
  }
}
