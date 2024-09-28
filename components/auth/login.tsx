"use client";

import { useLogin } from "@/hooks/login";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import Loading from "./loading";
import ErrorMessage from "../errors/error-message";

export const Login = () => {

  const { onsubmit, form, isPadding, message } = useLogin()
  return (
    <>
      <div className='text-center text-[25px] font-bold mb-6'>Acesse a sua conta</div>

      <form onSubmit={form.handleSubmit(onsubmit)} className="max-w-[400px] w-full mx-auto " >
          <div className='space-y-4 mb-4'>
          {isPadding && <Loading isPadding={isPadding} />}
          {message?.type === "error" && <ErrorMessage message={message.message} />}
            <Input
              variant='bordered'
              label='Email'
              type='email'
              disabled={isPadding}
              {...form.register("email")}
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
          </div>

          <div className="flex itmes-center justify-center">
            <Button
              disabled={isPadding}
              isLoading={isPadding}
              variant='solid'
              type="submit"
              color='primary'>
              Acessar
            </Button>
          </div>
      </form>

      <div className='font-light text-slate-400 mt-4 text-sm'>
        Não tem uma conta  ?{" "}
        <Link href='/register' className='font-bold'>
          Crie uma
        </Link>
      </div>
    </>
  );
};
