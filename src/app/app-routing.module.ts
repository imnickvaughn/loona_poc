import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'books',
    loadChildren: './books/books.module#BooksModule',
  },
  {
    path: 'notes',
    loadChildren: './notes/notes.module#NotesModule',
  },
  {
    path: 'movies',
    loadChildren: './movies/movies.module#MoviesModule',
  },
  {
    path: 'shows',
    loadChildren: './shows/shows.module#ShowsModule',
  },
  {
    path: 'documentaries',
    loadChildren: './documentaries/documentaries.module#DocumentariesModule',
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'books',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }