"use client"
import {
  Link,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import React from "react";
import { columns, users } from "./data";
import { RenderCell } from "./render-cell";
import { useFetcherClient } from "@/hooks/swr";
import { Appointments } from "@/interfaces";
import LoaderTable from "../home/loader-table";
import { useGetAppointmentsByUuid } from "@/hooks/nuqs";
import { userModal } from "@/hooks/modal";
import ErrorLoading from "../errors/error-loader";

interface Props {
  appointments: Appointments[];
}
export const TableWrapper = () => {
  
  const {data, isLoading, error} = useFetcherClient<Appointments[]>('appointments/all')
 const {setUuid} = useGetAppointmentsByUuid()
 const {openModal} = userModal()
  if(error) return <ErrorLoading />
  if(isLoading) return <LoaderTable />
  console.log(data)

 
  return (
    <div className=" w-full flex flex-col gap-4">
      <Table aria-label="Example table with custom cells">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              hideHeader={column.uid === "actions"}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={data?.slice(0,9)}>
          {(item) => (
            <TableRow>
              {(columnKey) => (
                <TableCell>
                  {RenderCell({ user: item, columnKey: columnKey,openModal })}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
