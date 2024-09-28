import React from 'react';

const ErrorMessage = ({message}:{message: string}) => {
    return (
        <div className='flex items-center justify-center'>
            <p className="p-4 bg-red-100 text-xs rounded-sm text-red-700"> {message} </p>
        </div>
    );
}

export default ErrorMessage;
