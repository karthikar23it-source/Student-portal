export type DashboardFeedItemType = 'official_notice' | 'opportunity' | 'calendar_reminder';

export interface DashboardFeedItem {
  itemType: DashboardFeedItemType;

  noticeId?: number;
  opportunityId?: number;
  reminderId?: number;

  title: string;
  category?: string;
  deadline?: string;
  postedAt: string;
}

export interface DashboardFeedResponse {
  feed: DashboardFeedItem[];
}
