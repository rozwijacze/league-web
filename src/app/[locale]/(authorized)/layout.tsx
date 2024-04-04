import MainNavigation from '@/app/components/MainNavigation/MainNavigation';
import '@/styles/global.css';

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <MainNavigation />
            <main>{children}</main>
        </>
    );
}
