import { useAtom } from "jotai";
import { modalAtom } from "./atoms";




export function useModalAppointments(){
    const [isOpen, onOpenChange ] = useAtom(modalAtom)

    return {isOpen, onOpenChange}
}