export interface Notice {
  id: string;
  category: string;
  title: string;
  description: string;
  postedBy: string;
  createdAt: string;
  attachmentUrl?: string;
}

export interface NoticeDetailResponse {
  success: boolean;
  notice: Notice;
}