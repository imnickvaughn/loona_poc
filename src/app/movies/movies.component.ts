import { Component, OnInit } from '@angular/core';
import { Loona } from '@loona/angular';
import { Observable } from 'rxjs';
import { pluck, map } from 'rxjs/operators';

import { AddMovie, allMovies } from './movies.state';

@Component({
  selector: 'app-movies',
  template: `
    <submit-form label="Title" (value)="onMovie($event)"></submit-form>
    <list title="List of movies" [list]="movies | async"></list>
  `,
})
export class MoviesComponent implements OnInit {
  movies: Observable<any[]>;
  loading: boolean;

  constructor(private loona: Loona) { }

  ngOnInit() {
    this.movies = this.loona.query(allMovies).valueChanges.pipe(
      pluck('data', 'movies'),
      map((movies: any) => {
        if (movies) {
          return movies.map(movie => ({
            title: movie.title,
            subtitle: `ID:${movie.id}`,
          }));
        }

        return movies;
      }),
    );
  }

  onMovie(title: string) {
    this.loona
      .mutate(AddMovie.mutation, {
        title,
      })
      .subscribe();
  }
}