import { useEffect, useState } from 'react';

import { getDashboardFeed } from '../services/dashboard.service';
import type { DashboardFeedItem } from '../types/dashboard.types';

export const useDashboard = () => {
  const [feed, setFeed] = useState<DashboardFeedItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const response = await getDashboardFeed();
        setFeed(response.feed);
      } catch (error) {
        console.error(error);
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
