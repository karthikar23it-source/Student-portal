import { House, FileText, BriefcaseBusiness, Bell, User } from 'lucide-react';

const BottomNavigation = () => {
  return (
    <nav className="sticky bottom-0 z-20 border-t bg-white">
      <div className="flex items-center justify-around py-2">
        <button className="flex flex-col items-center text-blue-600">
          <House size={22} />
          <span className="mt-1 text-xs font-medium">Home</span>
        </button>

        <button className="flex flex-col items-center text-gray-500 hover:text-blue-600">
          <FileText size={22} />
          <span className="mt-1 text-xs">Notices</span>
        </button>

        <button className="flex flex-col items-center text-gray-500 hover:text-blue-600">
          <BriefcaseBusiness size={22} />
          <span className="mt-1 text-xs">Opps</span>
        </button>

        <button className="flex flex-col items-center text-gray-500 hover:text-blue-600">
          <Bell size={22} />
          <span className="mt-1 text-xs">Alerts</span>
        </button>

        <button className="flex flex-col items-center text-gray-500 hover:text-blue-600">
          <User size={22} />
          <span className="mt-1 text-xs">Profile</span>
        </button>
      </div>
    </nav>
  );
};

export default BottomNavigation;
