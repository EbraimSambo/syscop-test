const  SuccessMessage = ({message}:{message: string}) => {
    return (
        <div className='flex items-center justify-center'>
            <p className="p-4 bg-successs-100 text-xs rounded-sm text-success-700"> {message} </p>
        </div>
    );
}

export default SuccessMessage;