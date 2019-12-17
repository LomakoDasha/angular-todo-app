import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatInputModule, MatButtonModule, MatCardModule, MatProgressSpinnerModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ListComponent } from './components/list/list.component';
import { ListItemComponent } from './components/list/list-item/list-item.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SubListComponent } from './components/list/sub-list/sub-list.component';
import { TaskPageComponent } from './pages/task-page/task-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import * as fromList from './reducers/list.reducer';
import { ListEffects } from './effects/list.effects';
import { ItemFormComponent } from './components/item-form/item-form.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ListComponent,
    ListItemComponent,
    FilterPipe,
    SubListComponent,
    TaskPageComponent,
    EditPageComponent,
    ItemFormComponent,
    CreatePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    FormsModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('tasks', fromList.reducer),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([ListEffects]),
    StoreDevtoolsModule.instrument(),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
