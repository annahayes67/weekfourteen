import MovieList from "./MovieList";
import Movie from "./Movie";
import ReviewForm from "./ReviewForm";
import Review from "./ReviewList";
import Stars from "./Stars";

import React from 'react'

function combined() {
  return (
    <div>
    <MovieList />
    <ReviewForm />
    <Review />
    <stars />
    <Movie />
    </div>
    

  )
}

export default combined