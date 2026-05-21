import {FC} from "react";
import {generalService} from "@/src/services/generalService";

interface IProp{
    searchParams: Promise<{page:string}>
}
const Pagination:FC<IProp> = async ({searchParams}) => {
    const {page} = await searchParams;
    const currentPage = Number(page || 1)

    const res = await generalService.get('discover/movie?page=${currentPage}');

    return (
        <div>
            <div className="flex gap-4 mt-4">
                {currentPage > 1 && (<a href={`?page=${currentPage - 1}`}>Previous</a>)}
                <a href={`?page=${currentPage + 1}`}>Next</a>
            </div>
        </div>
    );
}

export default Pagination;