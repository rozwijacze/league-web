import MainNavigation from '@/components/layout/MainNavigation';
import UserProfile from '@/components/layout/UserProfile';
import '@/styles/global.css';

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-screen max-w-[1920px] flex flex-col items-center justify-center m-auto">
            <div className="flex flex-row justify-between p-[6px] h-20 w-full ">
                <MainNavigation />
                <UserProfile />
            </div>
            <main className="flex grow w-full h-full items-center justify-center p-[6px]">{children}</main>
        </div>
    );
}
