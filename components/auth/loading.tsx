import { Spinner } from '@nextui-org/react';
import React from 'react';

const Loading = ({isPadding}:{isPadding: boolean}) => {
    return (
        <div className="flex items-center justify-center">
            <Spinner color="primary" />
        </div>
    );
}

export default Loading;
