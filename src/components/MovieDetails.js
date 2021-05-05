import { useParams } from 'react-router-dom'

const MovieDetails = () => {
	const params = useParams()

	const id = params.movieId

	return (
		<div style={{ height: '100vh'}}>
			<h1>Movie Details Page:</h1>
			<p>{id}</p>			
				
				
		</div>
	)
}

export default MovieDetails
