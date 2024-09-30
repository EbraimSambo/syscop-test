'use client'
import { userModal } from "@/hooks/modal";
import { useGetAppointmentsByUuid } from "@/hooks/nuqs";
import { useFetcherClient } from "@/hooks/swr";
import { Appointments } from "@/interfaces";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";

const ModalAppointments =() =>{
    const {isOpen, onOpenChange,closeModal} = userModal()
    const {uuid,setUuid} = useGetAppointmentsByUuid()
    if(!uuid) return null

    const {data, isLoading, error} = useFetcherClient<Appointments>(`'appointments/${uuid}`)
    console.log(data)

    if(error) return <div>Erro..</div>
    if(isLoading) return <div>carregando..</div>
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
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pulvinar risus non risus hendrerit venenatis.
                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                  </p>
                  <p>
                    Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                    dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. 
                    Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. 
                    Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur 
                    proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                  </p>
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