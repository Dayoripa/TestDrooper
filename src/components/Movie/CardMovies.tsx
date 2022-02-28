import { Movie } from "../interface/MovieInterface"

interface Props {
    movie: Movie
}

export const CardMovies = ({ movie }: Props) => {
    console.log(movie)
    return (
        <div className="col col-md3">
            <div className="card-header">Header</div>
            <div className="card" style={{ width: "18rem" }}>
                <img src={movie.photoUrL} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </p>
                </div>
            </div>
        </div>
    )
}