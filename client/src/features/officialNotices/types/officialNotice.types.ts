export type NoticeCategory = 'IMPORTANT' | 'GENERAL' | 'EVENT' | 'URGENT';

export interface OfficialNotice {
  noticeId: number;
  category: NoticeCategory;
  title: string;
  description: string;
  postedBy: string;
  postedAt: string;
  attachmentName?: string;
}

export interface OfficialNoticeResponse {
  notices: OfficialNotice[];
}
