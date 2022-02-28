import { useEffect, useState } from 'react';
import * as movieService from './MovieServices';
import { CardMovies } from './CardMovies';
import { Movie } from '../interface/MovieInterface';
import Category from './Category';

export const Movies = () => {

  const [movie, setMovies] = useState<Movie[]>([]);

  const loadMovies = async () => {
    const res = await movieService.getMovies()
    const {data:{movies}} = res;
    setMovies(movies)
  }

  useEffect(() => {
    loadMovies()
  }, [])

  return (
    <div className="container">
        <Category category="Best Actor" />
        <div className="row">
          {movie.filter(movie => movie.category === "Best Actor").map((filterCategory, index) => (
            <CardMovies movie={filterCategory} key={filterCategory.id} />
          ))}
        </div>
        <Category category="Best Actress" />
        <div className="row">
          {movie.filter(movie => movie.category === "Best Actress").map((filterCategory, index) => (
            <CardMovies movie={filterCategory} key={filterCategory.id} />
          ))}
        </div>
        <Category category="Best Supporting Actor" />
        <div className="row">
          {movie.filter(movie => movie.category === "Best Supporting Actor").map((filterCategory, index) => (
            <CardMovies movie={filterCategory} key={filterCategory.id} />
          ))}
        </div>
        <Category category="Best Supporting Actress" />
        <div className="row">
          {movie.filter(movie => movie.category === "Best Supporting Actress").map((filterCategory, index) => (
            <CardMovies movie={filterCategory} key={filterCategory.id} />
          ))}
        </div>
        <Category category="Best Picture" />
        <div className="row">
          {movie.filter(movie => movie.category === "Best Picture").map((filterCategory, index) => (
            <CardMovies movie={filterCategory} key={filterCategory.id} />
          ))}
        </div>
        <Category category="Best Director" />
        <div className="row">
          {movie.filter(movie => movie.category === "Best Director").map((filterCategory, index) => (
            <CardMovies movie={filterCategory} key={filterCategory.id} />
          ))}
        </div>
        <Category category="Best Visual Effects" />
        <div className="row">
          {movie.filter(movie => movie.category === "Best Visual Effects").map((filterCategory, index) => (
            <CardMovies movie={filterCategory} key={filterCategory.id} />
          ))}
        </div>
    </div>
    
  )
}

export default Movies