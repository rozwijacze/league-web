'use client';

import ConfirmDialog from '@/components/common/Dialogs/ConfirmDialog';
import React, { useState } from 'react';

interface JoinLobbyTranslations {
    joinLobby: string;
    enterLobbyId: string;
}

type Props = {
    translations: JoinLobbyTranslations;
};

export default function JoinLobby({ translations }: Props) {
    const [modalOpen, setModalOpen] = useState(false);

    // TODO: Connecting to lobby by passing id.
    function joinMatch(id: string) {
        return id;
    }

    return (
        <div className="image-button relative">
            <div className="hero-background"></div>
            <button
                onClick={() => setModalOpen(true)}
                className="bg-[url('/images/dart-join.jpg')] hero-image-for-button"
            >
                {translations.joinLobby}
            </button>
            <ConfirmDialog
                title={translations.joinLobby}
                description={translations.enterLobbyId}
                isOpen={modalOpen}
                handleCancelAction={() => setModalOpen(false)}
                handleConfirmAction={e => joinMatch(e)}
            />
        </div>
    );
}
