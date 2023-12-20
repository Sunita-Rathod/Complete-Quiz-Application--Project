package com.qna.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.qna.app.model.Question;
import com.qna.app.model.Quiz;
import com.qna.app.service.QuestionService;

import java.util.List;
@CrossOrigin(origins="http://localhost:4200")

@RestController
@RequestMapping("question")
public class QuestionController {

	@Autowired
	QuestionService questionService;
	
	@GetMapping("/allquestions")
	public List<Question> getAllQuestions() {
		
		return questionService.getAllQuestions();
		
	}

	  @GetMapping("bycategory/{category}")
	  public List<Question> getQuestionsByCategory(@PathVariable String category)
	  { 
		  return (List<Question>) questionService.questionsByCategory(category);
	  }
	  
		
		@PostMapping("/add") // Create a new question
		public ResponseEntity<String> addQuestion(@RequestBody Question question)
		  { return questionService.addQuestion(question); }

		
		@PutMapping("/update/{id}") // Update a question by ID 
		public ResponseEntity<String> updateQuestion(@PathVariable int id, @RequestBody Question question) {
			return  questionService.updateQuestion(id, question);
		}

		@DeleteMapping("/delete/{id}") // Delete a question by ID 
		public ResponseEntity<String> deleteQuestion(@PathVariable int id) {
			return questionService.deleteQuestion(id);
		}
		
		
		@GetMapping("/getbyid/{id}")
		public ResponseEntity<Question> getQuestionById(@PathVariable int id) {
		    Question question = questionService.getQuestionById(id);
		    if (question != null) {
		        return new ResponseEntity<>(question, HttpStatus.OK);
		    } else {
		        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		    }
		}

		


	}
