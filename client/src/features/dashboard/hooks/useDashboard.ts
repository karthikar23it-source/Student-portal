import { useEffect, useState } from 'react';

import { loadDashboardFeed } from '../services/dashboard.service';
import type { DashboardFeedItem } from '../types/dashboard.types';

export const useDashboard = () => {
  const [feed, setFeed] = useState<DashboardFeedItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const response = await loadDashboardFeed('1');
        setFeed(response.feed);
      } catch (error) {
        console.error('Failed to load dashboard feed:', error);
      } finally {
        setLoading(false);
      }
    };

    loadDashboard();
  }, []);

  return {
    feed,
    loading,
  };
};
