import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import backup from "../assets/images/backup.jpeg";
import { RatingStar } from "../components";
import { useTitle } from "../hooks/useTitle";

export const MovieDetail = () => {
    const params = useParams();
    const [movie, setMovie] = useState({});
    const image = movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : backup;
    useTitle(movie.title);

    useEffect(() => {
        async function fetchMovie() {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_API_kEY}`);
            const json = await response.json();
            setMovie(json);
        }
        fetchMovie();
    }, [params.id]);


    return (
        <main>
            <section className="flex justify-around flex-wrap py-5">
                <div className="max-w-sm">
                    <img src={image} alt={movie.title} />
                </div>
                <div className="max-w-2xl text-gray-700 text-lg dark:text-white">
                    <h1 className="text-4xl font-bold my-3 text-center lg:text-left">{movie.title}</h1>
                    <p className="my-4">{movie.overview}</p>
                    <div className="flex flex-wrap">
                        <p className="my-7 ml-5 flex flex-wrap gap-2">
                            {movie.genres && movie.genres.map((genre) => (
                                <span key={genre.id} className="p-1 mr-2 border-2 border-slate-400 rounded dark:border-stone-400">{genre.name}</span>
                            ))}
                        </p>
                        <RatingStar average={movie.vote_average} review={movie.vote_count} />
                    </div>

                    <div className="flex items-start flex-col ml-5">
                        <p className="my-4">
                            <span className="mr-2 font-extrabold dark:text-zinc-800">Runtime: </span>
                            <span>{movie.runtime} min.</span>
                        </p>
                        <p className="my-4">
                            <span className="mr-2 font-extrabold dark:text-zinc-800">Budget: </span>
                            <span >{movie.budget}</span>
                        </p>
                        <p className="my-4">
                            <span className="mr-2 font-extrabold dark:text-zinc-800">Revenue: </span>
                            <span>{movie.revenue}</span>
                        </p>
                        <p className="my-4">
                            <span className="mr-2 font-extrabold dark:text-zinc-800">Release Date: </span>
                            <span>{movie.release_date}</span>
                        </p>
                    </div>
                </div>
                {/* <p className="my-4">
                    <span className="mr-2 font-bold">Runtime: </span>
                    <span>{movie.runtime}</span>
                </p> */}
            </section>
        </main>
    );
}
