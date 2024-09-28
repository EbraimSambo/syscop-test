import { fetcher } from "@/actions/fetcher";
import useSWR from "swr";


export function useFetcherClient<T>(url: string){
  return useSWR<T>(url, fetcher)
}