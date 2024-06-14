export interface LeagueTableData {
    logo: string;
    name: string;
    startDate: Date;
    endDate: Date;
    owner: string;
    matches: number;
    detailedInfo: string;
}

export const publicTableMockData: LeagueTableData[] = [
    {
        logo: '/images/league-logo-mock.jpg',
        name: 'KW Delikatesy Centrum Extra League',
        startDate: new Date(2024, 7, 1),
        endDate: new Date(2024, 7, 2),
        owner: 'Andrzej Piaseczny',
        matches: 2352,
        detailedInfo: 'Additional info about the league'
    },
    {
        logo: '/images/league-logo-mock.jpg',
        name: 'Grandmasters Global League',
        startDate: new Date(2024, 5, 15),
        endDate: new Date(2024, 8, 20),
        owner: 'Michał Wiśniewski',
        matches: 1234,
        detailedInfo: 'This league brings together top players from around the world.'
    },
    {
        logo: '/images/league-logo-mock.jpg',
        name: 'Junior Champions League',
        startDate: new Date(2024, 3, 10),
        endDate: new Date(2024, 6, 25),
        owner: 'Anna Nowak',
        matches: 542,
        detailedInfo: 'A league for young aspiring champions under 18.'
    },
    {
        logo: '/images/league-logo-mock.jpg',
        name: 'Amateur Enthusiasts League',
        startDate: new Date(2024, 9, 5),
        endDate: new Date(2024, 12, 15),
        owner: 'Jan Kowalski',
        matches: 789,
        detailedInfo: 'An amateur league for sports enthusiasts.'
    },
    {
        logo: '/images/league-logo-mock.jpg',
        name: 'Veterans United League',
        startDate: new Date(2024, 4, 20),
        endDate: new Date(2024, 11, 30),
        owner: 'Jerzy Dudek',
        matches: 967,
        detailedInfo: 'A league for veteran players aged 40 and above.'
    },
    {
        logo: '/images/league-logo-mock.jpg',
        name: 'Corporate Teams Championship',
        startDate: new Date(2024, 6, 1),
        endDate: new Date(2024, 10, 10),
        owner: 'Małgorzata Rozenek',
        matches: 1345,
        detailedInfo: 'A championship for teams from various corporations.'
    }
];

export const privateTableMockData: LeagueTableData[] = [
    {
        logo: '/images/league-logo-mock.jpg',
        name: 'Private Kroscienko Runs',
        startDate: new Date(2024, 2, 1),
        endDate: new Date(2024, 9, 2),
        owner: 'Krzysztof Jarzyna',
        matches: 3,
        detailedInfo: 'Additional info about the league'
    },
    {
        logo: '/images/league-logo-mock.jpg',
        name: 'Exclusive Mountain League',
        startDate: new Date(2024, 5, 1),
        endDate: new Date(2024, 9, 1),
        owner: 'Sylwia Grzeszczak',
        matches: 12,
        detailedInfo: 'An exclusive league for select teams competing in mountain regions.'
    },
    {
        logo: '/images/league-logo-mock.jpg',
        name: 'Secret Champions Club',
        startDate: new Date(2024, 1, 10),
        endDate: new Date(2024, 4, 15),
        owner: 'Robert Lewandowski',
        matches: 8,
        detailedInfo: 'A private club for champions with restricted access.'
    }
];
