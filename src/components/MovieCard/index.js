import './index.css'

const MovieCard = (MovieData) =>{

    const transformedData = {
        adult: MovieData.MovieData.adult,
        backdropPath: MovieData.MovieData.backdrop_path,
        genreIds: MovieData.MovieData.genre_ids,
        id: MovieData.MovieData.id,
        originalLanguage: MovieData.MovieData.original_language,
        originalTitle: MovieData.MovieData.original_title,
        overview: MovieData.MovieData.overview,
        popularity: MovieData.MovieData.popularity,
        posterPath: MovieData.MovieData.poster_path,
        releaseDate: MovieData.MovieData.release_date,
        title: MovieData.MovieData.title,
        video: MovieData.MovieData.video,
        voteAverage: MovieData.MovieData.vote_average,
        voteCount: MovieData.MovieData.vote_count
      };

      const {posterPath, title, voteAverage} = transformedData
      // console.log(MovieData.MovieData.title)
      

      return (
        <div className="movie-card">
          <img src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt={title} className="movie-poster" />
          <div className="movie-info">
            <h2 className="movie-title">{title}</h2>
            <p className="movie-rating">Rating: {voteAverage}</p>
          </div>
        </div>
      );
    };
    
    export default MovieCard;