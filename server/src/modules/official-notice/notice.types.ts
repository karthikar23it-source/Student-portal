export interface NoticeDetailResponse {
  noticeId: string;
  title: string;
  category: string;
  postedBy: string;
  description: string;
  attachmentUrl?: string;
  publishedAt: Date;
}