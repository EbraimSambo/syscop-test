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
                <ModalHeader className="flex flex-col gap-1">FICHA DE AGENDAMENTO</ModalHeader>
                <ModalBody>
                  <p> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pulvinar risus non risus hendrerit venenatis.
                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                  </p>
                  <ShowAppointments uuid={uuid} />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={closeModal}>
                    Close
                  </Button>
                  <Button color="primary" onPress={closeModal}>
                    Action
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