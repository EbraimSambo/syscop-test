'use client'
import { userModal } from "@/hooks/modal";
import { useGetAppointmentsByUuid } from "@/hooks/nuqs";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import ShowAppointments from "./show-appointments";

const ModalAppointments =() =>{
    const {isOpen, onOpenChange,closeModal} = userModal()
    const {uuid,setUuid} = useGetAppointmentsByUuid()

    if(!uuid) return null


    
    return (
      <>
        <Modal size="4xl" isOpen={isOpen} onOpenChange={closeModal}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                   <h2 className="text-center">FICHA DE AGENDAMENTO</h2>
                </ModalHeader>
                <ModalBody>

                  <ShowAppointments uuid={uuid} />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={closeModal}>
                    Fechar Ficha
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    );
  }

  export default ModalAppointments