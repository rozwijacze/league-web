import '@/styles/global.css';

type Props = {
    children: React.ReactNode;
    params: { locale: string };
};

export default function RootLayout({ children, params: { locale } }: Props) {
    return (
        <html lang={locale}>
            <body>{children}</body>
        </html>
    );
}
