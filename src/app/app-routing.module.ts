import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookSearchComponent } from './book-search/book-search.component';
import { BookDetailsComponent } from './book-search/components/book-details/book-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/book-search', pathMatch: 'full' },
  { path: 'book-search', component: BookSearchComponent },
  { path: 'book-details/:id', component: BookDetailsComponent } // Define route for BookDetailsComponent with book ID parameter
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
