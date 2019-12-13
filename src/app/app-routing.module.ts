import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskPageComponent } from './pages/task-page/task-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';


const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: TaskPageComponent },
  { path: 'edit/:id', component: EditPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
