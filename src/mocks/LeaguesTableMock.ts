export interface LeagueTableData {
    logo: string;
    name: string;
    startDate: Date;
    endDate: Date;
    owner: string;
    matches: number;
}

export const publicTableMockData: LeagueTableData[] = [
    {
        logo: '/images/league-logo-mock.jpg',
        name: 'KW Delikatesy Centrum Extra League',
        startDate: new Date(2024, 7, 1),
        endDate: new Date(2024, 7, 2),
        owner: 'Andrzej Piaseczny',
        matches: 2352
    },
    {
        logo: '/images/league-logo-mock.jpg',
        name: 'KW Delikatesy Centrum Extra League',
        startDate: new Date(2024, 7, 1),
        endDate: new Date(2024, 7, 2),
        owner: 'Andrzej Piaseczny',
        matches: 2352
    },
    {
        logo: '/images/league-logo-mock.jpg',
        name: 'KW Delikatesy Centrum Extra League',
        startDate: new Date(2024, 7, 1),
        endDate: new Date(2024, 7, 2),
        owner: 'Andrzej Piaseczny',
        matches: 2352
    },
    {
        logo: '/images/league-logo-mock.jpg',
        name: 'KW Delikatesy Centrum Extra League',
        startDate: new Date(2024, 7, 1),
        endDate: new Date(2024, 7, 2),
        owner: 'Andrzej Piaseczny',
        matches: 2352
    },
    {
        logo: '/images/league-logo-mock.jpg',
        name: 'KW Delikatesy Centrum Extra League',
        startDate: new Date(2024, 7, 1),
        endDate: new Date(2024, 7, 2),
        owner: 'Andrzej Piaseczny',
        matches: 2352
    },
    {
        logo: '/images/league-logo-mock.jpg',
        name: 'KW Delikatesy Centrum Extra League',
        startDate: new Date(2024, 7, 1),
        endDate: new Date(2024, 7, 2),
        owner: 'Andrzej Piaseczny',
        matches: 2352
    }
];

export const privateTableMockData: LeagueTableData[] = [
    {
        logo: '/images/league-logo-mock.jpg',
        name: 'Private Kroscienko Runs',
        startDate: new Date(2024, 2, 1),
        endDate: new Date(2024, 9, 2),
        owner: 'Krzysztof Jarzyna',
        matches: 3
    }
];
