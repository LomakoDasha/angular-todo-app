import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskPageComponent } from './pages/task-page/task-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { EditLabelPageComponent } from './pages/edit-label-page/edit-label-page.component';


const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: TaskPageComponent },
  { path: 'new/:id', component: CreatePageComponent },
  { path: 'edit/:id', component: EditPageComponent },
  { path: 'editLabel/:id', component: EditLabelPageComponent },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
