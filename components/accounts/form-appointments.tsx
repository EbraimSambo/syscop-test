import { Input } from '@nextui-org/react';
import React from 'react';

const FormAppointments = () => {
    return (
        <form>
            <div className="">
            <div className="grid grid-cols-2 gap-4">
                    <Input label="Primeiro Nome" size="sm" variant="bordered" />
                    <Input label="Ultimo Nome" size="sm" variant="bordered" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Input label="Email" size="sm" variant="bordered" />
                    <Input label="Telemovel" size="sm" variant="bordered" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Input label="Telemovel Opcional" size="sm" variant="bordered" />
                    <Input
                      label="Bilhete de identidade"
                      variant="bordered"
                      size="sm"
                    />
                  </div>
                  <div className="">
                    
                  </div>
            </div>   
        </form>
    );
}

export default FormAppointments;
