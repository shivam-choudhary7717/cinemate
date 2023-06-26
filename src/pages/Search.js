import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Card } from "../components";
import { useTitle } from "../hooks/useTitle";

export const Search = ({ apiPath }) => {
    const [searchParams] = useSearchParams();
    const queryTerm = searchParams.get("q");

    const { data: movies } = useFetch(apiPath, queryTerm);
    useTitle(`Search result for ${queryTerm}`);

    return (
        <main>
            <section>
                <p className="text-4xl text-gray-700 dark:text-white">{movies.length === 0 ? `No result found for '${queryTerm.toUpperCase()}'` : `Result for '${queryTerm.toUpperCase()}'`}</p>
            </section>
            <section className="max-w-7xl mx-auto py-7">
                <div className="flex justify-start flex-wrap">
                    {movies.map((movie) => (
                        <Card key={movie.id} movie={movie} />
                    ))}

                </div>
            </section>
        </main>
    );
}
