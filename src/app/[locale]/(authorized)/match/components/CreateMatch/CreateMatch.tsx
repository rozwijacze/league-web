'use client';

import InputDialog, {
    InputDialogValues
} from '@/components/common/Dialogs/InputDialog/InputDialog';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function CreateMatch() {
    const t = useTranslations('Match');
    const [modalOpen, setModalOpen] = useState(false);

    const router = useRouter();

    // TODO: Creating a lobby and navigating to match page.
    function createMatch(matchData: InputDialogValues[]) {
        router.replace('/match/12?name=' + matchData);
    }

    return (
        <div className="image-button relative">
            <div className="hero-background"></div>
            <button
                onClick={() => setModalOpen(true)}
                className="bg-[url('/images/darts-board.jpg')] hero-image-for-button"
            >
                {t('createNewMatch')}
            </button>
            <InputDialog
                title={t('createNewMatch')}
                description={t('enterMatchName')}
                isOpen={modalOpen}
                inputs={[
                    { label: 'Match Name', type: 'text', id: 'match-name' },
                    { label: 'Match Password', type: 'password', id: 'match-password' }
                ]}
                handleCancelAction={() => setModalOpen(false)}
                handleConfirmAction={inputVal => createMatch(inputVal)}
            />
        </div>
    );
}
