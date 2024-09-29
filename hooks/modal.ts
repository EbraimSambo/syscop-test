import { useAtom } from "jotai";
import { modalAtom } from "./atoms";
import { useGetAppointmentsByUuid } from "./nuqs";


export function userModal(){
    const [isOpen, onOpenChange] = useAtom(modalAtom)

    const {uuid,setUuid} = useGetAppointmentsByUuid()

    function openModal(){
        onOpenChange(true)
    }
    function closeModal(){
        setUuid(null)
        onOpenChange(false)
    }
    return {isOpen, onOpenChange, openModal, closeModal}
}