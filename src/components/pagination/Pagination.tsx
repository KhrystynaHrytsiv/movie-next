import Link from "next/link";
import {buildParams} from "@/src/helper/buildEndpoint";

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
        const params = buildParams({query, genre, year, rating, page})
        return `/movies?${params.toString()}`
    };

    return (
        <div className="w-full flex justify-center items-center gap-4 my-4 text-2xl">
            {currentPage > 1 && (<Link href={createPageLink(currentPage - 1)} className='px-5 py-2 rounded-full bg-gray-700/30'>Previous</Link>)}
            <span>{currentPage} / {totalPages}</span>
            {currentPage < totalPages && (<Link href={createPageLink(currentPage + 1)}  className='px-5 py-2 rounded-full bg-gray-700/30'>Next</Link>)}
        </div>
    );
};

export default Pagination;