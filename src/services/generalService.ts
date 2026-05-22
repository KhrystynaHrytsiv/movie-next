import {baseUrl, token} from "@/src/constants/url";

export const generalService ={
    get: async  <T, > (endpoint:string):Promise<T> => {
        return  await fetch(`${baseUrl}/${endpoint}`,
            {headers: {Authorization: token}, cache: 'no-store'}).then(res => res.json());
    }
};
