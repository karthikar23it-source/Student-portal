import DashboardHeader from '../components/DashboardHeader';
import BottomNavigation from '../components/BottomNavigation';
import FeedCard from '../components/FeedCard';
import { useDashboard } from '../hooks/useDashboard';

const Dashboard = () => {
  const { feed, loading } = useDashboard();

  return (
    <div className="min-h-screen flex justify-center bg-[#EEF3FB]">
      <div className="flex h-screen w-full max-w-[470px] flex-col bg-[#F8FAFC]">
        {/* Header */}
        <DashboardHeader studentFirstName="Aslam" unreadNotifications={2} />

        {/* Feed */}
        <main
          className="
            flex-1
            overflow-y-auto
            px-5
            pt-4
            pb-24
          "
        >
          {loading ? (
            <div className="py-10 text-center text-[14px] text-[#6B7280]">Loading...</div>
          ) : (
            <div className="flex flex-col gap-6">
              {feed.map((item, index) => (
                <FeedCard
                  key={
                    item.itemType +
                    '-' +
                    (item.noticeId ?? item.opportunityId ?? item.reminderId ?? index)
                  }
                  item={item}
                />
              ))}
            </div>
          )}
        </main>

        {/* Bottom Navigation */}
        <BottomNavigation />
      </div>
    </div>
  );
};

export default Dashboard;
