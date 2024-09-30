import { useFetcherClient } from '@/hooks/swr'
import { Appointments } from '@/interfaces'
import React from 'react'

function ShowAppointments({uuid}:{uuid: string}) {
    const {data, isLoading, error} = useFetcherClient<Appointments>(`appointments/${uuid}`)
    console.log(data)
    if(!uuid) return null
    if(error) return <div>Erro..</div>
    if(isLoading) return <div>carregando..</div>
  return (
    <div>ShowAppointments</div>
  )
}

export default ShowAppointments