'use client';

import InputDialog, { InputDialogValues } from '@/components/common/Dialogs/InputDialog';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

interface CreateMatchTranslations {
    createNewMatch: string;
    creatingNewMatch: string;
    enterMatchName: string;
}

type Props = {
    translations: CreateMatchTranslations;
};

export default function CreateMatch({ translations }: Props) {
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
                {translations.createNewMatch}
            </button>
            <InputDialog
                title={translations.creatingNewMatch}
                description={translations.enterMatchName}
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
