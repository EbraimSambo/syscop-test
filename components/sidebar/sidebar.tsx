import React from "react";
import { Sidebar } from "./sidebar.styles";
import { Avatar, Tooltip } from "@nextui-org/react";
import { CompaniesDropdown } from "./companies-dropdown";
import { HomeIcon } from "../icons/sidebar/home-icon";
import { PaymentsIcon } from "../icons/sidebar/payments-icon";
import { BalanceIcon } from "../icons/sidebar/balance-icon";
import { AccountsIcon } from "../icons/sidebar/accounts-icon";
import { CustomersIcon } from "../icons/sidebar/customers-icon";
import { ProductsIcon } from "../icons/sidebar/products-icon";
import { ReportsIcon } from "../icons/sidebar/reports-icon";
import { DevIcon } from "../icons/sidebar/dev-icon";
import { ViewIcon } from "../icons/sidebar/view-icon";
import { SettingsIcon } from "../icons/sidebar/settings-icon";
import { CollapseItems } from "./collapse-items";
import { SidebarItem } from "./sidebar-item";
import { SidebarMenu } from "./sidebar-menu";
import { FilterIcon } from "../icons/sidebar/filter-icon";
import { useSidebarContext } from "../layout/layout-context";
import { ChangeLogIcon } from "../icons/sidebar/changelog-icon";
import { usePathname } from "next/navigation";

export const SidebarWrapper = () => {
  const pathname = usePathname();
  const { collapsed, setCollapsed } = useSidebarContext();

  return (
    <aside className="h-screen z-[20] sticky top-0">
      {collapsed ? (
        <div className={Sidebar.Overlay()} onClick={setCollapsed} />
      ) : null}
      <div
        className={Sidebar({
          collapsed: collapsed,
        })}
      >
        <div className={Sidebar.Header()}>
          <CompaniesDropdown />
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className={Sidebar.Body()}>
            <SidebarItem
              title="Início"
              icon={<HomeIcon />}
              isActive={pathname === "/"}
              href="/"
            />
            <SidebarMenu title="Menu Principal">
              <SidebarItem
                isActive={pathname === "/accounts"}
                title="Agendamentos"
                icon={<AccountsIcon />}
                href="accounts"
              />
              {/* <SidebarItem
                isActive={pathname === "/payments"}
                title="Pagamentos"
                icon={<PaymentsIcon />}
              /> */}
              {/* <CollapseItems
                icon={<BalanceIcon />}
                items={["Visitas Mensais", "Saldos", "Parcelas"]}
                title="Balanços"
              /> */}
              <SidebarItem
                isActive={pathname === "/customers"}
                title="Clientes"
                icon={<CustomersIcon />}
              />
            </SidebarMenu>

            <SidebarMenu title="Geral">
            <SidebarItem
                isActive={pathname === "/products"}
                title="Atividades"
                icon={<ProductsIcon />}
              />
              <SidebarItem
                isActive={pathname === "/reports"}
                title="Reportes"
                icon={<ReportsIcon />}
              />
              <SidebarItem
                isActive={pathname === "/settings"}
                title="Configurações"
                icon={<SettingsIcon />}
              />
            </SidebarMenu>

            {/* <SidebarMenu title="Udaptações">
              <SidebarItem
                isActive={pathname === "/changelog"}
                title="Programar"
                icon={<ChangeLogIcon />}
              />
            </SidebarMenu> */}
          </div>
          {/* <div className={Sidebar.Footer()}>
            <Tooltip content={"Settings"} color="primary">
              <div className="max-w-fit">
                <SettingsIcon />
              </div>
            </Tooltip>
            <Tooltip content={"Adjustments"} color="primary">
              <div className="max-w-fit">
                <FilterIcon />
              </div>
            </Tooltip>
            <Tooltip content={"Perfil"} color="primary">
              <Avatar
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                size="sm"
              />
            </Tooltip>
          </div> */}
        </div>
      </div>
    </aside>
  );
};
