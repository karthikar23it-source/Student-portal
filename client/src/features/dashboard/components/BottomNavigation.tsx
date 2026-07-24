import { Bell, BriefcaseBusiness, FileText, Home, User } from 'lucide-react';

const BottomNavigation = () => {
  return (
    <nav
      className="
        sticky
        bottom-0
        border-t
        border-[#E8EDF5]
        bg-white
        px-5
        py-3
      "
    >
      <div className="flex items-center justify-around">
        {/* Home */}
        <button className="flex flex-col items-center gap-1">
          <div
            className="
              flex
              h-9
              w-11
              items-center
              justify-center
              rounded-full
              bg-[#E8F0FF]
            "
          >
            <Home size={19} strokeWidth={2.3} className="text-[#2563EB]" />
          </div>

          <span className="text-[11px] font-semibold text-[#2563EB]">Home</span>
        </button>

        {/* Notices */}
        <button className="flex flex-col items-center gap-1">
          <FileText size={19} strokeWidth={2} className="text-[#6B7280]" />

          <span className="text-[11px] text-[#6B7280]">Notices</span>
        </button>

        {/* Opportunities */}
        <button className="flex flex-col items-center gap-1">
          <BriefcaseBusiness size={19} strokeWidth={2} className="text-[#6B7280]" />

          <span className="text-[11px] text-[#6B7280]">Opps</span>
        </button>

        {/* Alerts */}
        <button className="relative flex flex-col items-center gap-1">
          <Bell size={19} strokeWidth={2} className="text-[#6B7280]" />

          <span className="text-[11px] text-[#6B7280]">Alerts</span>

          <span className="absolute right-1 top-0 h-2 w-2 rounded-full bg-[#EF4444]" />
        </button>

        {/* Profile */}
        <button className="flex flex-col items-center gap-1">
          <User size={19} strokeWidth={2} className="text-[#6B7280]" />

          <span className="text-[11px] text-[#6B7280]">Profile</span>
        </button>
      </div>
    </nav>
  );
};

export default BottomNavigation;
