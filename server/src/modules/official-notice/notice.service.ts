import { NoticeRepository } from "./notice.repository.js";

export class NoticeService {
  private noticeRepository = new NoticeRepository();

  async viewNoticeDetail(noticeId: string) {
    const notice = await this.noticeRepository.findNoticeById(
      noticeId
    );

    if (!notice) {
      throw new Error("NOTICE_NOT_FOUND");
    }

    return {
      noticeId: notice._id,
      title: notice.title,
      category: notice.category,
      postedBy: notice.postedBy,
      description: notice.description,
      attachmentUrl: notice.attachmentUrl,
      publishedAt: notice.publishedAt,
    };
  }
}