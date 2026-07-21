import DashboardHeader from '../components/DashboardHeader';
import BottomNavigation from '../components/BottomNavigation';

const Dashboard = () => {
  return (
    <div className="mx-auto flex h-screen max-w-[430px] flex-col bg-gray-100">
      {/* Header */}
      <DashboardHeader studentFirstName="Aslam" unreadNotifications={3} />

      {/* Scrollable Feed Area */}
      <main className="flex-1 overflow-y-auto px-4 py-4">
        <div className="flex h-full items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-white">
          <p className="text-gray-400">Dashboard Feed Coming Soon...</p>
        </div>
      </main>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};

export default Dashboard;
