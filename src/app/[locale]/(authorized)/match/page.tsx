import React from 'react';
import { useTranslations } from 'next-intl';
import CreateMatch from './components/CreateMatch';
import JoinLobby from './components/JoinLobby';

type Props = {};

export default function Match({}: Props) {
    const t = useTranslations('Match');
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-5 md:flex-row md:justify-evenly md:gap-0">
            <CreateMatch
                translations={{
                    createNewMatch: t('createNewMatch'),
                    creatingNewMatch: t('creatingNewMatch'),
                    enterMatchName: t('enterMatchName')
                }}
            />
            <JoinLobby
                translations={{ joinLobby: t('joinLobby'), enterLobbyId: t('enterLobbyId') }}
            />
        </div>
    );
}
