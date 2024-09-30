import { useRegisterAppointments } from "@/hooks/register-appointments";
import {
  Button,
  DatePicker,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  TimeInput,
  useDisclosure,
} from "@nextui-org/react";
import React from "react";
import Loading from "../auth/loading";
import ErrorMessage from "../errors/error-message";
import { parseDate, getLocalTimeZone,  } from "@internationalized/date";
import { useDateFormatter } from "@react-aria/i18n";
export const AddUser = () => {

  const [dateVisit, setDateVisit] = React.useState('"2024-04-04"')
   const [value, setValue] = React.useState(parseDate("2024-04-04"));
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
 
  let formatter = useDateFormatter({ dateStyle: "medium" });
 
  

  const handleDateChange = (date: string) => {
    const parsedDate = parseDate(date);
    console.log("Data selecionada:", parsedDate.toString());
    setDateVisit(parsedDate.toString())
  };
  console.log(value && formatter.format(value.toDate(getLocalTimeZone())))
  const { form, isPadding, message, onsubmit } = useRegisterAppointments(dateVisit)
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
                    {isPadding && <Loading isPadding={isPadding} />}
                    {message?.type === "error" && <ErrorMessage message={message.message} />}
                    <div className="grid grid-cols-2 gap-4">
                      <Input {...form.register("FristName")}
                        isInvalid={!!form.formState.errors.FristName}
                        errorMessage={form.formState.errors.FristName?.message}
                        label="Primeiro Nome" size="sm" variant="bordered" />
                      <Input {...form.register("LasTName")}
                        isInvalid={!!form.formState.errors.LasTName}
                        errorMessage={form.formState.errors.LasTName?.message}
                        label="Ultimo Nome" size="sm" variant="bordered" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <Input {...form.register("email")}
                        isInvalid={!!form.formState.errors.email}
                        errorMessage={form.formState.errors.email?.message}
                        label="Email" size="sm" variant="bordered" />
                      <Input {...form.register("phone")}
                        isInvalid={!!form.formState.errors.phone}
                        errorMessage={form.formState.errors.phone?.message}
                        label="Telemovel" size="sm" variant="bordered" />
                      <Input {...form.register("project")}
                        isInvalid={!!form.formState.errors.project}
                        errorMessage={form.formState.errors.bi?.message}
                        label="Telemovel" size="sm" variant="bordered" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        {...form.register("optionalPhone")}
                        isInvalid={!!form.formState.errors.optionalPhone}
                        errorMessage={form.formState.errors.optionalPhone?.message}
                        label="Telemovel Opcional" size="sm" variant="bordered" />
                      <Input
                        {...form.register("bi")}
                        label="Bilhete de identidade"
                        variant="bordered"
                        size="sm"
                        isInvalid={!!form.formState.errors.bi}
                        errorMessage={form.formState.errors.bi?.message}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <DatePicker label="Data da visita"   onChange={(date) => handleDateChange(date.toString())} />
                      <TimeInput label="Hora da visita" {...form.register("visitTime")} />
                    </div>

                  </ModalBody>

                  <ModalFooter>
                    <Button color="danger" variant="flat" onClick={onClose}>
                      Cancelar
                    </Button>
                    <Button color="primary" type="submit">
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
