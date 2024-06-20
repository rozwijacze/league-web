import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '@/components/shadcn/table';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger
} from '@/components/shadcn/collapsible';
import {
    publicTableMockData,
    privateTableMockData,
    LeagueTableData
} from '@/mocks/LeaguesTableMock';
import Image from 'next/image';
import { valueFoundInKey } from '@/libs/clientHelpers';
import { LeagueTableView } from '../../page';
import { useTranslations } from 'next-intl';
import React from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

type Props = {
    tableView: LeagueTableView;
    searchedValue: string;
};

export default function LeaguesTable({ tableView, searchedValue }: Props) {
    const t = useTranslations('LeaguesTable');
    let tableBody: LeagueTableData[];

    // TODO
    // Discuss with BE about rendering of elements inside different tables

    // Applying filter for search
    switch (tableView) {
        default:
            tableBody = publicTableMockData;
            break;
        case LeagueTableView.PUBLIC_LEAGUES:
            tableBody = publicTableMockData.filter(leagueData =>
                valueFoundInKey(searchedValue, leagueData.name)
            );
            break;
        case LeagueTableView.PRIVATE_LEAGUES:
            tableBody = privateTableMockData.filter(leagueData =>
                valueFoundInKey(searchedValue, leagueData.name)
            );
            break;
    }

    // TODO
    // Do custom scrollbar on table

    return (
        <div className="w-full h-full bg-gray-800 rounded-xl">
            <Table className="table-fixed">
                <TableHeader>
                    <TableRow className="disable-hover">
                        <TableHead className="text-center">{t('logo')}</TableHead>
                        <TableHead className="text-center">{t('name')}</TableHead>
                        <TableHead className="text-center">{t('startDate')}</TableHead>
                        <TableHead className="text-center">{t('endDate')}</TableHead>
                        <TableHead className="text-center">{t('owner')}</TableHead>
                        <TableHead className="text-center">{t('matches')}</TableHead>
                        <TableHead className="text-center"></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {tableBody.map((leagueData, i) => (
                        <Collapsible key={i} asChild>
                            <React.Fragment>
                                <TableRow className="text-center">
                                    <TableCell>
                                        <Image
                                            className="m-auto"
                                            src={leagueData.logo}
                                            alt="league logo"
                                            width={50}
                                            height={50}
                                        ></Image>
                                    </TableCell>
                                    <TableCell>{leagueData.name}</TableCell>
                                    <TableCell>
                                        {leagueData.startDate.toLocaleDateString()}
                                    </TableCell>
                                    <TableCell>{leagueData.endDate.toLocaleDateString()}</TableCell>
                                    <TableCell>{leagueData.owner}</TableCell>
                                    <TableCell>{leagueData.matches}</TableCell>
                                    <TableCell>
                                        <CollapsibleTrigger className="collapsible-table-trigger">
                                            <MdOutlineKeyboardArrowDown />
                                        </CollapsibleTrigger>
                                    </TableCell>
                                </TableRow>
                                <TableRow className="border-none disable-hover">
                                    <TableCell colSpan={7} className="p-0">
                                        <CollapsibleContent
                                            asChild
                                            className="collapsible-table-row"
                                        >
                                            <div>{leagueData.detailedInfo}</div>
                                        </CollapsibleContent>
                                    </TableCell>
                                </TableRow>
                            </React.Fragment>
                        </Collapsible>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
