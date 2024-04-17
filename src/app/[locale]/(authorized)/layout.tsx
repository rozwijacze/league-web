import MainNavigation from '@/components/layout/MainNavigation';
import UserProfile from '@/components/layout/UserProfile';
import '@/styles/global.css';

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-screen max-w-[1920px] flex flex-col m-auto">
            <div className="flex justify-between p-[6px] h-20 w-full ">
                <MainNavigation />
                <UserProfile />
            </div>
            <main className="w-full h-full p-[6px]">{children}</main>
        </div>
    );
}
