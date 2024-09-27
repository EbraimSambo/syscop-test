import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  TimeInput,
  DatePicker
} from "@nextui-org/react";
import React from "react";
import { useModalAppointments } from "../hooks/modal";

export const AddUser = () => {
  const { isOpen, onOpenChange } = useModalAppointments()

  return (
    <div>
      <>
        <Button onPress={() => onOpenChange(true)} color="primary">
          Criar Agendamento
        </Button>
        <Modal
          isOpen={isOpen}
          onOpenChange={() => onOpenChange(false)}
          placement="top-center"
          size="4xl"
        >
          <ModalContent>
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
                <div className="grid grid-cols-2 gap-4">
                  <DatePicker
                    label="Data"
                    className=""
                    description={"Data de agendamento para se fazer presente"}
                  />
                  <TimeInput
                    isRequired
                    label="Hora da Visita"
                    description={"Hora da visita para se fazer presente"}
                  />
                </div>



              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onClick={() => onOpenChange(false)}>
                  Cancelar
                </Button>
                <Button color="primary" onPress={() => onOpenChange(false)}>
                  Concluir
                </Button>
              </ModalFooter>
            </>
          </ModalContent>
        </Modal>
      </>
    </div>
  );
};
