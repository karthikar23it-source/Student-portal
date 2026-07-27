import type { Request, Response } from 'express';
import { OfficialNoticeService } from './officialNotice.service.js';

const officialNoticeService = new OfficialNoticeService();

export class OfficialNoticeController {
  async loadNotices(_req: Request, res: Response) {
    try {
      const result = await officialNoticeService.loadNotices();

      return res.status(200).json(result);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Internal Server Error';

      return res.status(500).json({
        success: false,
        error: message,
      });
    }
  }
}
