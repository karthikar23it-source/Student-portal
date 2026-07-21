import { api } from '../../../lib/api';
import type { NoticeDetailResponse } from '../types/notice.types';

export const viewNoticeDetail = async (
  noticeId: string
): Promise<NoticeDetailResponse> => {
  const response = await api.get<NoticeDetailResponse>(
    `/notices/${noticeId}`
  );

  return response.data;
};

export const downloadAttachment = (
  attachmentUrl: string
) => {
  window.open(attachmentUrl, '_blank');
};