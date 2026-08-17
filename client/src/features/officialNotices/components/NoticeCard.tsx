import { ChevronRight, FileText } from 'lucide-react';
import type { OfficialNotice } from '../types/officialNotice.types';

interface NoticeCardProps {
  notice: OfficialNotice;
  onClick: (noticeId: number) => void;
}

const NoticeCard = ({ notice, onClick }: NoticeCardProps) => {
  return (
    <div className="notice-card" onClick={() => onClick(notice.noticeId)}>
      <div className="notice-card-top">
        {/* Icon */}
        <div className="notice-icon">
          <FileText size={22} />
        </div>

        {/* Content */}
        <div className="notice-content">
          <div className="notice-meta">
            <span className="notice-tag">{notice.category}</span>

            <span className="notice-time">{notice.postedAt}</span>
          </div>

          <div className="notice-title">{notice.title}</div>

          <div className="notice-footer">
            <span className="notice-author">{notice.postedBy}</span>

            <ChevronRight size={20} className="notice-arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeCard;
