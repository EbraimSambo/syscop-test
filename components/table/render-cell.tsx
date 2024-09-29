import { User, Tooltip, Chip } from "@nextui-org/react";
import React from "react";
import { DeleteIcon } from "../icons/table/delete-icon";
import { EditIcon } from "../icons/table/edit-icon";
import { EyeIcon } from "../icons/table/eye-icon";
import { users } from "./data";
import { Appointments } from "@/interfaces";
import { useGetAppointmentsByUuid } from "@/hooks/nuqs";
import { Options } from "nuqs";

interface Props {
  user: Appointments;
  columnKey: string | React.Key;
  openModal: (id: string)=> void
}


export const RenderCell = ({ user, columnKey,openModal }: Props) => {
  // @ts-ignore
  const cellValue = user[columnKey];

    switch (columnKey) {
      // case "name":
      //   return (
      //     <User
      //       avatarProps={{
      //         src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
      //       }}
      //       name={cellValue}
      //     >
      //       {user.email}
      //     </User>
      //   );
      case "role":
        return (
          <div>
            <div>
              <span>{cellValue}</span>
            </div>
            <div>
              <span>{user.visitTime.toString()}</span>
            </div>
          </div>
        );
      case "status":
        return (
          <Chip
            size="sm"
            variant="flat"
            color={
              user.status === false
                ? "success"
                : "danger"
            }
          >
            <span className="capitalize text-xs">
              {user.status === false && "esperando"}
              {user.status === true && "expirado"}
              </span>
          </Chip>
        );
  
      case "actions":
        return (
          <div className="flex items-center gap-4 ">
            <div>
              <Tooltip content="Detatalhes">
                <button onClick={()=>openModal(user.uuid)}>
                  <EyeIcon size={20} fill="#979797" />
                </button>
              </Tooltip>
            </div>
            <div>
              <Tooltip content="Editar" color="secondary">
                <button  >
                  <EditIcon size={20} fill="#979797" />
                </button>
              </Tooltip>
            </div>
            <div>
              <Tooltip
                content="Eliminar"
                color="danger"
                onClick={() => console.log("Delete user", user.id)}
              >
                <button>
                  <DeleteIcon size={20} fill="#FF0080" />
                </button>
              </Tooltip>
            </div>
          </div>
        );
      default:
        return cellValue;
    }

};
