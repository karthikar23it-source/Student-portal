import { OfficialNoticeRepository } from './officialNotice.repository.js';

export class OfficialNoticeService {
  private officialNoticeRepository = new OfficialNoticeRepository();

  async loadNotices() {
    const notices = await this.officialNoticeRepository.loadNotices();

    return {
      notices,
    };
  }
}
