'use client';

import AppDialog from '@/components/Dialog';
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
    function createMatch(matchName: string) {
        router.replace('/match/12?name=' + matchName);
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
            <AppDialog
                title={translations.creatingNewMatch}
                description={translations.enterMatchName}
                isOpen={modalOpen}
                isInput={true}
                handleCancelAction={() => setModalOpen(false)}
                handleConfirmAction={inputVal => createMatch(inputVal)}
            />
        </div>
    );
}
