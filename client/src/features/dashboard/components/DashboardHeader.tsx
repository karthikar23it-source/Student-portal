import { Bell } from 'lucide-react';

interface DashboardHeaderProps {
  studentFirstName: string;
  unreadNotifications?: number;
}

const DashboardHeader = ({ studentFirstName, unreadNotifications = 0 }: DashboardHeaderProps) => {
  return (
    <header className="sticky top-0 z-20 bg-white border-b px-5 py-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">Good morning,</p>

          <h1 className="text-2xl font-bold text-gray-900">{studentFirstName} 👋</h1>
        </div>

        <button className="relative rounded-full p-2 transition hover:bg-gray-100">
          <Bell size={24} />

          {unreadNotifications > 0 && (
            <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500" />
          )}
        </button>
      </div>
    </header>
  );
};

export default DashboardHeader;
