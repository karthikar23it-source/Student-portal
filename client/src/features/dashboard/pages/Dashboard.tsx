import DashboardHeader from '../components/DashboardHeader';
import BottomNavigation from '../components/BottomNavigation';
import FeedCard from '../components/FeedCard';

const Dashboard = () => {
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
          {/* Cards */}
          <div className="flex flex-col gap-6">
            <FeedCard
              item={{
                itemType: 'official_notice',
                noticeId: 1,
                title: 'Semester Examination Timetable Published',
                subtitle: 'Check the complete schedule for all departments.',
                postedAt: '2026-07-22T09:15:00Z',
              }}
            />

            <FeedCard
              item={{
                itemType: 'opportunity',
                opportunityId: 2,
                title: 'Microsoft Internship 2026',
                subtitle: 'Registration closes on 18 July.',
                postedAt: '2026-07-22T07:00:00Z',
              }}
            />

            <FeedCard
              item={{
                itemType: 'workshop',
                workshopId: 3,
                title: 'Flutter Development Workshop',
                subtitle: 'Tomorrow • Seminar Hall A',
                postedAt: '2026-07-21T09:00:00Z',
              }}
            />

            <FeedCard
              item={{
                itemType: 'reminder',
                reminderId: 4,
                title: 'Hackathon Registration',
                subtitle: 'Closing in 2 days. Submit your team.',
                postedAt: '2026-07-20T09:00:00Z',
              }}
            />

            <FeedCard
              item={{
                itemType: 'placement',
                placementId: 5,
                title: 'TCS Campus Recruitment',
                subtitle: 'Registration open for Final Year students.',
                postedAt: '2026-07-19T09:00:00Z',
              }}
            />
          </div>
        </main>

        {/* Bottom Navigation */}
        <BottomNavigation />
      </div>
    </div>
  );
};

export default Dashboard;
