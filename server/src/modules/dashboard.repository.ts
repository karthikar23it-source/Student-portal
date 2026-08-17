import { OfficialNotice } from './officialNotice/models/officialNotice.model.js';
import type { DashboardFeedItem } from './dashboard.types.js';

export class DashboardRepository {
  async loadDashboardFeed(_studentId: string): Promise<DashboardFeedItem[]> {
    const notices = await OfficialNotice.find()
      .sort({
        publishedAt: -1,
      })
      .lean();

    console.log('DASHBOARD DEBUG - notices found:', notices.length);
    console.log('DASHBOARD DEBUG - notices:', notices);

    return notices.map((notice) => ({
      itemType: 'official_notice',
      noticeId: notice.noticeId,
      title: notice.title,
      category: notice.category,
      postedAt: notice.publishedAt.toISOString(),
    }));
  }
}
