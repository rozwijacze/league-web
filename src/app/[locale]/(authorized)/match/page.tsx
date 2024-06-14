import React from 'react';
import CreateMatch from './components/CreateMatch/CreateMatch';
import JoinLobby from './components/JoinLobby/JoinLobby';

export default function Match() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-5 md:flex-row md:justify-evenly md:gap-0">
            <CreateMatch />
            <JoinLobby />
        </div>
    );
}
