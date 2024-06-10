import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '@/components/shadcn/table';
import {
    publicTableMockData,
    privateTableMockData,
    LeagueTableData
} from '@/mocks/LeaguesTableMock';
import Image from 'next/image';
import { valueFoundInKey } from '@/libs/clientHelpers';
import { LeagueTableView } from '../../page';
import { useTranslations } from 'next-intl';

type Props = {
    tableView: LeagueTableView;
    searchedValue: string;
};

export default function LeaguesTable({ tableView, searchedValue }: Props) {
    const t = useTranslations('LeaguesTable');
    let tableBody: LeagueTableData[];

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

    return (
        <div className="w-full h-full bg-gray-800 rounded-xl">
            <Table>
                <TableHeader>
                    <TableRow className="hover:bg-inherit">
                        <TableHead className="w-[50px]">{t('logo')}</TableHead>
                        <TableHead>{t('name')}</TableHead>
                        <TableHead>{t('startDate')}</TableHead>
                        <TableHead>{t('endDate')}</TableHead>
                        <TableHead>{t('owner')}</TableHead>
                        <TableHead>{t('matches')}</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {tableBody.map((leagueData, i) => (
                        <TableRow key={i}>
                            <TableCell>
                                <Image
                                    src={leagueData.logo}
                                    alt="league logo"
                                    width={50}
                                    height={50}
                                ></Image>
                            </TableCell>
                            <TableCell>{leagueData.name}</TableCell>
                            <TableCell>{leagueData.startDate.toLocaleDateString()}</TableCell>
                            <TableCell>{leagueData.endDate.toLocaleDateString()}</TableCell>
                            <TableCell>{leagueData.owner}</TableCell>
                            <TableCell>{leagueData.matches}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
