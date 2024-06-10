'use client';

import { useState } from 'react';
import LeaguesTable from './components/LeaguesTable/LeaguesTable';
import { useTranslations } from 'next-intl';
import SearchBar from '@/components/layout/SearchBar/SearchBar';
import CreateLeagueForm from './components/CreateLeagueForm/CreateLeagueForm';

type Props = {};

export enum LeagueTableView {
    PUBLIC_LEAGUES = 'Public leagues',
    PRIVATE_LEAGUES = 'Private leagues',
    NEW_LEAGUE = 'Create new league'
}

export default function Leagues({}: Props) {
    const t = useTranslations('Leagues');
    const [searchedValue, setSearchedValue] = useState('');
    const [tableView, setTableView] = useState(LeagueTableView.PUBLIC_LEAGUES);
    const isCreateNewLeagueView = tableView === LeagueTableView.NEW_LEAGUE;

    const navButtonsLabels = {
        [LeagueTableView.PUBLIC_LEAGUES]: t('publicLeagues'),
        [LeagueTableView.PRIVATE_LEAGUES]: t('privateLeagues'),
        [LeagueTableView.NEW_LEAGUE]: t('createNewLeague')
    };

    /**
     * TODO
     * Extend searching for other attributes not only league name
     */

    return (
        <div className="w-full h-full flex flex-col">
            <div className="flex justify-between mb-3">
                <nav className="flex text-lg gap-2">
                    {Object.values(LeagueTableView).map((view, i) => (
                        <button
                            key={i}
                            onClick={() => setTableView(view)}
                            title={navButtonsLabels[view]}
                            className={`leagues-page-nav-button ${tableView === view && 'active'}`}
                        >
                            {navButtonsLabels[view]}
                        </button>
                    ))}
                </nav>
                {!isCreateNewLeagueView && (
                    <SearchBar searchedValue={searchedValue} setSearchedValue={setSearchedValue} />
                )}
            </div>
            {isCreateNewLeagueView ? (
                <CreateLeagueForm />
            ) : (
                <LeaguesTable tableView={tableView} searchedValue={searchedValue} />
            )}
        </div>
    );
}
