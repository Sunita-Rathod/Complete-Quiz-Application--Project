import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUserComponent } from './MyComponent/list-user/list-user.component';
import { HomeComponent } from './MyComponent/home/home.component';
import { FooterComponent } from './MyComponent/footer/footer.component';
import { NavbarComponent } from './MyComponent/navbar/navbar.component';
import { UserService } from './Service/user.service';
import { DeleteUserComponent } from './MyComponent/delete-user/delete-user.component';
import { UpdateUserComponent } from './MyComponent/update-user/update-user.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CreateUserComponent } from './MyComponent/create-user/create-user.component';
import { UpdateQuestionComponent } from './MyComponent/update-question/update-question.component';
import { ListQuestionComponent } from './MyComponent/list-question/list-question.component';
import { AddQuestionComponent } from './MyComponent/add-question/add-question.component';
import { ListQuizComponent } from './MyComponent/list-quiz/list-quiz.component';
import { CreateQuizComponent } from './MyComponent/create-quiz/create-quiz.component';
import { QuizAttemptComponent } from './MyComponent/quiz-attempt/quiz-attempt.component';
import { LoginComponent } from './auth/login/login.component';
import { UserDashboardComponent } from './MyComponent/user-dashboard/user-dashboard.component';
import { SignUpComponent } from './auth/sign-up/singup.component';
import { AdminNavbarComponent } from './MyComponent/admin-navbar/admin-navbar.component';
import { UserNavbarComponent } from './MyComponent/user-navbar/user-navbar.component';
import { AdminDashboardComponent } from './MyComponent/admin-dashboard/admin-dashboard.component';
import { ContactUsComponent } from './MyComponent/contact-us/contact-us.component';
import { AboutUsComponent } from './MyComponent/about-us/about-us.component';
import { InstructionComponent } from './MyComponent/instruction/instruction.component';
import { StartQuizComponent } from './MyComponent/start-quiz/start-quiz.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';

import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    UpdateUserComponent,
    DeleteUserComponent,
    CreateUserComponent,
    UpdateQuestionComponent,
    UpdateQuestionComponent,
    ListQuestionComponent,
    AddQuestionComponent,
    ListQuizComponent,
    CreateQuizComponent,
    QuizAttemptComponent,
    LoginComponent,
    SignUpComponent ,
    UserDashboardComponent,
    AdminNavbarComponent,
    UserNavbarComponent ,
    AdminDashboardComponent,
    ContactUsComponent,
    AboutUsComponent,
    InstructionComponent,
    StartQuizComponent,
    
],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    HttpClientModule ,
    FormsModule ,
    RouterModule ,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDividerModule,


  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
