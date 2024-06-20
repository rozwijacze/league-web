import '@/styles/global.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

type Props = {
    children: React.ReactNode;
    params: { locale: string };
};

export default async function RootLayout({ children, params: { locale } }: Props) {
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body>
                <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
            </body>
        </html>
    );
}
