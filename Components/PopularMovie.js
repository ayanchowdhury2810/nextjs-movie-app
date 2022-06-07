import MovieCard from './MovieCard';

function PopularMovie({ movies }) {
  return (
    <div className="container px-4 pb-10 mx-auto max-w-7xl gradient">
      <h1 className="mt-8 mb-5 text-2xl text-white"> Popular</h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default PopularMovie;
