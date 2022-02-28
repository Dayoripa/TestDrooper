import axios from "axios"

export const getMovies = async () => {
    return await axios.get("http://localhost:8080/api/movies")
}