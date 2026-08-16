import { Notice } from "./notice.model.js";
import type { INotice } from "./notice.model.js";

export class NoticeRepository {
  async findNoticeById(
    noticeId: string
  ): Promise<INotice | null> {
    return Notice.findById(noticeId);
  }
}