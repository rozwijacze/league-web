'use client';

import ConfirmDialog from '@/components/common/Dialogs/ConfirmDialog/ConfirmDialog';
import React, { useState } from 'react';
import en from '@/messages/en.json';

type Props = {
    t: Partial<IntlMessages['Match']>;
};

export default function JoinLobby({ t }: Props) {
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
                {t.joinLobby}
            </button>
            <ConfirmDialog
                title={t.joinLobby || en.Match.joinLobby}
                description={t.enterLobbyId || en.Match.enterLobbyId}
                isOpen={modalOpen}
                handleCancelAction={() => setModalOpen(false)}
                handleConfirmAction={e => joinMatch(e)}
            />
        </div>
    );
}
