import { userModal } from "@/hooks/modal";
import { useGetAppointmentsByUuid } from "@/hooks/nuqs";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";

const ModalAppointments =() =>{
    const {isOpen, onOpenChange} = userModal()
    const {uuid,setUuid} = useGetAppointmentsByUuid()
    if(!uuid) return null
    return (
      <>
        <Modal size="4xl" isOpen={isOpen} onOpenChange={()=>onOpenChange(true)}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
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
                  <Button color="danger" variant="light" onPress={()=>onOpenChange(false)}>
                    Close
                  </Button>
                  <Button color="primary" onPress={()=>onOpenChange(false)}>
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