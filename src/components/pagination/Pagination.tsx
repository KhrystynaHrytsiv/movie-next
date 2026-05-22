import Link from "next/link";

interface IProp{
    currentPage:number,
    totalPages:number,
    query:string
}
const Pagination = ({currentPage, totalPages, query}:IProp) => {

    return (
        <div className="w-full flex justify-center items-center gap-4 my-4 text-2xl ">
            {currentPage > 1 && (<Link href={`/movies?query=${query}&page=${currentPage - 1}`}>Previous</Link>)}
            <span>{currentPage} / {totalPages}</span>
            {currentPage < totalPages && (<Link href={`/movies?query=${query}&page=${currentPage + 1}`}>Next</Link>)}
        </div>
    );
}

export default Pagination;