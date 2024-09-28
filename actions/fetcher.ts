import { confiAxios } from "@/config/axios";



export async function fetcher<T>(url: string){
    return await confiAxios.get<T>(url).then((res)=>res.data)
}