import {FC} from "react";
import Trailer from "@/src/components/trailer/Trailer";

interface IProp{
    params: Promise<{id:string}>
}
const TrailerPage:FC<IProp> = async ({params})=> {
    const {id} = await params;

    return (
        <div>
            <Trailer id={id}/>
        </div>
    );
};


export default TrailerPage;