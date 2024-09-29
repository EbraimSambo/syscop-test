import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarItem,
} from "@nextui-org/react";
import React, { useCallback } from "react";
import { DarkModeSwitch } from "./darkmodeswitch";
import { useRouter } from "next/navigation";
import { deleteAuthCookie } from "@/actions/auth.action";
import { signOut } from "next-auth/react";

export const UserDropdown = () => {
  const router = useRouter();

  const handleLogout = useCallback(async () => {
    await deleteAuthCookie();
    router.replace("/login");
  }, [router]);

  return (
    <Dropdown>
      <NavbarItem>
        <DropdownTrigger>
          <Avatar
            as='button'
            color='primary'
            size='md'
            name="Jane"
          />
        </DropdownTrigger>
      </NavbarItem>
      <DropdownMenu
        aria-label='User menu actions'
        onAction={(actionKey) => console.log({ actionKey })}>
        <DropdownItem
          key='profile'
          className='flex flex-col justify-start w-full items-start'>
          <p>Belma</p>
          <p>zoey@example.com</p>
        </DropdownItem>
        <DropdownItem key='settings'>Configuarações</DropdownItem>
        <DropdownItem key='team_settings'>Colegas</DropdownItem>
        <DropdownItem key='analytics'>Analises</DropdownItem>
        <DropdownItem key='help_and_feedback'>Ajuda e Feedback</DropdownItem>
        <DropdownItem onClick={() => signOut()}
          key='logout'
          color='danger'
          className='text-danger'
          onPress={handleLogout}>
          Sair
        </DropdownItem>
        <DropdownItem key='switch'>
          <DarkModeSwitch />
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
