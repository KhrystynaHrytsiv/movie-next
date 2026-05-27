import Link from "next/link";

interface IProp{
    currentPage:number,
    totalPages:number,
    query?:string,
    genre?:string,
    year?:string,
    rating?:string
}
const Pagination = ({currentPage,  query,  totalPages, genre, year, rating}:IProp) => {

    const createPageLink = (page: number) => {
        const params = new URLSearchParams();
        if (query) params.set("query", query);
        if(genre) params.set('genre', genre)
        if(year) params.set('year', year)
        if(rating) params.set('rating', rating)

        params.set("page", page.toString());
        return `/movies?${params.toString()}`;
    };

    return (
        <div className="w-full flex justify-center items-center gap-4 my-4 text-2xl">
            {currentPage > 1 && (<Link href={createPageLink(currentPage - 1)}>Previous</Link>)}
            <span>{currentPage} / {totalPages}</span>
            {currentPage < totalPages && (<Link href={createPageLink(currentPage + 1)}>Next</Link>)}
        </div>
    );
};

export default Pagination;