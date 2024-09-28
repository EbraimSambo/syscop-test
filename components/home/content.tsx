"use client";
import React from "react";
import dynamic from "next/dynamic";
import { TableWrapper } from "../table/table";
import { Link } from "@nextui-org/react";
import NextLink from "next/link";
import { useFetcherClient } from "@/hooks/swr";
import LoaderTable from "./loader-table";
import { Appointments } from "@/interfaces";

const Chart = dynamic(
  () => import("../charts/steam").then((mod) => mod.Steam),
  {
    ssr: false,
  }
);

export const Content = () => {

  return(
  <div className="h-full lg:px-6">

    {/* Table Latest Users */}
    <div className="flex flex-col justify-center w-full py-5 px-4 lg:px-0  max-w-[90rem] mx-auto gap-3">
      <div className="flex  flex-wrap justify-between">
        <h3 className="text-center text-xl font-semibold">Ultimos agendamentos</h3>
        <Link
          href="/accounts"
          as={NextLink}
          color="primary"
          className="cursor-pointer"
        >
          Ver Todos
        </Link>
      </div>
      <TableWrapper  />
    </div>
  </div>
)};
