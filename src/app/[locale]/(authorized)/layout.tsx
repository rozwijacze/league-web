import MainNavigation from '@/components/layout/MainNavigation';
import UserProfile from '@/components/layout/UserProfile';
import '@/styles/global.css';

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative h-screen max-w-[1920px] flex items-center justify-center m-auto">
            <MainNavigation />
            <UserProfile />
            <main>{children}</main>
        </div>
    );
}
