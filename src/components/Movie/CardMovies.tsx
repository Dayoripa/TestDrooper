import { Movie } from "../interface/MovieInterface";
import '../Movie/Card.css';

interface Props {
    movie: Movie
}

export const CardMovies = ({ movie }: Props) => {
    console.log(movie)
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-2 d-flex justify-content-center mb-3">
            <div className="card card-borde shadow" style={{width:"16rem"}}>
                <img src={movie.photoUrL} className="border-image card-img-top" alt={movie.id} />
                <div className="card-title text-center mt-3 fw-bold">
                 {movie.title}
                </div>
                <div className="card-body text-center">
                <button type="button" className="btn btn-primary buttom" style={{width:"10rem"}}>To Vote</button>
                </div>
            </div>
        </div>
    )
}