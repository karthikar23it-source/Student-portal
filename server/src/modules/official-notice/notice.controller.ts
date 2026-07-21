import type { Request, Response } from "express";
import { NoticeService } from "./notice.service.js";
import { viewNoticeDetailSchema } from "./notice.validation.js";

const noticeService = new NoticeService();

export class NoticeController {
  async viewNoticeDetail(req: Request, res: Response) {
    try {
      const { noticeId } = viewNoticeDetailSchema.parse(req.params);

      const notice = await noticeService.viewNoticeDetail(
        noticeId
      );

      return res.status(200).json(notice);
    } catch (error: any) {
      console.error("========== VIEW NOTICE ERROR ==========");
      console.error(error);
      console.error("======================================");

      if (error.message === "NOTICE_NOT_FOUND") {
        return res.status(404).json({
          error: "NOTICE_NOT_FOUND",
        });
      }

      return res.status(500).json({
        success: false,
        error: error.message,
        stack:
          process.env.NODE_ENV === "development"
            ? error.stack
            : undefined,
      });
    }
  }
}