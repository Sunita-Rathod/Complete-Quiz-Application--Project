package com.qna.app.dao;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.qna.app.model.Quiz;



public interface QuizDao extends JpaRepository<Quiz,Integer> {
	
    List<Quiz> findAll();

}
