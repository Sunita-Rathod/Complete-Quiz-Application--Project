package com.qna.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.qna.app.model.QuestionWrapper;
import com.qna.app.model.Quiz;
import com.qna.app.model.Response;
import com.qna.app.service.QuizService;

import java.util.List;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("quiz")
public class QuizController {

    @Autowired
    QuizService quizService;
 
    @PostMapping("/create")
    public ResponseEntity<String> createQuiz(@RequestParam String category, @RequestParam int numQ, @RequestParam String title){
        return quizService.createQuiz(category, numQ, title);
    }
    @GetMapping("/allquiz")
	public ResponseEntity<List<Quiz>> getAllQuiz() {
	    List<Quiz> quizzes = quizService.getAllQuiz();
	    return new ResponseEntity<>(quizzes, HttpStatus.OK);
	}
    
    @GetMapping("/getbyid/{id}")
    public ResponseEntity<List<QuestionWrapper>> getQuizQuestions(@PathVariable int id){
        return quizService.getQuizQuestions(id);
    }

    @PostMapping("/submit/{id}")
    public  int submitQuiz(@PathVariable int id, @RequestBody List<Response> responses){
        return quizService.calculateResult(id, responses);
    }
}