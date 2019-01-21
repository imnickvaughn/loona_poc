import {
    State,
    Mutation,
    Context,
    Update,
    Effect,
    MutationAsAction,
  } from '@loona/angular';
  import { MatSnackBar } from '@angular/material/snack-bar';
  import gql from 'graphql-tag';

  import { generateID } from '../shared/utils';

  export class AddMovie {
    static mutation = gql`
      mutation addMovie($title: String!) @client {
        addMovie(title: $title)
      }
    `;

    constructor(
      public variables: {
        title: string;
      },
    ) { }
  }

  export const allMovies = gql`
    query allMovies @client {
      movies {
        id
        title
      }
    }
  `;

  @State({
    defaults: {
      movies: [
        {
          id: generateID(),
          title: 'Movie A',
          __typename: 'Movie',
        },
      ],
    },
  })
  export class MoviesState {
    constructor(private snackBar: MatSnackBar) { }

    @Mutation(AddMovie)
    addMovie({ title }) {
      return {
        id: generateID(),
        title,
        __typename: 'Movie',
      };
    }

    @Update(AddMovie)
    updateMovies(mutation, { patchQuery }: Context) {
      patchQuery(allMovies, data => {
        data.movies.push(mutation.result);
      });
    }

    @Effect(AddMovie)
    onMovie(action: MutationAsAction) {
      let message: string;
      if (action.ok) {
        message = `Movie '${action.options.variables.title}' added :)`;
      } else {
        message = `Adding movie failed :(`;
      }

      this.snackBar.open(message, 'Got it', {
        duration: 2000,
      });
    }
  }