import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  viewNoticeDetail,
  downloadAttachment,
} from "../services/notice.service";

import type { NoticeDetailResponse } from "../types/notice.types";

const NoticeDetail = () => {
  const { noticeId } = useParams();
  const navigate = useNavigate();

  const [notice, setNotice] =
    useState<NoticeDetailResponse | null>(null);

  useEffect(() => {
    if (!noticeId) return;

    const fetchNotice = async () => {
      try {
        const response = await viewNoticeDetail(noticeId);
        setNotice(response);
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
      <div className="notice-header">
        <button
          className="back-btn"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        <span className="notice-category">
          {notice.category}
        </span>
      </div>

      <h1>{notice.title}</h1>

      <p className="notice-meta">
        📢 {notice.postedBy}
        <br />
        🗓{" "}
        {new Date(notice.publishedAt).toLocaleString()}
      </p>

      <div className="notice-description">
        <p>{notice.description}</p>
      </div>

      {notice.attachmentUrl && (
        <button
          className="attachment-btn"
          onClick={() =>
            downloadAttachment(notice.attachmentUrl!)
          }
        >
          📄 View Attachment
        </button>
      )}
    </>
  );
};

export default NoticeDetail;