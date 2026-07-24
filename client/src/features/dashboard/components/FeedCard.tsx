import { Bell, BriefcaseBusiness, CalendarDays, Circle, Megaphone } from 'lucide-react';

import type { DashboardFeedItem } from '../types/dashboard.types';

interface FeedCardProps {
  item: DashboardFeedItem;
}

const FeedCard = ({ item }: FeedCardProps) => {
  const getIcon = () => {
    switch (item.itemType) {
      case 'official_notice':
        return <Megaphone size={18} strokeWidth={2} />;

      case 'opportunity':
        return <BriefcaseBusiness size={18} strokeWidth={2} />;

      case 'workshop':
        return <CalendarDays size={18} strokeWidth={2} />;

      case 'placement':
        return <Circle size={18} strokeWidth={2} />;

      default:
        return <Bell size={18} strokeWidth={2} />;
    }
  };

  const getCategory = () => {
    switch (item.itemType) {
      case 'official_notice':
        return 'OFFICIAL NOTICE';

      case 'opportunity':
        return 'OPPORTUNITY';

      case 'workshop':
        return 'WORKSHOP';

      case 'placement':
        return 'PLACEMENT';

      default:
        return 'REMINDER';
    }
  };

  const getAction = () => {
    switch (item.itemType) {
      case 'opportunity':
        return 'Apply';

      case 'reminder':
        return 'Open';

      default:
        return 'View';
    }
  };

  return (
    <article
      className="
        w-full
        rounded-[22px]
        border
        border-[#E6EAF2]
        bg-white
        p-5
        shadow-[0_3px_12px_rgba(15,23,42,0.06)]
      "
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div
          className="
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-[#EEF4FF]
            text-[#2563EB]
          "
        >
          {getIcon()}
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col overflow-hidden">
          <span className="text-[11px] font-semibold tracking-[1px] text-[#2563EB] uppercase">
            {getCategory()}
          </span>

          <h3 className="mt-1 pr-2 text-[16px] font-semibold leading-6 text-[#111827]">
            {item.title}
          </h3>

          {item.subtitle && (
            <p className="mt-1 line-clamp-1 text-[14px] text-[#6B7280]">{item.subtitle}</p>
          )}

          {item.deadline && <p className="mt-1 text-[14px] text-[#6B7280]">{item.deadline}</p>}

          {/* Bottom Row */}
          <div className="mt-4 flex items-center justify-between">
            <span className="text-[12px] text-[#9CA3AF]">
              {new Date(item.postedAt).toLocaleDateString()}
            </span>

            <button
              className="
                shrink-0
                rounded-md
                px-2
                py-1
                text-[13px]
                font-semibold
                text-[#2563EB]
                hover:bg-[#EEF4FF]
              "
            >
              {getAction()}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default FeedCard;
