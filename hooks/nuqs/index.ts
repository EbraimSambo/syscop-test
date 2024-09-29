import { parseAsString, useQueryState } from "nuqs";



export function useGetAppointmentsByUuid(){
    const [uuid, setUuid] = useQueryState('uuid')

    return {uuid,setUuid}
}