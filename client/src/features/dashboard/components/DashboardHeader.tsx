import { Bell } from 'lucide-react';

interface DashboardHeaderProps {
  studentFirstName: string;
  unreadNotifications?: number;
}

const DashboardHeader = ({ studentFirstName, unreadNotifications = 0 }: DashboardHeaderProps) => {
  return (
    <header className="bg-white px-6 pt-5 pb-6">
      <div className="flex items-start justify-between">
        <div className="pt-1">
          <p className="text-[14px] font-normal leading-none text-[#6B7280]">Good morning,</p>

          <h1 className="mt-3 flex items-center text-[32px] font-bold leading-none tracking-[-0.8px] text-black">
            {studentFirstName}

            <span className="ml-2 text-[24px]">👋</span>
          </h1>
        </div>

        <button
          className="
            relative
            flex
            h-[50px]
            w-[50px]
            items-center
            justify-center
            rounded-full
            bg-[#EEF4FF]
            shadow-sm
          "
        >
          <Bell size={21} strokeWidth={2} className="text-[#374151]" />

          {unreadNotifications > 0 && (
            <span
              className="
                absolute
                right-[13px]
                top-[13px]
                h-[8px]
                w-[8px]
                rounded-full
                bg-[#2563EB]
              "
            />
          )}
        </button>
      </div>
    </header>
  );
};

export default DashboardHeader;
