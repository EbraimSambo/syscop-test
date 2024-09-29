import { parseAsString, useQueryState } from "nuqs";



export function useGetAppointments(){
    const [uuid, setUuid] = useQueryState('uuidAppointment', parseAsString)

    return {uuid,setUuid}
}