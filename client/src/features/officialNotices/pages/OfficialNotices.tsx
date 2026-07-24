import NoticeCard from '../components/NoticeCard';
import { notices } from '../data/notices';

import '../styles/officialNotices.css';

const OfficialNotices = () => {
  const viewNoticeDetail = (noticeId: number) => {
    console.log('Notice ID:', noticeId);

    // Sprint 3 Task 2
    // Another teammate will connect Notice Detail.
  };

  return (
    <div className="official-notices-page">
      <div className="official-notices-container">
        <header className="official-header">
          <h1>Official Notices</h1>
        </header>

        <main className="notice-list">
          {notices.map((notice) => (
            <NoticeCard key={notice.noticeId} notice={notice} onClick={viewNoticeDetail} />
          ))}
        </main>
      </div>
    </div>
  );
};

export default OfficialNotices;
