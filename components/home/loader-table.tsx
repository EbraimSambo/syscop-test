import { Skeleton, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react';
import React from 'react';

const LoaderTable = () => {

    return (
        <div className='space-y-4 p-8'>
            {Array.from({ length: 8 }).map((_, index) => (
                <Skeleton key={index} >
                    <div className="h-8 rounded-sm bg-default-300" key={index} ></div>
                </Skeleton>
            ))}
        </div>
    );
}

export default LoaderTable;
