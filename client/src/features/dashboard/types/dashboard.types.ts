export type FeedItemType =
  'official_notice' | 'opportunity' | 'workshop' | 'placement' | 'reminder';

export interface DashboardFeedItem {
  // Feed type
  itemType: FeedItemType;

  // IDs (only one will be present depending on the item type)
  noticeId?: number;
  opportunityId?: number;
  reminderId?: number;
  workshopId?: number;
  placementId?: number;

  // Card content
  title: string;
  subtitle?: string;

  // Metadata
  category?: string;
  deadline?: string;
  postedAt: string;

  // Optional action text
  actionLabel?: string;
}

export interface DashboardFeedResponse {
  feed: DashboardFeedItem[];
}
