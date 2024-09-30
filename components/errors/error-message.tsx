import React from 'react';

const ErrorMessage = ({message}:{message: string}) => {
    return (
        <div className='flex items-center justify-center'>
            <p className="p-4 bg-danger-100 text-xs rounded-sm text-danger-500"> {message} </p>
        </div>
    );
}

export default ErrorMessage;
