import { DashboardRepository } from './dashboard.repository.js';
import type { DashboardFeedItem } from './dashboard.types.js';

export class DashboardService {
  private readonly dashboardRepository: DashboardRepository;

  constructor() {
    this.dashboardRepository = new DashboardRepository();
  }

  async loadDashboardFeed(studentId: string): Promise<DashboardFeedItem[]> {
    return this.dashboardRepository.loadDashboardFeed(studentId);
  }
}
