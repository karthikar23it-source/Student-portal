import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  viewNoticeDetail,
  downloadAttachment,
} from '../services/notice.service';

import type { Notice } from '../types/notice.types';

const NoticeDetail = () => {
  const { noticeId } = useParams();

  const [notice, setNotice] = useState<Notice | null>(null);

  useEffect(() => {
    if (!noticeId) return;

    const fetchNotice = async () => {
      try {
        const response = await viewNoticeDetail(noticeId);
        setNotice(response.notice);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNotice();
  }, [noticeId]);

  if (!notice) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <span className="notice-category">
        {notice.category}
      </span>

      <h1>{notice.title}</h1>

      <p className="notice-meta">
        {notice.postedBy} •{' '}
        {new Date(notice.createdAt).toLocaleString()}
      </p>

      <div className="notice-description">
        <p>{notice.description}</p>
      </div>

      {notice.attachmentUrl && (
        <button
          onClick={() =>
            downloadAttachment(notice.attachmentUrl!)
          }
        >
          View Attached Timetable
        </button>
      )}
    </>
  );
};

export default NoticeDetail;