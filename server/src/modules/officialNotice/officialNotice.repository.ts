import { OfficialNotice } from './models/officialNotice.model.js';
import type { IOfficialNotice } from './officialNotice.types.js';

export class OfficialNoticeRepository {
  /**
   * Load all official notices
   */
  async loadNotices(): Promise<IOfficialNotice[]> {
    return OfficialNotice.find().sort({
      publishedAt: -1,
    });
  }
}
