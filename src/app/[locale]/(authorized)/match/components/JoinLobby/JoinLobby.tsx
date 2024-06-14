'use client';

import ConfirmDialog from '@/components/common/Dialogs/ConfirmDialog/ConfirmDialog';
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function JoinLobby() {
    const t = useTranslations('Match');
    const [modalOpen, setModalOpen] = useState(false);

    // TODO: Connecting to lobby by passing id.
    function joinMatch(id: string) {
        return id;
    }

    return (
        <div className="match-card relative">
            <button
                onClick={() => setModalOpen(true)}
                className="bg-[url('/images/dart-join.jpg')] match-card-button"
            >
                {t('joinLobby')}
            </button>
            <ConfirmDialog
                title={t('joinLobby')}
                description={t('enterLobbyId')}
                isOpen={modalOpen}
                handleCancelAction={() => setModalOpen(false)}
                handleConfirmAction={e => joinMatch(e)}
            />
        </div>
    );
}
