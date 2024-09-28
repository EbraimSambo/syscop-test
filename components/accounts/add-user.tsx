import { useRegisterAppointments } from "@/hooks/register-appointments";
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
  const {form,isPadding,message,onsubmit} = useRegisterAppointments()
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

                <form onSubmit={form.handleSubmit(onsubmit)}>
                  <ModalBody>
                    <div className="grid grid-cols-2 gap-4">
                      <Input {...form.register("FristName")} label="Primeiro Nome" size="sm" variant="bordered" />
                      <Input {...form.register("FristName")}  label="Ultimo Nome" size="sm" variant="bordered" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <Input {...form.register("email")}  label="Email" size="sm" variant="bordered" />
                      <Input {...form.register("phone")}  label="Telemovel" size="sm" variant="bordered" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <Input {...form.register("optionalPhone")}  label="Telemovel Opcional" size="sm" variant="bordered" />
                      <Input
                      {...form.register("bi")} 
                        label="Bilhete de identidade"
                        variant="bordered"
                        size="sm"
                      />
                    </div>
                    <div className="">
                    <DatePicker label="Birth date" className="max-w-[284px]" />
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
                </form>




              </>
            )}
          </ModalContent>
        </Modal>
      </>
    </div>
  );
};
