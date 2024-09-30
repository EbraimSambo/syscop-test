"use client";
import React, { useState } from "react";
import { AcmeIcon } from "../icons/acme-icon";

interface Company {
  name: string;
  location: string;
  logo: React.ReactNode;
}

export const CompaniesDropdown = () => {
  const [company, setCompany] = useState<Company>({
    name: "Sysconp",
    location: "Zango 8000",
    logo: <AcmeIcon />,
  });
  return (
    <div className="flex items-center gap-2">
    {company.logo}
    <div className="flex flex-col gap-4">
      <h3 className="text-xl font-bold m-0 text-app -mb-4 whitespace-nowrap">
        {company.name}
      </h3>
      <span className="text-xs font-medium text-default-500">
        {company.location}
      </span>
    </div>
  </div>
  );
};
