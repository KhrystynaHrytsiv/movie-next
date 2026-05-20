export  interface IVideo {
   id: string;
   name: string;
   key: string;
   site: string;
   type: string;
}
export interface IResVideo{
   id:number,
   results:IVideo[]
}