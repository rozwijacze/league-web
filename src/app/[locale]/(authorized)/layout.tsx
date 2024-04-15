import MainNavigation from '@/components/layout/MainNavigation';
import '@/styles/global.css';

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <MainNavigation />
            <main className='flex items-center justify-center'>{children}</main>
        </>
    );
}
