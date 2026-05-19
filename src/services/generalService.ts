import {baseUrl, token} from "@/src/components/constants/url";

export const generalService ={
    getAll: async  <T, > (endpoint:string):Promise<T> => {
        return  await fetch(`${baseUrl}/${endpoint}`,
            {headers: {Authorization: token}}).then(res => res.json());
    },
    getById: async <T,> (endpoint:string, id:string):Promise<T> => await fetch(`${baseUrl}/${endpoint}/${id}`,  {headers: {Authorization: token}}).then(res => res.json())
};