import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './MyComponent/home/home.component';
import { ListUserComponent } from './MyComponent/list-user/list-user.component';
import { UpdateUserComponent } from './MyComponent/update-user/update-user.component';
import { DeleteUserComponent } from './MyComponent/delete-user/delete-user.component';
import { CreateUserComponent } from './MyComponent/create-user/create-user.component';
import { UpdateQuestionComponent } from './MyComponent/update-question/update-question.component';
import { ListQuestionComponent } from './MyComponent/list-question/list-question.component';
import { AddQuestionComponent } from './MyComponent/add-question/add-question.component';
import { ListQuizComponent } from './MyComponent/list-quiz/list-quiz.component';
import { CreateQuizComponent } from './MyComponent/create-quiz/create-quiz.component';
import { QuizAttemptComponent } from './MyComponent/quiz-attempt/quiz-attempt.component';
import { LoginComponent } from './auth/login/login.component';
import { AdminDashboardComponent } from './MyComponent/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './MyComponent/user-dashboard/user-dashboard.component';
import { SignUpComponent } from './auth/sign-up/singup.component';
import { ContactUsComponent } from './MyComponent/contact-us/contact-us.component';
import { AboutUsComponent } from './MyComponent/about-us/about-us.component';
import { InstructionComponent } from './MyComponent/instruction/instruction.component';
import { StartQuizComponent } from './MyComponent/start-quiz/start-quiz.component';

const routes: Routes = [
  {path:'' ,component:HomeComponent},


  {path:'login',component:LoginComponent},
  {path:'signup' ,component:SignUpComponent},
  {path:'admin-dashboard' ,component:AdminDashboardComponent},
  {path:'user-dashboard' ,component:UserDashboardComponent},
  {path:'list-user', component: ListUserComponent },
  {path:'list-question', component:ListQuestionComponent},
  { path: 'update-user/:id', component: UpdateUserComponent }, 
  {path :'delete-user/:id', component:DeleteUserComponent} ,
  {path:'create-user', component:CreateUserComponent},
  {path:'update-question', component:UpdateQuestionComponent},
  { path:'questions/:id/edit', component: UpdateQuestionComponent },
  {path:'add-question',component:AddQuestionComponent},
  {path: 'list-quiz', component:ListQuizComponent},
  {path:'create-quiz', component:CreateQuizComponent},
  {path:'quiz-attempt' , component:QuizAttemptComponent},
  {path:'contact-us', component:ContactUsComponent},
  {path:'about-us' ,component:AboutUsComponent},
  {path:'instruction' , component:InstructionComponent},
  {path:'start-quiz',component:StartQuizComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
