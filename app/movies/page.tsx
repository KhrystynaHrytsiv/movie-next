import Movies from "@/src/components/movies/Movies";
interface IProp {
    searchParams: Promise<{ page?: string;
    query:string}>;
}
const MoviesPage = async ({searchParams}:IProp) => {
    const params = await searchParams;
    const page = Number(params?.page ?? 1);
    const query= params?.query ?? '';

    return (
        <div>
            <Movies page={page} query={query}/>
        </div>
    );
};

export default MoviesPage;