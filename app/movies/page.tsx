import Movies from "@/src/components/movies/Movies";
import Filters from "@/src/components/filter/Filters";

interface IProp {
    searchParams: Promise<{
        page?: string;
        query?:string;
        genre?:string;
        year?:string;
        rating?:string;
    }>;
}
const MoviesPage = async ({searchParams}:IProp) => {
    const params = await searchParams;
    const page = Number(params?.page ?? 1);
    const query= params?.query ?? '';
    const genre = params.genre ?? '';
    const year = params.year ?? '';
    const rating = params.rating ?? '';


    return (
        <div>
            <Filters currentGenre={genre} currentYear={year} currentRating={rating} />
            <Movies page={page} query={query} genre={genre} year={year} rating={rating}/>
        </div>
    );
};

export default MoviesPage;