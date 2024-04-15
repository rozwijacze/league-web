import React from 'react';

type Props = {
    params: any;
};

export default function Lobby({ params }: Props) {

    return (
        <div className="h-screen w-screen flex items-center justify-center">
            Waiting lobby here: {params.id}
        </div>
    );
}
