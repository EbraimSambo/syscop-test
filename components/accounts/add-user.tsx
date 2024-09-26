import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import React from "react";

export const AddUser = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <>
        <Button onPress={onOpen} color="primary">
          Criar Agendamento
        </Button>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="top-center"
          size="4xl"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Criar Agendamento
                </ModalHeader>
                <ModalBody>
                  <div className="grid grid-cols-2 gap-4">
                    <Input label="Primeiro Nome" size="sm" variant="bordered" />
                    <Input label="Ultimo Nome" size="sm" variant="bordered" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Input label="Email" size="sm" variant="bordered" />
                    <Input label="Telemovel" size="sm" variant="bordered" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Input label="Telemovel Opcional" size="sm" variant="bordered" />
                    <Input
                      label="Bilhete de identidade"
                      variant="bordered"
                      size="sm"
                    />
                  </div>
                  <div className="">
                    
                  </div>



                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onClick={onClose}>
                    Cancelar
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Concluir
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    </div>
  );
};
