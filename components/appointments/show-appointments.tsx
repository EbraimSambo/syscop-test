import { useFetcherClient } from '@/hooks/swr'
import { Appointments } from '@/interfaces'
import React from 'react'
import ErrorLoading from '../errors/error-loader'

function ShowAppointments({uuid}:{uuid: string}) {
    const {data, isLoading, error} = useFetcherClient<Appointments>(`appointments/${uuid}`)
    console.log(data)
    if(!uuid) return null
    if(error) return <ErrorLoading />
    if(isLoading) return <div>carregando..</div>
  return (
    <div>
        <h2> <span className='font-bold'>Nome:</span>  {data?.name} </h2>
        <h2> <span className='font-bold'>Telefone:</span>  {data?.phone} </h2>
        <h2> <span className='font-bold'>Telefone:</span>  {data?.bi} </h2>
        <h2> <span className='font-bold'>Telefone:</span>  {data?.visitTime.toLocaleString()} </h2>
        <h2> <span className='font-bold'>Dia da visita:</span>  {data?.dateVisit.toString()} </h2>
    </div>
  )
}

export default ShowAppointments