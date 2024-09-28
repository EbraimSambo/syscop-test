"use client";

import { useRegister } from "@/hooks/register";
import { Button, Input, Spinner } from "@nextui-org/react";
import Link from "next/link";
import ErrorMessage from "../errors/error-message";
import Loading from "./loading";

export const Register = () => {

  const { form, onsubmit, isPadding, message } = useRegister()

  return (
    <>
      <div className='text-center text-[25px] font-bold mb-6'>Criar Conta</div>

      <form onSubmit={form.handleSubmit(onsubmit)} className="max-w-[400px] w-full mx-auto " >
        <div className='space-y-4 mb-4'>
          {isPadding && <Loading isPadding={isPadding} />}
          {message?.type === "error" && <ErrorMessage message={message.message} />}
          <Input
            variant='bordered'
            label='Nome'
            disabled={isPadding}
            {...form.register("name")}
            isInvalid={!!form.formState.errors.name}
            errorMessage={form.formState.errors.name?.message}
          />
          <Input
            variant='bordered'
            label='Email'
            type='email'
            {...form.register("email")}
            disabled={isPadding}
            isInvalid={!!form.formState.errors.email}
            errorMessage={form.formState.errors.email?.message}
          />
          <Input
            variant='bordered'
            label='Senha'
            type='password'
            {...form.register("password")}
            isInvalid={!!form.formState.errors.password}
            errorMessage={form.formState.errors.password?.message}
          />
          <Input
            variant='bordered'
            label='Confirmar Senha'
            type='password'
            disabled={isPadding}
            {...form.register("repeatPassword")}
            isInvalid={!!form.formState.errors.repeatPassword}
            errorMessage={form.formState.errors.repeatPassword?.message}
          />
        </div>
        <div className="flex itmes-center justify-center">
          <Button
            disabled={isPadding}
            variant='solid'
            type="submit"
            color='primary'>
            Criar Conta
          </Button>
        </div>

      </form>

      <div className='font-light text-slate-400 mt-4 text-sm'>
        Tenho uma conta ?{" "}
        <Link href='/login' className='font-bold'>
          Entrar
        </Link>
      </div>
    </>
  );
};
