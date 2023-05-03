import ReviewForm from './ReviewForm';



const Movie = (props) => {
  return (
    <div className="movie-container">
      <h2>{props.title}</h2>
      <p>{props.synopsis}</p>
      <ReviewForm />
    </div>
  );
};

export default Movie;