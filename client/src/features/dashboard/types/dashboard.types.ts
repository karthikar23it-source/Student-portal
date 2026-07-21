export type FeedItemType =
  'official_notice' | 'opportunity' | 'workshop' | 'placement' | 'reminder';

export interface DashboardFeedItem {
  itemType: FeedItemType;

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
