"use client";
import React, { useState } from "react";
import { AcmeIcon } from "../icons/acme-icon";
import { Image } from "@nextui-org/react";

interface Company {
  name: string;
  location: string;
  image?: string;
  logo: React.ReactNode;
}

export const CompaniesDropdown = () => {
  const [company, setCompany] = useState<Company>({
    name: "Sysconp",
    location: "Pedromag",
    logo: <AcmeIcon />,
    image: "/android-chrome-512x512.png"
  });
  return (
    <div className="flex items-center gap-2">
    {company.logo}
    <div className="flex flex-col gap-4">
      <h3 className="text-xl font-bold m-0 text-app -mb-4 whitespace-nowrap">
        {company.name}
        <Image 
          src={company.image!}
        />
      </h3>
      <span className="text-xs font-medium text-app ">
        {company.location}
      </span>
    </div>
  </div>
  );
};
